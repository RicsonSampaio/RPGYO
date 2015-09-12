'use strict';
angular.module('minhasDiretivas',[])
.directive('meuPainel', function() {
	return {
		restrict: 'E',
		scope: {
			titulo: '@titulo'
		},
		transclude: true,
		templateUrl: 'views/painel.html'
	};
});