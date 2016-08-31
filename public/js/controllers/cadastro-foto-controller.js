angular.module('alurapic').controller('CadastroFotoController', function($scope, $http) {

	$scope.foto = {};
	$scope.mensagem = '';

	$scope.enviar = function() {
		if($scope.formulario.$valid) {
			$http.post('v1/fotos', $scope.foto)
			.success(function() {
				$scope.foto = {};
				$scope.mensagem = 'Foto cadastrada com sucesso!';
			}).error(function(erro) {
				$scope.mensagem = 'Erro ao cadastrar a foto: ' + erro;
			});			
		}
	}

});