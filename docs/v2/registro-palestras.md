# Registro de decisão · Palestras v2

Material interno (Direção Editorial §26). Não publicado.

| Campo | Registro |
|---|---|
| Página/rota | Palestras · `/palestras` |
| Referência da implementação | branch `v2/home` (v1 preservada na tag `v1.0-site`); arquivos: `src/app/palestras/page.tsx`, `src/components/sections/palestras-workshops/BlocksIntro.tsx`, `BlocksFormatos.tsx`, `BlocksLastro.tsx` (Icons.tsx sem mudança) |
| Data da revisão | 20/10/2026 |
| Aprovado por Ju/Luiz | Pendente |
| Textos alterados em relação ao documento | Ver "Diferenças em relação aos candidatos" abaixo |
| Ativos ainda pendentes | Entrevista recente sobre Futuros Humanos; registro antigo de palco aprovado por Ju; condições práticas de contratação |
| Testes realizados | `npx tsc --noEmit` (sem erros); `npx eslint` nos arquivos da página (sem erros) |
| Testes não realizados | build, render no navegador, desktop/mobile, teclado, leitor de tela, contraste, envio do formulário de Contato, comportamento com provas cadastradas no painel |
| Próxima etapa autorizada | Revisão com Ju/Luiz; codemod de chaves editáveis (coordenação) |

Cofre da v1: `docs/v2/cofre-palestras.md`.

## Mapa de blocos antes → depois

| v1 | Decisão | v2 |
|---|---|---|
| 1 Hero ("Leve essa conversa para sua organização", cinco perguntas, faixa de três formatos) | COMPRIMIR → foco na palestra principal; faixa de formatos e perguntas → COFRE | P01 Abertura |
| 2 Por que uma palestra da Ju (quatro pilares, públicos, "não é uma palestra sobre o futuro") | COMPRIMIR + fundir com 3; pilares e públicos → COFRE [ARTIGO] | P02 A experiência |
| 3 Futuros Humanos, a palestra-mãe (ciclo dos quatro movimentos, "o que provoca", contextos) | COMPRIMIR → três perguntas + uma frase sobre os movimentos com retorno transformado e link para `/futuros-humanos` (casa da Espiral). Ciclo visual fechado retirado: desenhava volta ao mesmo ponto | P02 |
| 4 Outras conversas possíveis (cinco temas) | MATAR o catálogo (temas não confirmados como ofertas) → COFRE [PALESTRA 2]; PRESERVAR título "A tese dá direção. O contexto define a conversa." e "Customizar não é trocar o logo na apresentação." | P04 Contexto |
| 5 Workshops (quatro passos, situações, formato) | COMPRIMIR → resumo + link para `/organizacoes`; passos → COFRE [WORKSHOP] | P05 Aprofundamento |
| 6 Experiências customizadas | Incorporado a P05; opções → COFRE [WORKSHOP] | P05 |
| 7 Ju no palco / lastro (métricas, empresas, colunas biográficas, "Ju em ação") | MATAR as métricas públicas (486% da meta, US$ 20 milhões, 13 anos: [PESQUISAR]); trajetória → mora em `/ju`; "Ju em ação" vira P03, só com provas reais do painel | P03 Ouça e veja Ju |
| 8 Como construímos (seis passos) | COMPRIMIR → três momentos; exemplos "pedido × pergunta real" → COFRE [POST] | P06 Como começa |
| 9 Conversão (três cartões, listas, fechamento "Temos futuros para construir") | COMPRIMIR → um CTA real + canais diretos cadastrados | P07 Contratação |

## Textos novos (v2)

