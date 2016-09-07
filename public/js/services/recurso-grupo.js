angular.module('alurapic')
	.factory('recursoGrupo', function($resource) {
		return $resource('v1/grupos');
	});