export const G1G2EditComponent = {
    templateUrl: 'chpl.components/listing/details/g1g2/edit.html',
    bindings: {
        measures: '<',
        resources: '<',
        onChange: '&',
    },
    controller: class G1G2EditComponent {
        constructor ($log, ManageList) {
            'ngInject';
            this.$log = $log;
            this.ManageList = ManageList;
            this.addingItem = {
                mipsMeasures: false,
            };
            this.newItem = {
                mipsMeasures: {},
            };
            this.allowedMeasures = [];
        }

        $onChanges (changes) {
            if (changes.measures && changes.measures.currentValue) {
                this.measures = changes.measures.currentValue
                    .map(m => m)
                    .sort((a, b) => this.measureSort(a, b));
            }
            if (changes.resources && changes.resources.currentValue) {
                this.$log.info(changes.resources.currentValue.mipsTypes);
                this.allMeasures = changes.resources.currentValue.mipsMeasures.data
                    .map(m => m)
                    .sort((a, b) => this.measureSort(a, b));
                this.allTests = [... new Set(
                    changes.resources.currentValue.mipsMeasures.data
                        .map(m => m.abbreviation)
                        .sort((a, b) => this.testSort(a, b))
                )];
                this.allTypes = changes.resources.currentValue.mipsMeasureTypes.data
                    .map(t => t)
                    .sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
            }
        }

        cancelNewItem (type) {
            this.ManageList.cancel(type);
            this.allowedMeasures = [];
        }

        clearCriteria () {
            this.ManageList.newItem['mipsMeasures'].criteria = {};
        }

        measureSort (a, b) {
            if (!a.measurementType) {
                a = {measurementType: 0, measure: a};
            }
            if (!b.measurementType) {
                b = {measurementType: 0, measure: b};
            }
            let getNum = test => parseInt(test.substring(2), 10);
            return a.measurementType.name < b.measurementType.name ? -1 : a.measurementType.name > b.measurementType.name ? 1 :
                getNum(a.measure.abbreviation) < getNum(b.measure.abbreviation) ? -1 : getNum(a.measure.abbreviation) > getNum(b.measure.abbreviation) ? 1 :
                a.measure.domain.name < b.measure.domain.name ? -1 : a.measure.domain.name > b.measure.domain.name ? 1 :
                a.measure.name < b.measure.name ? -1 : a.measure.name > b.measure.name ? 1 :
                0;
        }

        removeItem (item) {
            this.measures = this.measures
                .filter(m => !(m.measurementType.name === item.measurementType.name
                               && m.measure.domain.name === item.measure.domain.name
                               && m.measure.abbreviation === item.measure.abbreviation));
            this.update();
        }

        saveNewItem () {
            let type = 'mipsMeasures';
            let create = object => ({
                measure: object.measure,
                measurementType: object.type,
                associatedCriteria: object.criteria,
            });
            this.ManageList.newItem[type].type = this.allTypes.filter(t => t.name === this.ManageList.newItem[type].typeName)[0];
            this.measures.push(this.ManageList.add(type, create));
            this.update();
        }

        testSort (first, second) {
            let a = parseInt(first.substring(2), 10);
            let b = parseInt(second.substring(2), 10);
            return a - b;
        }

        update () {
            this.onChange({measures: this.measures});
        }

        updateAllowedMeasures () {
            this.allowedMeasures = this.allMeasures.filter(m => m.abbreviation === this.ManageList.newItem['mipsMeasures'].selectedAbbreviation);
            this.clearCriteria();
        }
    },
};

angular
    .module('chpl.components')
    .component('chplG1g2Edit', G1G2EditComponent);
