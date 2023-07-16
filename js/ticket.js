const categoria = document.getElementById('categoria');
const quantity = document.getElementById('cantidad');

btn_resumen = document.getElementById('boton-resumen');
btn_resumen.addEventListener('click',informar_costo);

const valor_ticket = 200;

function informar_costo(evento){
    evento.preventDefault();
    let totalCost = document.getElementById('totalPagar');
    totalCost.innerText = 'Total a Pagar: $';
    total = 0;
    costo_categoria = categoria.value;
    text = categoria.options[categoria.selectedIndex].text;
    total = (valor_ticket - (valor_ticket * costo_categoria / 100)) * Number(quantity.value);
    totalCost.innerText += `${total}`;
}

btn_borrar = document.getElementById('boton-borrar');
btn_borrar.addEventListener('click',borrar_costo);

function borrar_costo(evento){
    let totalCost = document.getElementById('totalPagar');
    totalCost.innerText = 'Total a Pagar: $';
}
