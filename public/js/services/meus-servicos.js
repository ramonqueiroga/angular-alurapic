angular.module('meusServicos', ['ngResource'])
	.factory('recursoFoto', ['$resource', function($resource) {
		return $resource('v1/fotos/:fotoId', null, {
			'update': {
				method: 'PUT'
			}
		});
	}])

	.factory('recursoGrupo', ['$resource', function($resource) {
		return $resource('v1/grupos');
	}])
	
	.factory('cadastroDeFotos', ['recursoFoto', '$q', '$rootScope', function(recursoFoto, $q, $rootScope) {
		var service = {};
		var evento = 'fotoCadastrada';

		service.cadastrar = function(foto) {
			return $q(function(resolve, reject){
				if(foto._id) {
					recursoFoto.update({fotoId: foto._id}, foto, function() {
						//$scope.$broadcast('fotoCadastrada');
						/* Existe uma diretiva (meuFocus) que escuta esse evento, ou seja, 
						quando ele for disparado ela irá executar uma função dentro de minha diretiva meuFocus 
						$rootScope = pais de todos os $scope da aplicação. Para conseguir dispar eventos fora de um controller mas utilizando nosso scope de aplicação, 
						devemos fazer uso desse cara, pois $scope só conseguimos acessar de nossos controllers.						
						*/
						$rootScope.$broadcast(evento);
						resolve({
							mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso!',
							inclusao: false
						});
					}, function(error) {
						reject({
							mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
						})
					});
				} else {
					recursoFoto.save(foto, function() {
						$rootScope.$broadcast(evento);
						resolve({
							mensagem: 'Foto ' + foto.titulo + ' cadastrada com sucesso!',
							inclusao: true
						})
					}, function(error) {
						reject({
							mensagem: 'Não foi possível cadastrar a foto ' + foto.titulo
						})
					});
				}
			});
		};

		return service;
	}]);
	