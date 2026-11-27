# 🏎️ PyKart Arena — Edição Pista Domo

**PyKart Arena** é um jogo web humorístico e educativo de corrida em tabuleiro que combina **perguntas de programação em Python**, **minijogos clássicos**, **roleta de recompensas**, **sistema de ranking** e **batalha de itens** entre pilotos animais. O projeto roda com um servidor **Node.js puro** e interface web nativa (HTML5, CSS3 e JavaScript Vanilla), sem necessidade de instalar bibliotecas externas.

---

## ✨ Novidades da Versão Pista Domo

* 🏟️ **Nova Pista Domo:** Circuito inédito adicionado à rotação de pistas, juntando-se aos cenários de **Floresta**, **Praia** e **Oceano**, com layout e desafios visuais exclusivos.
* 🏆 **Sistema de Ranking (`Ranking Pro`):** Classificação competitiva para acompanhar a pontuação, o desempenho nas perguntas de Python e as vitórias dos pilotos.
* 🎨 **Interface e Telas Aprimoradas:** Atualizações na organização das páginas (`public/pages`), estilos (`public/css`) e mecânicas de jogo (`public/js`) para uma navegação mais fluida entre partidas.

---

## 🎮 Fluxo e Mecânicas do Jogo

1. **Tela de Login e CAPTCHA Satírico (`index.html`):**
   * Paródia humorística de autenticação com validação de CPF fictício (nenhum dado real é enviado ou armazenado).
2. **Seleção de Piloto e Pista:**
   * Escolha entre pilotos animais carismáticos e selecione o circuito da corrida (**Floresta**, **Praia**, **Oceano** ou a nova **Pista Domo**).
3. **Corrida em Tabuleiro (30 Casas):**
   * Avance pelo percurso respondendo a desafios de Python (`PERGUNTAS-PYTHON.json`) para ganhar velocidade e bônus.
4. **Minijogos Integrados:**
   * 4 minijogos clássicos embutidos durante a partida para conquistar vantagens extras na pista.
5. **Roleta de Gemas, Loja e Batalha de Itens:**
   * Acumule gemas na roleta de recompensas e equipe itens na loja para atrapalhar oponentes ou proteger seu kart.
6. **Ranking Geral:**
   * Consulte a tabela de classificação ao final das corridas e compare resultados.

---

## 🗂️ Estrutura do Projeto

```text
PY-Kart-Arena/
├── public/
│   ├── assets/                     # Recursos visuais e sonoros
│   ├── css/                        # Folhas de estilo da interface e pistas
│   ├── images/                     # Sprites dos pilotos, itens e cenários
│   ├── js/                         # Lógica da corrida, quiz, minijogos e ranking
│   ├── pages/                      # Telas do jogo (tabuleiro, loja, ranking, etc.)
│   └── index.html                  # Tela inicial e login satírico
├── COMO-RODAR.txt                  # Instruções rápidas de execução
├── PERGUNTAS-PYTHON.json           # Banco de questões de Python do jogo
├── PERGUNTAS-PYTHON-GABARITO.txt   # Gabarito comentado das questões
├── package.json                    # Metadados do projeto Node.js
└── server.js                       # Servidor HTTP nativo em Node.js puro
