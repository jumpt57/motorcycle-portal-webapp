function RecordCardManufacturerController($scope, $element, $attrs) {
    var ctrl = this;
}
recordCardManufacturerModule.component('recordCardManufacturer', {
    templateUrl: './src/app/shared/record-card-manufacturer/record-card-manufacturer.template.html',
    controller: RecordCardManufacturerController,
    bindings: {
        manufacturer: '<'
    }
});