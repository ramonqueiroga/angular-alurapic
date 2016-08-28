angular.module('minhasDiretivas', []).directive('meuPainel', function() {
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
}).directive('minhaFoto', function() {
	var ddo = {};
	ddo.restrict = "AE";
	ddo.scope = {
		titulo: '@',
		url: '@'
	};
	ddo.transclude = true;
	ddo.templateUrl = 'js/directives/minha-foto.html';
	return ddo;
});