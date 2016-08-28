angular.module('alurapic').controller('FotosController', function($scope, $http) {

	$scope.fotos = [];

	/** UTILIZADO DIRETAMENTE NA DIRETIVA NG-REPEAT. VALORES ATUALIZADOS PELA DIRETAIVA NG-MODEL */
	$scope.filtro = '';

	$http.get('v1/fotos').success(function(fotos) {
		$scope.fotos = fotos
	}).error(function(error) {
		console.log(error)
	});

});