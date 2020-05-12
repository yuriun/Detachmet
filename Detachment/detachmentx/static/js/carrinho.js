var umaPropaganda = function() {
	var propagandas = [ "O que tu acha de comprar um tablet",
						"Está querendo aquele monitor?????",
						"Tu é mano?",
						"Tá afim de uma camisa g?"
					    ];
	var posicao = Math.floor(propagandas.length * Math.random());
	var texto = propagandas [posicao];
	var tr = $("<tr>").addClass("propaganda").append($("<td>"));
	tr.find("td").attr("colspan", 6).text(texto);
	return tr;
};

var atualizaDados = function() {
	var carrinhos = $(".carrinho");
	carrinhos.each(function() { 
		var carrinho = $(this);
		var itens = carrinho.find(".item-total:visible");
		var total = 0;
		for (var i = 0; i < itens.length; i++) {
			var item = $(itens[i]);
			var valor = parseFloat(item.text());
			total = total + valor;
		};
		carrinho.find(".valor-total").text(total);
		carrinho.find(".quantidade-de-itens").text(itens.length);

		var quantidadeIten = carrinho.find(".quantidade-item-carrinho:visible");
		var quantidadeTotalIten = 0;

		for (var i = 0;  i < quantidadeIten.length; i++) {
			var quantidade = $(quantidadeIten[i]);
			var itens = parseInt(quantidade.text());
			quantidadeTotalIten = quantidadeTotalIten + itens;
		};
		carrinho.find(".itensNoCarrinho").text(quantidadeTotalIten);
	});
};

var removeItem = function(event) {
	event.preventDefault();

	var self = $(this);
	self.closest("tr").hide();
	atualizaDados();
};
	
var undo = function() {
	var carrinho = $(this).closest(".carrinho");
	carrinho.find("tr:visible").removeClass("recuperado");

	var trs = carrinho.find("tr:hidden");
	trs.addClass("recuperado").show();
	atualizaDados();
}

var daDestaque = function() {
	$(this).addClass("hovering");
	$(this).find(".remove-item").fadeIn();
}

var tiraDestaque = function() {
	$(this).removeClass("hovering");
	$(this).find(".remove-item").fadeOut();
}

var alternaPropagandas = function(event) {
	event.preventDefault();
	$(".propaganda").fadeToggle(2000);
	$(".alterna-propaganda").toggle();
}

var aposInicializado = function() {
	atualizaDados();
	$('.undo').click(undo);
	$(".remove-item").click(removeItem);
	$(".carrinho").each(function() {
		$(this).find("tr:nth-child(3n)").each(function() {
		umaPropaganda().insertAfter($(this));
		});
	});
	$("tr").hover(daDestaque, tiraDestaque);
	$(".alterna-propaganda").click(alternaPropagandas);
};

$(aposInicializado);