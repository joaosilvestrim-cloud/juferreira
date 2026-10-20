# Registro de decisão · Home v2

Base: documento "Site 2.0 · Direção editorial" (§8) e Contexto Mestre v1.0. Versão anterior preservada na tag `v1.0-site`; textos retirados em [cofre-home.md](cofre-home.md).

## Blocos: antes → depois

| v1 | Decisão | v2 |
|---|---|---|
| Abertura | PRESERVAR pergunta e frase-assinatura; trocar apoio por apresentação em primeira pessoa | H01 |
| A tensão (5 parágrafos + pergunta) | COMPRIMIR: duas situações concretas e uma pergunta nova sobre repetição | H02 |
| Futuros Humanos (6 frases + diagrama completo dos 4 movimentos) | COMPRIMIR; diagrama completo MOVER para a página Futuros Humanos | H03 |
| Ju Ferreira (6 parágrafos + 4 ícones) | COMPRIMIR para primeira pessoa; ícones → COFRE | H04 |
| Para organizações | COMPRIMIR: 3 formatos com função distinta; "palestra-mãe" → COFRE | H05 |
| Prova (métricas Oracle/A2F, colagem, "Eu não estudo futuros de fora") | MATAR na Home. Métricas não confirmadas → COFRE [PESQUISAR]; resumo factual sem números foi para H04 | (removido) |
| Para pessoas (texto + 3 portas EPIC/newsletter/ideias) | COMPRIMIR para entrada única → /pessoas; portas ficam na página Pessoas | H06 |
| Ideias (3 títulos ilustrativos sem destino real) | MATAR títulos fictícios; mostrar só artigos publicados (até 3) + newsletter operacional | H07 |
| Encerramento (2 caminhos + recapitulação da tese) | COMPRIMIR: assinatura + um convite | H08 |

## Destinos dos botões

| Botão | Destino |
|---|---|
| Leve a Ju para sua organização | /contato?rota=organizacoes#formulario |
| Conheça Futuros Humanos / Explore essa visão | /futuros-humanos |
| Conheça minha trajetória | /ju |
| Conheça as palestras | /palestras |
| Converse sobre um desafio | /organizacoes |
| Encontre um começo | /pessoas |
| Explore as ideias | /ideias (só aparece quando há artigo publicado) |
| Assinar newsletter | formulário na própria Home (origem registrada como "home") |
| Vamos conversar | /contato |

## Outras mudanças

- Logo trocado pelo SVG oficial do pacote v1.1 (versão clara gerada a partir dele).
- Diagrama da Espiral movido para `sections/futuros-humanos/SpiralDiagram.tsx`.
- Todos os textos novos editáveis no painel (/admin/paginas/home).

## Pendências

- Vídeo curto do podcast em H04: entra quando o arquivo/link real for escolhido (não há componente vazio publicado).
- Métricas 486% / US$ 20 milhões / 13 anos: confirmar contexto e titularidade antes de voltar ao site.
- Foto de abertura: trocar pela imagem escolhida do ensaio quando houver.
- H07 está sem cartões porque não há artigo publicado; ao publicar no painel, aparecem sozinhos.

## Não testado

- Envio real da newsletter a partir da Home (não inscrevemos pessoas reais para testar).
- Leitores de tela além da checagem de estrutura de títulos e foco.
