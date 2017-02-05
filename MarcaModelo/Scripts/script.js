var categorias = [
            { "Id": "1", "Categoria": "Audi" },
            { "Id": "2", "Categoria": "BMW" }]

var subCategorias = [
    { Id: 1, IdCategoria: 1, Nome: "A1" },
    { Id: 2, IdCategoria: 1, Nome: "A3" },
    { Id: 3, IdCategoria: 2, Nome: "X1" },
    { Id: 4, IdCategoria: 2, Nome: "Spider" }]

$(document).ready(function () {

    $.each(categorias, function (i, categoria) {

        $("#combo1").append($('<option>', {

            value: categoria.Id,

            text: categoria.Categoria
        }))
    })

    $("#combo1").change(function () {

        var categoria = $(this).val()
        carregaCombo2(categoria);
    })


    $("#combo1").val(2)

    carregaCombo2(2)

    $("#combo2").val(3)
})

function carregaCombo2(categoria) {

    var subCategoriasFiltradas = $.grep(subCategorias, function (e) { return e.IdCategoria == categoria; });

    $("#combo2").html('<option>Selecione</option>');
    $.each(subCategoriasFiltradas, function (i, subcategoria) {
        $("#combo2").append($('<option>', {
            value: subcategoria.Id,
            text: subcategoria.Nome
        }))
    })
}
