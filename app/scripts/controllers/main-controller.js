'use strict';
RpgApp.controller('MainController',['$scope','$http','underscore',function($scope, $http, _){

	var tratarRetorno = function(response){
		$scope.niveis = _.pluck(response.data.rows, 'doc');
	}

	var requisicaoCouch = function(){
		return $http.get('/rpg/_design/document/_view/all?reduce=false&include_docs=true');
	}

	// var tratarRetornoDois = function(response){
	// 	console.log(response);
	// }

	// var criarDocumentoNoCouch = function(){
	// 	return $http.put('/rpg/35idContent-Type:application/json');
	// }

	requisicaoCouch().then(tratarRetorno);
	// criarDocumentoNoCouch().then(tratarRetornoDois);
}]);