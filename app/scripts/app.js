'use strict';
var RpgApp = angular.module('rpg', ['minhasDiretivas','ngAnimate','ngRoute','ngUnderscore'])
.config(function($routeProvider){

	$routeProvider
	.when('/principal', {
		templateUrl:'views/principal.html',
		controller:'MainController'
	})
	.when('/novaClasse', {
		templateUrl:'views/novaClasse.html'
	})
	.otherwise({ redirectTo: '/principal'})
})
