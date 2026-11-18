# 🏎️ PyKart Arena

**PyKart Arena** é um jogo web humorístico e educativo de corrida em tabuleiro que mistura **perguntas de programação em Python**, **minijogos clássicos**, **roleta de recompensas** e **batalha de itens** entre pilotos animais. O projeto roda com um servidor **Node.js puro** e interface web nativa, sem necessidade de instalar bibliotecas externas.

## 🎮 Fluxo e Mecânicas do Jogo

1. **Tela de Login e CAPTCHA Satírico (`index.html`):**
   * Paródia humorística de autenticação com validação de CPF fictício (nenhum dado é enviado ou armazenado).
   * Desafio de CAPTCHA temático antes de liberar o acesso à pista.
2. **Seleção de Personagem (`selecao.html`):**
   * Escolha entre **Tigrinho 🐯**, **Veado 🦌**, **Onça-pintada 🐆** ou **Macaco 🐒**.
   * O personagem escolhido é controlado pelo jogador e os outros três entram automaticamente como adversários CPU.
3. **Corrida em 3 Biomas (`corrida.html`):**
   * Tabuleiro de **30 casas** dividido em **Floresta** (1–10), **Praia** (11–20) e **Oceano** (21–30).
   * Movimentação por dado **D3** (probabilidade real de 1/3 para cada face), eventos aleatórios na pista (*Turbo*, *Óleo* e *Pane*) e console de eventos em tempo real.

## ✨ Principais Funcionalidades

* **🐍 Quiz de Python por Rodada:** Ao final de cada rodada completa, surge um desafio de múltipla escolha (banco com **61 questões** de Python). Acertar concede **+1 gema** (a CPU também responde automaticamente com 25% de chance de acerto).
* **🛒 Loja e Bolsa de Itens:**
  * **Óleo (`5 💎`):** Faz o líder adversário voltar 2 casas.
  * **Buraco (`7 💎`):** Faz o adversário perder o próximo turno.
  * **Escudo (`8 💎`):** Bloqueia o próximo ataque recebido.
  * **Super Turbo (`10 💎`):** Avança +3 casas imediatamente.
* **🎡 Roda da Sorte e Recarga Simulada:**
  * Roleta animada em CSS/JS com cooldown de 24 horas e prêmios de até **+100 gemas**.
  * Modal de compra fictícia de gemas para fins didáticos.
* **🕹️ Minijogos Integrados (Recompensa: 1 item aleatório):**
  * **Jogo da Velha (`Ctrl + Z`):** Partida contra CPU inteligente.
  * **Gênio das Cores (`Ctrl + X`):** Desafio de memória visual com 7 níveis.
  * **Jogo da Forca (`Ctrl + C`):** Palavras por categoria com limite de 5 erros.
  * **Reflexo das Setas (`Ctrl + V`):** 15 setas direcionais com tempo limite de 1,25s por comando.
* **🧪 Atalhos de Teste de Pódio:** `Ctrl + P` (1º lugar), `Ctrl + O` (2º lugar), `Ctrl + I` (3º lugar) e `Ctrl + U` (4º lugar).

## 🛠️ Tecnologias Utilizadas

* **Node.js (Módulos nativos `http`, `fs` e `path`):** Servidor HTTP local sem dependências externas.
* **HTML5 & CSS3:** Layout responsivo, animações da roleta (`conic-gradient`), modais e sprites dos karts.
* **JavaScript (Vanilla JS):** Lógica de turnos, IA dos minijogos, quiz de Python e persistência de gemas/cooldown via `LocalStorage`.

## 🗂️ Estrutura do Projeto

```text
├── public/
│   ├── index.html                  # Tela inicial de login e CAPTCHA
│   ├── pages/
│   │   ├── selecao.html            # Tela de escolha de personagem
│   │   └── corrida.html            # Tabuleiro, loja, roleta, minijogos e console
│   ├── js/
│   │   ├── login.js                # Validação fictícia e lógica do CAPTCHA
│   │   ├── selection.js            # Controle de seleção de pilotos
│   │   └── race.js                 # Motor da corrida, quiz, loja e minijogos
│   ├── css/
│   │   ├── app.css                 # Estilos do login, CAPTCHA e seleção
│   │   └── race.css                # Estilos da pista, HUD, roleta e modais
│   └── assets/                     # Mapa de fundo e sprites dos karts
├── server.js                       # Servidor Node.js puro
├── package.json                    # Metadados e script de inicialização
├── PERGUNTAS-PYTHON.json           # Banco de 61 perguntas de Python
├── PERGUNTAS-PYTHON-GABARITO.txt   # Gabarito explicado
└── COMO-RODAR.txt                  # Instruções de execução
```

## 💻 Como Executar

### Pré-requisitos
* Ter o **Node.js** instalado na máquina (não é necessário rodar `npm install`).

### Passo a passo
1. Clone este repositório:
   ```bash
   git clone https://github.com
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd py-kart-arena
   ```
3. Inicie o servidor:
   ```bash
   node server.js
   ```
4. Acesse no navegador:
   ```text
   http://localhost:3000
   ```
