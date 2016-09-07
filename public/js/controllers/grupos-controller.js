angular.module('alurapic').controller('GruposController', ['$scope', 'recursoGrupo', function($scope, recursoGrupo) {

	$scope.grupos = [];
	$scope.mensagem = '';

	recursoGrupo.query(function(grupos) {
		$scope.grupos = grupos;
	}, function(error) {
		$scope.mensagem = error;
	});


}]);