angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {
	var ddo = {};
	/*
	 * A = Attribute (<div meu-painel>)
	   E = Element (<meu-painel>)
	 */
	ddo.restrict = "AE";
	ddo.scope = {
		/** @ garante que o conteúdo informado para o parâmetro título em <meu-painel titulo="teste"> vai ser passado como String para o atributo titulo do scopo dessa diretiva */
		titulo: '@'
	}
	/** 
	transclude serve para informar ao Angular que queremos manter os elementos filhos que forem colocados dentro de nossa diretiva. Exemplo:
	<meu-painel>
		<p>teste</p>
	</meu-painel>

	Além disso precisamos informar dentro da diretiva qual o elemento em que os elementos filhos de nossa direta vai ficar.
	Nesse caso colocamos ele para a div panel-body
	*/
	ddo.transclude = true;
	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
})
.directive('minhaFoto', function() {
	var ddo = {};
	ddo.restrict = "AE";
	ddo.scope = {
		titulo: '@',
		url: '@'
	};
	ddo.transclude = true;
	ddo.templateUrl = 'js/directives/minha-foto.html';
	return ddo;
})
.directive('meuBotaoPerigo', function() {
	var ddo = {};
	ddo.restrict = "E";
	
	ddo.scope = {
		nome: '@',
		/* & = Utilizado para passar functions para dentro das diretivas, diferente do @ que fazemos uma copia em String do que foi passado no parametro */
		acao: '&'
	}
	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';
	return ddo;
})
.directive('meuFocus', function() {
	var ddo = {};
	ddo.restrict = "A";
	ddo.link = function(scope, element) {
		/** escuta o evento disparado (esse evento será disparado quando uma foto for cadastrada ou alterada),
		e executa a função, dando focus ao elemento em evidência. */
		scope.$on('fotoCadastrada', function() {
			element[0].focus();
		});
	}

	return ddo;
})
.directive('meusTitulos', function() {
	var ddo = {};
	ddo.restrict = 'E';
	ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
	/** A propriedade controller nos da possibilidade para receber elementos injetaveis de nossos controllers */
	ddo.controller = ['$scope', 'recursoFoto', function($scope, recursoFoto) {
		recursoFoto.query(function(fotos) {
			$scope.titulos = fotos.map(function(foto) {
				return foto.titulo;
			});
		}, function(error) {
			$scope.mensagem = 'Não foi possível buscar os titulos das fotos';
			console.log(error);
		});
	}];
	return ddo;
});