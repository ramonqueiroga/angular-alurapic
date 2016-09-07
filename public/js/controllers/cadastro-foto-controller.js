angular.module('alurapic').controller('CadastroFotoController',
	['$scope', 'recursoFoto', 'cadastroDeFotos', '$routeParams', function($scope, recursoFoto, cadastroDeFotos, $routeParams) {

	$scope.foto = {};
	$scope.mensagem = '';

	if($routeParams.fotoId) {
		recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
			$scope.foto = foto;
		}, function(error) {
			console.log(error);
			$scope.mensagem = 'Não foi possível recuperar a foto com id: ' + $routeParams.fotoId;
		});
	}

	$scope.enviar = function() {
		if($scope.formulario.$valid) {
			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(dados) {
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao) $scope.foto = {};
			}).catch(function(error){
				$scope.mensagem = error.mensagem;
			});
		}
	};

}]);