angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

	$scope.fotos = [];
	/** UTILIZADO DIRETAMENTE NA DIRETIVA NG-REPEAT. VALORES ATUALIZADOS PELA DIRETAIVA NG-MODEL */
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoFoto.query(function(fotos) {
		$scope.fotos = fotos;
	}, function(error) {
		console.log(error);
	});

	$scope.remover = function(foto) {

		recursoFoto.delete({fotoId: foto._id}, function() {
			var indiceFotos = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFotos, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
		}, function(error) {
			console.log(error);
			console.log('Não foi possivel remover a foto ' + foto.titulo);
			$scope.mensagem = 'Foto ' + foto.titulo + ' não foi removida';
		});

	};

});