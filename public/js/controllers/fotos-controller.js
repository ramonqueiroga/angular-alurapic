angular.module('alurapic').controller('FotosController', function($scope, $http) {

	$scope.fotos = [];

	/** UTILIZADO DIRETAMENTE NA DIRETIVA NG-REPEAT. VALORES ATUALIZADOS PELA DIRETAIVA NG-MODEL */
	$scope.filtro = '';
	$scope.mensagem = '';

	$http.get('v1/fotos').success(function(fotos) {
		$scope.fotos = fotos
	}).error(function(error) {
		console.log(error)
	});

	$scope.remover = function(foto) {
		$http.delete('v1/fotos/' + foto._id)
		.success(function() {
			console.log('Foto ' + foto.titulo + ' foi removida com sucesso!');
			var indiceFotos = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFotos, 1);
			$scope.mensagem = 'Foto removida com sucesso';
		}).error(function(error) {
			console.log(error);
			console.log('Não foi possivel remover a foto ' + foto.titulo);
			$scope.mensagem = 'Foto não pode ser removida';
		});
	};

});