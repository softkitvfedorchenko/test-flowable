export const formConfig = {
	metadata: {
		key: "proposalContainerForm",
		name: "Proposal Container Form",
		description: "",
		version: "8",
		type: "2",
		flowableDesignVersion: 3110
	},
	rows: [
		{
			cols: [
				{
					designInfo: {
						bounds: {
							upperLeft: {
								x: 15,
								y: 25
							},
							lowerRight: {
								x: 984,
								y: 93
							}
						},
						stencilSuperIds: [
							"SubForm"
						],
						stencilId: "cloud-sub-form",
						customStencilId: null
					},
					labelAlign: "top",
					value: "{{root.proposalContent}}",
					size: 12,
					ignore: false,
					visible: true,
					enabled: "{{!root.isApproved}}",
					isRequired: false,
					extraSettings: {
						showBorder: false,
						collapsible: false,
						collapsed: false,
						formRef: "proposalForm",
						multipleEntries: false,
						showAddButton: true,
						showDeleteButton: true,
						layoutDefinition: {
							rows: [
								{
									cols: [
										{
											designInfo: {
												bounds: {
													upperLeft: {
														x: 15,
														y: 25
													},
													lowerRight: {
														x: 984,
														y: 173
													}
												},
												stencilSuperIds: [
													"Tabs"
												],
												stencilId: "cloud-tabs",
												customStencilId: "null"
											},
											labelAlign: "top",
											size: 12,
											ignore: false,
											visible: true,
											enabled: true,
											isRequired: false,
											extraSettings: {
												validationPanelDisplay: "show",
												tabsorder: [
													"tab-panel12",
												],
												activetab: "tab-panel4",
												showBorder: false,
												sections: [
													{
														designInfo: {
															bounds: {
																upperLeft: {
																	x: 25,
																	y: 25
																},
																lowerRight: {
																	x: 944,
																	y: 459
																}
															},
															stencilSuperIds: [
																"SubSlotPanel"
															],
															stencilId: "cloud-tab-panel",
															customStencilId: "null"
														},
														label: "Key Personnel",
														labelAlign: "top",
														size: 12,
														ignore: false,
														visible: true,
														enabled: true,
														isRequired: false,
														extraSettings: {
															validationPanelDisplay: "show",
															serverValidationMethod: "GET",
															layoutDefinition: {
																rows: [
																	{
																		cols: [
																			{
																				designInfo: {
																					bounds: {
																						upperLeft: {
																							x: 15,
																							y: 25
																						},
																						lowerRight: {
																							x: 954,
																							y: 75
																						}
																					},
																					stencilSuperIds: [
																						"Output"
																					],
																					stencilId: "cloud-output",
																					customStencilId: "null"
																				},
																				labelAlign: "top",
																				value: "<h2><strong>Choose each member of the key personnel team, starting with the Lead Principal Investigator.</strong></h2>\n\n<p><br />\n</p>\n",
																				defaultValue: false,
																				size: 12,
																				ignore: false,
																				visible: true,
																				enabled: true,
																				isRequired: false,
																				extraSettings: {
																					validationPanelDisplay: "show"
																				},
																				id: "output11",
																				i18n: {
																					en_us: {
																						value: "<h2><strong>Choose each member of the key personnel team, starting with the Lead Principal Investigator.</strong></h2>\n\n<p><br />\n</p>\n"
																					}
																				},
																				type: "htmlComponent"
																			}
																		]
																	},
																	{
																		cols: [
																			{
																				designInfo: {
																					bounds: {
																						upperLeft: {
																							x: 15,
																							y: 98
																						},
																						lowerRight: {
																							x: 636,
																							y: 148
																						}
																					},
																					stencilSuperIds: [
																						"Output"
																					],
																					stencilId: "cloud-output",
																					customStencilId: "null"
																				},
																				labelAlign: "top",
																				value: "<p><span style=\"font-size:14px\"><strong>Note: Anyone listed below with a role of Principal Investigator, Co-Principal Investigator, Co-Investigator or Investigator, will be automatically prompted by Cayuse to complete a Proposal Certification before the proposal routes for approval. For applications to PHS agencies, individuals listed on the key personnel team, regardless of role, must be in compliance with Tulane’s requirements for annual disclosures in the Cayuse Outside Interests module.</strong></span></p>\n",
																				defaultValue: false,
																				size: 8,
																				ignore: false,
																				visible: true,
																				enabled: true,
																				isRequired: false,
																				extraSettings: {
																					validationPanelDisplay: "show"
																				},
																				id: "output23",
																				i18n: {
																					en_us: {
																						value: "<p><span style=\"font-size:14px\"><strong>Note: Anyone listed below with a role of Principal Investigator, Co-Principal Investigator, Co-Investigator or Investigator, will be automatically prompted by Cayuse to complete a Proposal Certification before the proposal routes for approval. For applications to PHS agencies, individuals listed on the key personnel team, regardless of role, must be in compliance with Tulane’s requirements for annual disclosures in the Cayuse Outside Interests module.</strong></span></p>\n"
																					}
																				},
																				type: "htmlComponent"
																			},
																			{
																				designInfo: {
																					bounds: {
																						upperLeft: {
																							x: 0,
																							y: 0
																						},
																						lowerRight: {
																							x: 0,
																							y: 0
																						}
																					},
																					stencilSuperIds: [],
																					stencilId: null,
																					customStencilId: null
																				},
																				size: 4,
																				type: ""
																			}
																		]
																	},
																	{
																		cols: [
																			{
																				designInfo: {
																					bounds: {
																						upperLeft: {
																							x: 15,
																							y: 171
																						},
																						lowerRight: {
																							x: 954,
																							y: 219
																						}
																					},
																					stencilSuperIds: [
																						"Component"
																					],
																					stencilId: "cayuse-research-team",
																					customStencilId: "null"
																				},
																				labelAlign: "top",
																				value: "{{keyPersonnel}}",
																				size: 12,
																				ignore: false,
																				visible: true,
																				enabled: true,
																				isRequired: true,
																				extraSettings: {
																					validationPanelDisplay: "show"
																				},
																				label: "Choose each member of the key personnel team, starting with the Lead Principal Investigator.",
																				cayuseShortLabel: "other",
																				cayuseShortLabel2: "Research Team",
																				id: "cayuse-research-team1",
																				cayuseType: "research-team",
																				itemType: "singleColumnComponent",
																				i18n: {
																					en_us: {
																						label: "Choose each member of the key personnel team, starting with the Lead Principal Investigator."
																					}
																				},
																				type: "researchTeam"
																			}
																		]
																	},
																	{
																		cols: [
																			{
																				designInfo: {
																					bounds: {
																						upperLeft: {
																							x: 15,
																							y: 244
																						},
																						lowerRight: {
																							x: 636,
																							y: 336
																						}
																					},
																					stencilSuperIds: [
																						"base-radiobuttons",
																						"Component"
																					],
																					stencilId: "cloud-radiobuttons",
																					customStencilId: "null"
																				},
																				enabled: true,
																				extraSettings: {
																					dataSource: "Static",
																					items: [
																						{
																							text: "Yes",
																							checked: "true"
																						},
																						{
																							text: "No"
																						}
																					],
																					masterDataIncludeTranslations: false,
																					linkTargetView: "browse",
																					storage: "Id",
																					identity: "text",
																					linkTarget: "_blank",
																					validationPanelDisplay: "show"
																				},
																				labelAlign: "top",
																				value: "{{asPIAreThereAnyOtherIndividualsNotListedAboveWhoYouConsiderToBeResponsibleForTheDesignConductAndReportingOfTheResearch}}",
																				size: 8,
																				ignore: false,
																				visible: true,
																				isRequired: true,
																				label: "Are there any other individuals not listed above in the Key Personnel section who the PI considers to be responsible for the design, conduct or reporting of the research described in this proposal?",
																				cayuseShortLabel: "other",
																				cayuseShortLabel2: "Additional Team Members",
																				id: "radiobuttons62",
																				i18n: {
																					en_us: {
																						label: "Are there any other individuals not listed above in the Key Personnel section who the PI considers to be responsible for the design, conduct or reporting of the research described in this proposal?",
																						extraSettings: {
																							items: [
																								{
																									text: "Yes",
																									checked: "true"
																								},
																								{
																									text: "No"
																								}
																							]
																						}
																					}
																				},
																				type: "radio"
																			},
																			{
																				designInfo: {
																					bounds: {
																						upperLeft: {
																							x: 0,
																							y: 0
																						},
																						lowerRight: {
																							x: 0,
																							y: 0
																						}
																					},
																					stencilSuperIds: [],
																					stencilId: null,
																					customStencilId: null
																				},
																				size: 4,
																				type: ""
																			}
																		]
																	},
																	{
																		cols: [
																			{
																				designInfo: {
																					bounds: {
																						upperLeft: {
																							x: 15,
																							y: 361
																						},
																						lowerRight: {
																							x: 238,
																							y: 409
																						}
																					},
																					stencilSuperIds: [
																						"base-multi-select",
																						"Component"
																					],
																					stencilId: "cayuse-person-finder",
																					customStencilId: "null",
																					conditionBuilderInfo: {
																						enabled: {
																							children: [
																								{
																									sourceValue: {
																										name: "asPIAreThereAnyOtherIndividualsNotListedAboveWhoYouConsiderToBeResponsibleForTheDesignConductAndReportingOfTheResearch",
																										variableType: "variable",
																										type: "string",
																										allowedValues: []
																									},
																									operator: "==",
																									targetValue: {
																										value: "Yes",
																										type: "string",
																										variableType: "value"
																									}
																								}
																							],
																							match: "all"
																						},
																						visible: {
																							children: [
																								{
																									sourceValue: {
																										name: "asPIAreThereAnyOtherIndividualsNotListedAboveWhoYouConsiderToBeResponsibleForTheDesignConductAndReportingOfTheResearch",
																										variableType: "variable",
																										type: "string",
																										allowedValues: []
																									},
																									operator: "==",
																									targetValue: {
																										value: "Yes",
																										type: "string",
																										variableType: "value"
																									}
																								}
																							],
																							match: "all"
																						}
																					}
																				},
																				extraSettings: {
																					tagsEnabled: false,
																					preselectAll: false,
																					clientSideFiltering: false,
																					enableAutocomplete: true,
																					autocompleteMinLength: 1,
																					dataSource: "Rest",
																					masterDataIncludeTranslations: false,
																					queryUrl: "{{endpoints.cayuse}}/person?search={{$searchText}}",
																					lookupUrl: "{{endpoints.cayuse}}/person/{{$id}}",
																					linkTargetView: "browse",
																					formatItem: "{{$item.name}}",
																					storage: "Id",
																					identity: "id",
																					linkTarget: "_blank",
																					validationPanelDisplay: "show",
																					multi: true
																				},
																				enabled: "{{asPIAreThereAnyOtherIndividualsNotListedAboveWhoYouConsiderToBeResponsibleForTheDesignConductAndReportingOfTheResearch == 'Yes'}}",
																				labelAlign: "top",
																				value: "{{identifyTulaneEmployees}}",
																				size: 3,
																				ignore: "{{asPIAreThereAnyOtherIndividualsNotListedAboveWhoYouConsiderToBeResponsibleForTheDesignConductAndReportingOfTheResearch=='No'}}",
																				visible: "{{asPIAreThereAnyOtherIndividualsNotListedAboveWhoYouConsiderToBeResponsibleForTheDesignConductAndReportingOfTheResearch == 'Yes'}}",
																				isRequired: "{{asPIAreThereAnyOtherIndividualsNotListedAboveWhoYouConsiderToBeResponsibleForTheDesignConductAndReportingOfTheResearch=='Yes'}}",
																				label: "Identify Tulane Employees:",
																				cayuseShortLabel: "other",
																				cayuseShortLabel2: "Additional Tulane Employees",
																				id: "cayuse-person-finder1",
																				cayuseType: "person-finder",
																				i18n: {
																					en_us: {
																						label: "Identify Tulane Employees:"
																					}
																				},
																				type: "select"
																			},
																			{
																				designInfo: {
																					bounds: {
																						upperLeft: {
																							x: 253,
																							y: 361
																						},
																						lowerRight: {
																							x: 477,
																							y: 409
																						}
																					},
																					stencilSuperIds: [
																						"base-text",
																						"Component"
																					],
																					stencilId: "cloud-text",
																					customStencilId: "null",
																					conditionBuilderInfo: {
																						visible: {
																							children: [
																								{
																									sourceValue: {
																										name: "asPIAreThereAnyOtherIndividualsNotListedAboveWhoYouConsiderToBeResponsibleForTheDesignConductAndReportingOfTheResearch",
																										variableType: "variable",
																										type: "string",
																										allowedValues: []
																									},
																									operator: "==",
																									targetValue: {
																										value: "Yes",
																										type: "string",
																										variableType: "value"
																									}
																								}
																							],
																							match: "all"
																						},
																						enabled: {
																							children: [
																								{
																									sourceValue: {
																										name: "asPIAreThereAnyOtherIndividualsNotListedAboveWhoYouConsiderToBeResponsibleForTheDesignConductAndReportingOfTheResearch",
																										variableType: "variable",
																										type: "string",
																										allowedValues: []
																									},
																									operator: "==",
																									targetValue: {
																										value: "Yes",
																										type: "string",
																										variableType: "value"
																									}
																								}
																							],
																							match: "all"
																						}
																					}
																				},
																				labelAlign: "top",
																				value: "{{identifyOutsideAffiliates}}",
																				size: 3,
																				ignore: "{{asPIAreThereAnyOtherIndividualsNotListedAboveWhoYouConsiderToBeResponsibleForTheDesignConductAndReportingOfTheResearch=='No'}}",
																				visible: "{{asPIAreThereAnyOtherIndividualsNotListedAboveWhoYouConsiderToBeResponsibleForTheDesignConductAndReportingOfTheResearch == 'Yes'}}",
																				enabled: "{{asPIAreThereAnyOtherIndividualsNotListedAboveWhoYouConsiderToBeResponsibleForTheDesignConductAndReportingOfTheResearch == 'Yes'}}",
																				isRequired: false,
																				extraSettings: {
																					validationPanelDisplay: "show"
																				},
																				label: "Identify Outside Affiliates:",
																				cayuseShortLabel: "other",
																				cayuseShortLabel2: "Outside Affiliates",
																				id: "text41",
																				i18n: {
																					en_us: {
																						label: "Identify Outside Affiliates:"
																					}
																				},
																				type: "text"
																			},
																			{
																				designInfo: {
																					bounds: {
																						upperLeft: {
																							x: 0,
																							y: 0
																						},
																						lowerRight: {
																							x: 0,
																							y: 0
																						}
																					},
																					stencilSuperIds: [],
																					stencilId: null,
																					customStencilId: null
																				},
																				size: 6,
																				type: ""
																			}
																		]
																	}
																]
															}
														},
														id: "tab-panel12",
														i18n: {
															en_us: {
																label: "Key Personnel"
															}
														},
														type: "panel"
													},
												]
											},
											id: "tabs1",
											type: "tabs"
										}
									]
								}
							]
						}
					},
					id: "sub-form1",
					type: "subform"
				}
			]
		}
	],
};