- P01: eyebrow "Futuros Humanos | Palestra com Ju Ferreira"; H1 "Estamos ficando mais capazes. Para construir o quê?"; texto do documento dividido em lead + parágrafo; CTAs "Conversar sobre meu evento" (`CONTACT_ROUTES.palestras`) e, só com vídeo real cadastrado, "Ouça e veja a Ju" (`#ouca-e-veja`). Sem vídeo, o secundário é "Conheça Futuros Humanos" (`/futuros-humanos`, texto da v1).
- P02: título, dois parágrafos e três perguntas conforme o documento; rótulo "Três perguntas atravessam a palestra"; frase nova sobre os movimentos ("No caminho, a conversa passa por imaginar, escolher, tornar-se e construir. Não como etapas a cumprir: depois de construir, a pergunta volta, mas de outro lugar.") com link "Conheça a tese em profundidade"; contextos (três) e nota "Cada público pede ênfases próprias. Por isso a adequação é conversada a partir do briefing de cada evento."
- P03: título do documento; cada vídeo mostra título e contexto vindos do painel (campos "título" e "cargo/contexto" das Provas).
- P04: as duas situações do documento em cartões + "Essas tensões orientam exemplos e ênfases…"; citação "Customizar…" preservada (chave v1).
- P05: título e texto do documento; preservada a frase da v1 "Às vezes, a palestra abre a conversa. O workshop permite trabalhá-la."; CTA "Veja o trabalho com organizações" → `/organizacoes`.
- P06: três momentos do documento.
- P07: título, texto e CTA "Falar sobre uma palestra" do documento; e-mail/WhatsApp só quando cadastrados no painel.
- Metadados padrão: título "Palestras"; descrição nova (o SEO do painel continua tendo prioridade).

## Diferenças em relação aos candidatos do documento

- P01: o CTA secundário do documento ("Ouça a Ju falar sobre a palestra") virou "Ouça e veja a Ju", porque o painel de Provas não distingue entrevista de palco; o rótulo genérico não promete conteúdo específico. Trocar o rótulo quando a entrevista existir.
- P02: incluída uma frase curta sobre a Espiral (retorno transformado) e link para a casa da tese, para não perder a arquitetura sem repetir a explicação.
- P02: título em duas linhas com ênfase em "além do evento".
- P05: uma frase da v1 mantida como respiro antes do texto do documento.

## Fotos

Todas as imagens são do ensaio ilustrativo (`/images/ensaio/`, marcadas no código como `data-photo-origin="generated-ai"`), com alt "Cena ilustrativa…". Nenhuma legenda as apresenta como evento real. Distribuição sem repetição na página: P01 palco vertical, P02 interação com plateia, P04 palco de frente (círculo), P05 workshop ao redor da mesa, P07 retrato com notebook (decorativo, `alt=""`). A foto `organizacoes-conversa-lideranca` saiu desta página (fica em Organizações).

## Pendências para Ju/Luiz

1. Entrevista recente sobre Futuros Humanos: link, veículo/evento, data e título. Cadastrar em /admin → Provas como "vídeo" (título = "Entrevista: …"; contexto = veículo e data).
2. Registro antigo de palco: Ju aprova a representatividade? Informar ocasião e data; o contexto deve dizer que não é a versão atual da palestra.
3. Podcast: entra como complemento; não repetir o mesmo vídeo integral em vários blocos.
4. Informações práticas de contratação (duração, presencial/online, idiomas, cidade de origem e deslocamento, material de apoio, disponibilidade): nada publicado até confirmação.
5. Métricas e empresas da v1 (486% da meta, US$ 20 milhões, EMC/Oracle, 13 anos de A2F): confirmar atribuição antes de qualquer uso público; ficam no cofre.
6. Contextos de P02 ("encontros de liderança; eventos de tecnologia e inovação; convenções e momentos de transformação"): confirmar que são os públicos que Ju quer priorizar.

## Notas técnicas

- `PalestrasHero` e `PalestrasOucaVeja` leem `getProof()` (cache por tag "proof"). Sem itens visíveis, P03 não renderiza e o hero não oferece o atalho para vídeos.
- Vídeos: iframe com `loading="lazy"` sem permissão de autoplay; arquivos diretos com `controls` e `preload="none"`.
- Âncoras antigas `#futuros-humanos`, `#experiencias`, `#lastro`, `#ju-em-acao`, `#como-construimos` deixaram de existir (nenhum link interno as usava). Mantidas: `#workshops` (P05) e `#contratar` (P07). Novas: `#a-palestra`, `#ouca-e-veja`, `#contexto`, `#como-comeca`.
- Textos novos estão como texto literal (fora de `tx()`), aguardando o codemod. Textos v1 mantidos usam as mesmas chaves (ajustes já salvos no painel continuam valendo).
