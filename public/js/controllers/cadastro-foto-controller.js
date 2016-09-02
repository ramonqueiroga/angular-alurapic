angular.module('alurapic').controller('CadastroFotoController', function($scope, $http, $routeParams) {

	$scope.foto = {};
	$scope.mensagem = '';

	if($routeParams.fotoId) {
		$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto
		}).error(function(error) {
			console.log(error);
			$scope.mensagem = 'Não foi possível recuperar a foto com id: ' + $routeParams.fotoId;
		});
	}

	$scope.enviar = function() {
		if($scope.formulario.$valid) {
			if($scope.foto._id) {
				$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
				.success(function() {
					console.log('Mensagem cadastrada com sucesso!')
					$scope.mensagem = 'Mensagem cadastrada com sucesso!';
				}).error(function(error) {
					console.log('Não foi possível atulizar a foto!')
					$scope.mensagem = 'Não foi possível atulizar a foto!';
				});

			} else {
				$http.post('v1/fotos', $scope.foto)
				.success(function() {
					$scope.foto = {};
					$scope.mensagem = 'Foto cadastrada com sucesso!';
				}).error(function(erro) {
					$scope.mensagem = 'Erro ao cadastrar a foto: ' + erro;
				});							
			}

		}
	};

});