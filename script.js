// replacing whitespace with corresponding html entity
var escolhaPlanoSelect = document.getElementById('escolha-plano-select');
for(var i = 0; i < escolhaPlanoSelect.children.length; i++) {
	escolhaPlanoSelect.children[i].innerHTML = escolhaPlanoSelect.children[i].innerHTML.replace(/ /g, '&nbsp;');
}

document.getElementById('pedido-checkbox-custom').onclick = function() {
	var el = document.getElementById('pedido-checkbox-acordo');
	el.checked = !el.checked;
};