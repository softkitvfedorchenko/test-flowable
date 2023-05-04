import * as React from "react";

import { Model } from "@flowable/forms";

import { RTMember } from "./RTMember";

class ResearchTeam extends Model.StatefulFormComponent {
	state = {
		touched: true,
		formValid: true,
		loading: false,
		value: [],
		hasPrincipalInvestigator: false,
		completeCredit: 0,
		memberToAssociationLookupMap: {},
		initialLoad: true,
		selectedAssociationsDetails: [],
	};

	render () {
		const { Components, config} = this.props;

		const disabled = this.props.config.enabled === false;
		const bem = this.bem("panel", { disabled });

		return (
			<div className={bem()}>
				{config.value.map((item, index) => (
					<RTMember
						key={index}
						item={item}
						bem={bem}
						config={this.props.config}
						Components={Components}
						value={config.value}
						restProps={this.props}
					/>
				))}
			</div>
		);
	}
}

export default ResearchTeam;
