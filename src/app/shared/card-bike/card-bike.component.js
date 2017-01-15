function CardBikeController($scope, $element, $attrs) {
    var ctrl = this;
}
cardbikeModule.component('cardBike', {
    templateUrl: './src/app/shared/card-bike/card-bike.template.html',
    controller: CardBikeController,
    bindings: {
        bike: '<'
    }
});