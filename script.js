$(document).ready(() => {
  $("header button").click(() => {
    $("form").slideDown();
  });

  $(".cancelar").click(() => {
    $("form").slideUp();
  });

  $("form").on("submit", (e) => {
    e.preventDefault();
    const enderecoImagemNova = $("#endereco-imagem-nova").val();
    const novoItem = $("<li style='display: none'></li>");
    $(`<img src="${enderecoImagemNova}"></img>`).appendTo(novoItem);
    $(`
      <div class="overlay-links">
        <a href="${enderecoImagemNova}" target="_blank" title="Ver imagem em tamanho real">
          Ver imagem em Tamanho real
        </a>
      </div>`).appendTo(novoItem);

    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(1000);
    $("#endereco-imagem-nova").val("");
  });
});
