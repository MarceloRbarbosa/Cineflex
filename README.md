# 🎬 CineFlex

**CineFlex** é um sistema mobile de compra de ingressos de cinema. Desenvolvi esse projeto como parte de um curso prático em React, focado no consumo de API, roteamento e estilização com styled-components — tudo com uma interface voltada para dispositivos móveis!

📱 Acesse aqui: [ Deploy do Cineflex no Vercel](https://cineflex-tau-one.vercel.app/)

---

## 💡 Sobre o projeto

A proposta do CineFlex é simular um sistema real de reservas de cinema, onde o usuário pode:

- Ver os filmes em cartaz;
- Escolher a sessão desejada;
- Selecionar os assentos disponíveis;
- Inserir nome e CPF para finalizar a reserva;
- Confirmar o pedido e receber os detalhes da compra.

A aplicação foi construída com React e consome uma API externa, sem utilizar `localStorage` ou `context`, com foco total em mobile.

---

## 🔧 Tecnologias usadas

- React + Vite
- Styled-components
- React Router DOM
- Axios

---

## 🖼️ Telas da aplicação

🎞️ Filmes | 🕑 Sessões | 💺 Assentos | ✅ Sucesso

<img src="https://github.com/user-attachments/assets/f57844da-ff2c-43fe-ae52-85e897c8ee72" width="22%" />
<img src="https://github.com/user-attachments/assets/97db5565-7b57-4ed3-881e-dc426ae09c84" width="22%" />
<img src="https://github.com/user-attachments/assets/93ee7586-7c17-4456-8297-64aa89a66b17" width="22%" />
<img src="https://github.com/user-attachments/assets/7b87a709-7946-4d17-9cc2-411d79920b98" width="22%" />

---

## 🚀 Funcionalidades principais

- **/ (Filmes):** lista de filmes em cartaz
- **/sessoes/:idFilme:** sessões disponíveis por filme
- **/assentos/:idSessao:** seleção de assentos, formulário com nome e CPF
- **/sucesso:** resumo do pedido e botão para reinício

---

## 🛠 Como rodar

Se quiser testar localmente:

```bash
git clone https://github.com/seu-usuario/cineflex.git
cd cineflex
npm install
npm run dev

