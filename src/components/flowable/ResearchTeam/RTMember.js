import React  from "react";

const extraSettingsRest = {
	tagsEnabled: false,
	preselectAll: false,
	enableAutocomplete: true,
	autocompleteMinLength: 0,
	dataSource: "Rest",
	queryUrl: `{{endpoints.cayuse}}/person?name_like={{$searchText}}`,
	lookupUrl: `{{endpoints.cayuse}}/person?id_like={{$id}}`,
	formatItem: "{{$item.name}}",
	storage: "Id",
	identity: "id",
	linkTarget: "_blank",
	linkUrl: "",
	multi: false
};


export const RTMember = props => {
	const {
		item,
		config,
		Components,
		restProps,
	} = props;

	const memberConfig = {
		label: `Name`,
		$path: `${config.$path}.0.member`,
		type: "select",
		value: item["member"],
		enabled: true,
		extraSettings: extraSettingsRest,
		$original: {
			extraSettings: extraSettingsRest,
		},
	};

	return (
		<Components.select
			{...restProps}
			config={memberConfig}
			onChange={() => {}}
		/>
	);
};
