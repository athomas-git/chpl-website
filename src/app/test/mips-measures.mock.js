const measures = [{
    domain: { name: 'EC' },
    abbreviation: 'RT1',
    requiredTest: 'Required Test 1: Something yet',
    name: 'Doing a thing with stuff',
    requiresCriteriaSelection: false,
    allowedCriteria: [],
    removed: false,
},{
    domain: { name: 'EC' },
    abbreviation: 'RT10',
    requiredTest: 'Required Test 10: Something else',
    name: 'Doing another thing with stuff',
    requiresCriteriaSelection: false,
    allowedCriteria: [],
    removed: false,
},{
    domain: { name: 'EH' },
    abbreviation: 'RT3',
    requiredTest: 'Required Test 3: Anything',
    name: 'Doing a thing with stuff again',
    requiresCriteriaSelection: false,
    allowedCriteria: [],
    removed: false,
}];

const measurementTypes = [{
    name: 'G1',
},{
    name: 'G2',
}];

const listingMeasures = [{
    associatedCriteria: [],
    measure: angular.copy(measures[0]),
    measurementType: angular.copy(measurementTypes[0]),
},{
    associatedCriteria: [],
    measure: angular.copy(measures[1]),
    measurementType: angular.copy(measurementTypes[1]),
},{
    associatedCriteria: [{number: 'a5'}, {number: 'b5'}],
    measure: angular.copy(measures[2]),
    measurementType: angular.copy(measurementTypes[0]),
}];

export {measures, measurementTypes, listingMeasures };
