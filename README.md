# LockWise - Gerenciador de Senhas

## Descrição
LockWise é um aplicativo móvel desenvolvido com React Native e Expo, projetado para ajudar os usuários a gerar senhas fortes e seguras, além de armazená-las de forma organizada. Com uma interface intuitiva, o aplicativo oferece uma solução prática para gerenciar suas credenciais digitais com facilidade.

## Recursos
*   **Geração de Senhas Fortes:** Crie senhas aleatórias e personalizáveis com diferentes níveis de complexidade (letras maiúsculas, minúsculas, números, caracteres especiais).
*   **Armazenamento Seguro:** Salve suas senhas geradas ou existentes de forma segura no dispositivo.
*   **Visualização de Senhas:** Acesse e visualize suas senhas salvas a qualquer momento.
*   **Cópia Rápida:** Copie senhas para a área de transferência com um único toque.
*   **Navegação Intuitiva:** Interface de usuário limpa e fácil de usar com navegação por abas.

## Tecnologias Utilizadas
*   **React Native:** Framework para construção de aplicativos móveis nativos usando JavaScript e React.
*   **Expo:** Plataforma para desenvolvimento universal de aplicativos React Native, facilitando a configuração e o build.
*   **React Navigation:** Solução de navegação para aplicativos React Native.
*   **Async Storage:** Armazenamento persistente de dados chave-valor para React Native.
*   **Expo Clipboard:** API para interagir com a área de transferência do dispositivo.
*   **Ionicons:** Conjunto de ícones para uso no aplicativo.

## Instalação

## APK Disponível
Para testar o aplicativo rapidamente, você pode baixar o arquivo APK já compilado diretamente da pasta raiz deste projeto e instalá-lo em seu dispositivo Android.

<img src="./video-lock-wise.gif" width="300" alt="Demonstração do Aplicativo">

[Assista a uma demonstração completa do aplicativo aqui (Google Drive)](https://drive.google.com/file/d/1Ysn7sMm3cfsYHmS2CTi6agIQTjf2yxIx/view?usp=sharing)

ou 

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local:

### Pré-requisitos
Certifique-se de ter o Node.js e o npm (ou Yarn) instalados. Recomenda-se também ter o Expo CLI instalado globalmente:

```bash
npm install -g expo-cli
# ou
yarn global add expo-cli
```

### Passos
1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/LockWise.git
    cd LockWise
    ```
    *(Nota: Substitua `https://github.com/seu-usuario/LockWise.git` pelo URL real do seu repositório)*

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie o aplicativo:**
    ```bash
    expo start
    ```
    Isso abrirá o Expo Developer Tools no seu navegador. Você pode então:
    *   Escanear o código QR com o aplicativo Expo Go (disponível na App Store e Google Play) no seu celular para ver o aplicativo.
    *   Executar em um emulador Android ou iOS.
    *   Executar no navegador (para desenvolvimento web).



## Uso
Após iniciar o aplicativo, você poderá navegar entre as telas "Home" (para gerar senhas) e "Senhas" (para visualizar suas senhas salvas). Utilize a funcionalidade de geração para criar senhas fortes e o botão de salvar para armazená-las.

## Estrutura do Projeto
```
.
├── App.js                # Componente principal do aplicativo
├── app.json              # Configurações do Expo
├── eas.json              # Configurações do Expo Application Services
├── package.json          # Dependências e scripts do projeto
└── src/
    ├── routes.js         # Definição das rotas de navegação
    ├── assets/           # Imagens e outros recursos estáticos
    ├── components/       # Componentes reutilizáveis da UI
    ├── hooks/            # Hooks personalizados
    └── pages/            # Telas principais do aplicativo
        ├── home/
        ├── passwords/
        └── savePassword/
```

## Contribuição
Contribuições são bem-vindas! Se você tiver sugestões de melhorias, encontrou um bug ou gostaria de adicionar um novo recurso, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
