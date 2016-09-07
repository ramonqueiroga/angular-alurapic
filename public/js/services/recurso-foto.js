angular.module('alurapic')
	.factory('recursoFoto', ['$resource', function($resource) {
		return $resource('v1/fotos/:fotoId', null, {
			'update' : {
				method: 'PUT'	
			}
		});
	}]);