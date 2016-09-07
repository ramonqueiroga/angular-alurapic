angular.module('alurapic')
	.factory('recursoGrupo', ['$resource', function($resource) {
		return $resource('v1/grupos');
	}]);