# Password Manager(gerenciador de senhas)

## Descrição do projeto:
Este Projeto foi construido em TypeScript utilizando React como gerenciador de estados constitui uma parte de uma aplicação web que serve como um "Gerenciador de Senhas". Ele oferece as seguintes funcionalidades:

### Formulário de Cadastro de Senha:

- O código renderiza um formulário de cadastro de senha que permite aos usuários inserir informações sobre um serviço específico, como nome do serviço, login, URL e senha.
- Os campos do formulário incluem validações em tempo real para garantir que os dados inseridos atendam a critérios de segurança, como comprimento mínimo e presença de letras, números e caracteres especiais na senha.
- Os usuários têm a opção de ocultar ou exibir a senha enquanto a inserem, clicando em um botão de alternância.
- Uma vez preenchido, os usuários podem clicar no botão "Cadastrar" para adicionar o serviço e seus detalhes à lista de senhas gerenciadas.

### Listagem de Senhas Gerenciadas:

- Quando não está no modo de cadastro, o código exibe uma lista de todas as senhas previamente cadastradas. Cada senha é apresentada em um "Card" contendo informações sobre o serviço, login e uma representação mascarada (ou não) da senha.
- Para cada serviço, há também um botão "Excluir" que permite aos usuários remover a senha da lista.

### Validação de Senha em Tempo Real:

- Durante a entrada de dados no formulário, a validação de senha é realizada em tempo real e exibida abaixo do campo de senha. Isso ajuda os usuários a entenderem se a senha que estão criando atende aos requisitos de segurança.

### Feedback Visual:

- O código fornece feedback visual aos usuários, destacando os campos de senha que atendem aos critérios de segurança.

### Interação com o Armazenamento Local (LocalStorage):

- Os dados das senhas cadastradas são armazenados localmente no navegador do usuário. Isso significa que as senhas persistem mesmo após a atualização da página ou o fechamento do navegador.

### Recursos de Exibição/Ocultação de Senhas:

- Os usuários têm a opção de exibir ou ocultar as senhas na lista de senhas gerenciadas, proporcionando uma camada adicional de segurança.
- No geral, este código cria uma interface amigável para que os usuários possam gerenciar suas senhas de forma organizada, com validações de segurança em tempo real e a capacidade de armazenamento persistente no navegador.

## Habilidades Desenvolvidas:

- Gerenciamento de estado entre componentes e paginas através do React

## Comentários:

Nesse projeto me dediquei um pouco mais a parte visual confira o [deploy](https://fastidious-selkie-f2ea62.netlify.app/)
