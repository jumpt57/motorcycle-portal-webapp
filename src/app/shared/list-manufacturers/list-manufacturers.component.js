function ListManufacturersController($scope, $element, $attrs) {
    var ctrl = this;
}
listManufacturersModule.component('listManufacturers', {
    templateUrl: './src/app/shared/list-manufacturers/list-manufacturers.template.html',
    controller: ListManufacturersController,
    bindings: {
        manufacturers: '<'
    }
});