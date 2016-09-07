angular.module('alurapic')
	.config(function($routeProvider, $locationProvider) {

		/**PARA UTILIZAMOS ESSE RECURSO (REMOVER A TRALHA DA URL) PRECISAMOS FICAR ATENTO POIS O SERVIDOR TEM QUE ESTAR PREARADO PARA ENTENDER ISSO TAMBEM
		   POIS SEM ESSA CONFIGURAÇÃO, QUANDO INFORMAMOS localhost:3000/fotos, A APLICAÇÃO VAI ENTENDER QUE ESSE ENDEREÇO É PRA BATER NO SERVIDOR E NÃO
		   EM UMA ROTA DO ANGULAR.
		*/
		$locationProvider.html5Mode(true);

		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/cadastro-foto.html',
			controller: 'CadastroFotoController'
		});	

		$routeProvider.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/cadastro-foto.html',
			controller: 'CadastroFotoController'
		});

		/** CASO ALGUMA ROTA NÃO EXISTA, ELE VEM PARAR AQUI */
		$routeProvider.otherwise({ redirectTo: '/fotos' });
	});