Bahmni.ConceptSet.FormConditions.rulesOverride  = {
'Baseline, Has the patient ever been treated for TB in the past?': function (formName, formFieldValues) {
        var conditions = {
            enable: [],
            disable: []
        };
        var conditionConcept = formFieldValues['Baseline, Has the patient ever been treated for TB in the past?'];
        if (conditionConcept == "True") {
            conditions.enable.push("Baseline, If Yes, What was the year of the patients start of first TB treatment Details", "Baseline, Treatment for drug-susceptible TB", "Baseline, Treatment for drug-resistant TB")
        } else  {
            conditions.disable.push("Baseline, If Yes, What was the year of the patients start of first TB treatment Details", "Baseline, Treatment for drug-susceptible TB", "Baseline, Treatment for drug-resistant TB")
        }
        return conditions;
    }
}
