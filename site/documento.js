$(document).ready(function() { 
    $(document).ready(function() {
    $('.nav-link').on('click', function() {
        $('.tab-pane').removeClass('show active');
        const target = $(this).attr('href');
        $(target).addClass('show active');
    });
});
    // Exibe o modal de login ao carregar a página
    $('#loginModal').modal('show');

    $('#entrarButton').click(function() {
        var nome = $('#nome').val().trim();
        var senha = $('#senha').val().trim();

        // Validação do login
        if (nome === "" || senha === "" || senha !== "123") {
            $('#errorAlert').removeClass('d-none'); // Exibe a mensagem de erro
        } else {
            $('#errorAlert').addClass('d-none'); // Oculta a mensagem de erro
            $('#loginModal').modal('hide'); // Fecha o modal
            $('#content').show(); // Exibe o conteúdo dos sites
        }
    });
});