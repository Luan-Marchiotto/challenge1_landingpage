# FURIA Chat Fanpage

Um site temático interativo dedicado à FURIA, time de CS:GO.  
Os fãs podem conversar com um bot divertido, conferir novidades e se inscrever para receber atualizações por e-mail.

---

## 🚀 Tecnologias Utilizadas

- **HTML5** – Estrutura da página
- **CSS3** – Estilização responsiva e visual atraente
- **JavaScript** – Interatividade e lógica do chatbot
- **[EmailJS](https://www.emailjs.com/)** – Envio de e-mails direto do front-end

---

## 📁 Estrutura do Projeto

```
challenge1_landingpage/
├── img/               # Imagens utilizadas no projeto
├── index.html         # Página principal do site
├── obs.txt            # Template html para envio de Emails com EmailJS
├── style.css          # Estilos personalizados
└── script.js          # Scripts de interação e lógica do chatbot
```

---

## 🛠️ Como Rodar o Projeto Localmente

### 1. Clone este repositório

```bash
git clone https://github.com/Luan-Marchiotto/challenge1_landingpage.git
```

### 2. Acesse o diretório do projeto

```bash
cd challenge1_landingpage
```

### 3. Abra o projeto no navegador

#### 💡 Opção 1: Abrir diretamente

No **Windows**:

```bash
start index.html
```

No **Linux**:

```bash
xdg-open index.html
```

No **macOS**:

```bash
open index.html
```

#### 💡 Opção 2: Usar Live Server (Recomendado)

Se estiver usando o **VS Code**:

1. Instale a extensão **Live Server**
2. Clique com o botão direito em `index.html`
3. Selecione **"Open with Live Server"**

O projeto será executado no seu navegador padrão com recarregamento automático.

---

## 💬 Como Usar o Chat

Digite mensagens com palavras-chave como:

- `elenco`
- `novidade`
- `loja`
- `torcedor`

📢 O bot irá responder automaticamente com mensagens pré-definidas relacionadas a essas palavras.

---

## 📧 Envio de E-mails

Usuários podem inserir seu nome e e-mail no formulário disponível para receber novidades diretamente no e-mail.  
A integração é feita via **EmailJS**, que permite o envio sem precisar de back-end.

> Obs: Para funcionar corretamente, configure seu serviço no [EmailJS](https://dashboard.emailjs.com/) e substitua os IDs no `script.js`.

## ✅ Como funcionar com EmailJS?

Você pode instruí-las a:

1. Criar uma conta no EmailJS.

2. Criar um serviço de e-mail (como Gmail, Outlook, etc).

3. Criar um template de e-mail (modelo).

4. Copiar seus próprios:

5. `user ID` - Encontre este ID no painel da sua conta do EmailJS, na seção de configurações

6. `service ID` - Relacionado ao serviço de e-mail configurado (como Gmail ou Outlook).

7. `template ID` - Este é o ID do template que você criou no EmailJS.

8. O arquivo `obs.txt` contém um template HTML que pode ser usado diretamente no EmailJS.
Para usá-lo, copie o conteúdo de `obs.txt` e cole-o no campo de template HTML do EmailJS.

9. Inserir esses dados no lugar dos seus no `script.js`.
```bash
emailjs.init('SEU_USER_ID');
emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', this);
```
---
## 🌱 Melhorias Futuras (Em Planejamento)

- 💾 Armazenar mensagens usando **localStorage** ou integração com banco de dados
- 🔐 Autenticação e criação de perfis para torcedores
- 💬 Chat em tempo real usando **WebSockets**
- 🛠️ Painel administrativo para gerenciar conteúdo, mensagens e usuários

---

## 📣 Créditos

Desenvolvido por fã da FURIA, para a comunidade apaixonada por CS:GO.
