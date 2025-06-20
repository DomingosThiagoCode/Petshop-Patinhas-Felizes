document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede envio padrão

        // Captura os dados do formulário
        const nome = document.getElementById('campo_nome').value.trim();
        const email = document.getElementById('campo_email').value.trim();
        const telefone = document.getElementById('campo_telefone').value.trim();

        // Cria objeto do novo usuário
        const novoUsuario = { nome, email, telefone };

        // Recupera os usuários salvos ou cria lista vazia
        let usuarios = JSON.parse(localStorage.getItem('cadastrosUsuarios')) || [];

        // Verifica se já existe usuário com o mesmo email ou telefone
        const duplicado = usuarios.some(usuario =>
            usuario.email === novoUsuario.email || usuario.telefone === novoUsuario.telefone
        );

        if (duplicado) {
            alert('Já existe um cadastro com este email ou telefone!');
        } else {
            // Adiciona novo usuário à lista e salva
            usuarios.push(novoUsuario);
            localStorage.setItem('cadastrosUsuarios', JSON.stringify(usuarios));
            alert('Cadastro realizado com sucesso!');
            formulario.reset();
        }
    });
});