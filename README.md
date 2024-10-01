
# Todo List iTalents

Uma aplicação de lista de tarefas simples desenvolvida em React, que permite aos usuários adicionar, visualizar e remover tarefas de forma intuitiva.

## Índice

- [Características](#características)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Características

- Adicionar tarefas à lista.
- Remover tarefas da lista.
- Interface de usuário intuitiva e responsiva.
- Implementação de componentes funcionais e gerenciamento de estado com hooks do React.

## Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construir interfaces de usuário.
- [JavaScript](https://www.javascript.com/) - Linguagem de programação usada para lógica do lado do cliente.
- [CSS](https://www.w3schools.com/css/) - Estilização da aplicação.
- [Git](https://git-scm.com/) - Controle de versão.

## Como Executar o Projeto

Para executar este projeto em sua máquina local, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/LucianoGIS/Todo_list_iTalents.git
   cd Todo_list_iTalents
   ```

2. **Instale as dependências**:

   Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Em seguida, instale as dependências do projeto:

   ```bash
   npm install
   ```

3. **Inicie a aplicação**:

   Após a instalação das dependências, inicie a aplicação:

   ```bash
   npm start
   ```

   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

```plaintext
Todo_list_iTalents/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Todo_form.js
│   │   └── Todo_list.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

- **public/**: Contém o arquivo HTML principal e ícones.
- **src/**: Contém os componentes da aplicação, arquivos de estilo e a lógica principal.
  - **components/**: Subdiretório para componentes React.
  - **App.js**: Componente principal da aplicação.
  - **App.css**: Estilos para a aplicação.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga os passos abaixo:

1. Fork este repositório.
2. Crie uma nova branch (`git checkout -b feature/nome-da-sua-feature`).
3. Faça suas alterações e commit (`git commit -m 'Adicionando uma nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nome-da-sua-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
