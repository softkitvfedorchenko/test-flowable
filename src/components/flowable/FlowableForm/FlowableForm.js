import React from "react";

import { Form } from "@flowable/forms";


import "@flowable/forms/flwforms.min.css";

import { baseUrl } from "../../../mockData/config";
import { formConfig } from "../../../mockData/formConfig";
import { formVariables } from "../../../mockData/formVariables";
import ResearchTeam from "../ResearchTeam/ResearchTeam";

const FlowableForm = () => {
	const fetchData = (url, options) => {
		return fetch(baseUrl + url, options).then(data => ({
			/**
			 * on PRODUCTION we use this code (without extra logic):
			 * json: () => Promise.resolve(data)
			 *
			 */
			json: async () => {
				// for this url response should be a single value - not an array
				if (url.includes("person?id_like")) {
					const object = await data.json();
					const value = object.length > 0 ? object[0] : object;

					return Promise.resolve(value);
				}

				if (url.includes("person?name_like")) {
					console.groupCollapsed(url)
					console.log('url: ', url);
					const value = await data.json();
					console.log('value: ', value);
					console.groupEnd();

					return Promise.resolve(value);
				}

				return Promise.resolve(data);
			},
			text: () => Promise.resolve(JSON.stringify(data)),
		}));
	};

	return (
		<Form
			Components={{ researchTeam: ResearchTeam }}
			config={formConfig}
			fetch={fetchData}
			payload={formVariables}
			debug={true}
		/>
	);
};

export default FlowableForm;
