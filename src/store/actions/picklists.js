import { isNonEmptyArray } from "@bit/cayuse.react.utils.type-checks";

import { API_ORGANIZATION, API_UNIT, IS_DEV, PICKLIST_TYPE } from "globals/constants";
import { picklists as constants } from "store/constants";
import {
	findOrganizations,
	findTeams,
	findUnitsFromSP,
	getResearchTeamRoles,
	spUrl,
	notifyError,
} from "utils";
import { request } from "utils/proxy";
import store, { dispatch } from "store/store";

import { picklistsSelectors } from "../selectors";


const setPicklistIsFetching = (picklistId, isFetching) => dispatch({
	type: constants.IS_FETCHING,
	picklistId,
	isFetching
});

const setPicklistHasError = (picklistId, hasError) => dispatch({
	type: constants.SET_ERROR,
	picklistId,
	hasError
});

const setPicklistOptions = (picklistId, options) => dispatch({
	type: constants.SET_OPTIONS,
	picklistId,
	options
});

const onError = (picklistId, error) => {
	const dictionary = store.getState().dictionary.common;
	const message = IS_DEV ? error.message : dictionary.picklist.genericError;

	notifyError(message, error);
	setPicklistHasError(picklistId, message);
};

const fetchSingleEntity = async ({
	source,
	entityId,
	requestUrl,
	picklistId
}) => {
	if (isNonEmptyArray(source) && !source.find(entity => entity.value === entityId)) {
		try {
			const entity = await request(`${requestUrl}/${entityId}`);

			const entityOption = { ...entity, text: entity.name, value: entity.id };
			setPicklistOptions(picklistId, [ ...source, entityOption ]);

		} catch (error) {
			onError(picklistId, error);
		}
	}
};

export const fetchSingleUnit = async unitId => {
	await fetchSingleEntity({
		source: picklistsSelectors.units().options,
		entityId: unitId,
		requestUrl: spUrl(API_UNIT),
		picklistId: PICKLIST_TYPE.UNITS,
	});
};

export const fetchSingleOrganization = async orgId => {
	await fetchSingleEntity({
		source: picklistsSelectors.organizations().options,
		entityId: orgId,
		requestUrl: spUrl(API_ORGANIZATION),
		picklistId: PICKLIST_TYPE.ORGANIZATIONS,
	});
};

export const fetchMultipleOrganizations = async orgIds => {
	if (isNonEmptyArray(orgIds)) {
		const organizations = picklistsSelectors.organizations().options;

		if (isNonEmptyArray(organizations)) {
			const response = await Promise.all(orgIds.map(id => request(`${spUrl(API_ORGANIZATION)}/${id}`)));

			const newOrganizations = response.reduce((acc, org) => {
				acc.push({ ...org, text: org.name, value: org.id });

				return acc;
			}, organizations);

			setPicklistOptions(PICKLIST_TYPE.ORGANIZATIONS, newOrganizations);
		}
	}
};

export const fetchPicklistOptions = async (picklistId, options = { force: false }) => {
	const { force } = options;
	const picklistOptions = picklistsSelectors.picklists()[picklistId].options;
	const hasExistingOptions = isNonEmptyArray(picklistOptions);

	let promise;

	if (!force && hasExistingOptions) {
		promise = Promise.resolve(picklistOptions);
	} else if (picklistId === PICKLIST_TYPE.AD_HOC_TEAMS) {
		promise = findTeams();
	} else if (picklistId === PICKLIST_TYPE.RESEARCH_TEAM_ROLES) {
		promise = getResearchTeamRoles();
	} else if (picklistId === PICKLIST_TYPE.ORGANIZATIONS) {
		promise = findOrganizations();
	} else if (picklistId === PICKLIST_TYPE.UNITS) {
		promise = findUnitsFromSP();
	} else {
		throw new Error("Unknown picklist id.");
	}

	setPicklistIsFetching(picklistId, true);
	setPicklistHasError(picklistId, '');

	try {
		const options = await promise;

		setPicklistOptions(picklistId, options);

	} catch (error) {
		onError(picklistId, error);

	} finally {
		setPicklistIsFetching(picklistId, false);
	}
};
