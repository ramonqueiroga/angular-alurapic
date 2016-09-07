angular.module('alurapic').controller('CadastroFotoController', function($scope, recursoFoto, $routeParams) {

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
			if($scope.foto._id) {
				recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function() {
					$scope.mensagem = 'Foto atualizada com sucesso!';
				}, function(error){
					console.log(error);
					$scope.mensagem = 'Não foi possível atulizar a foto!';
				});
			} else {
				recursoFoto.save($scope.foto, function() {
					$scope.foto = {};
					$scope.mensagem = 'Foto cadastrada com sucesso!';
				}, function(error) {
					console.log(error);
					$scope.mensagem = 'Erro ao cadastrar a foto: ' + error;
				});							
			}

		}
	};

});