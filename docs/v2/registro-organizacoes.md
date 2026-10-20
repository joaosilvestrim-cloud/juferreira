# Registro de decisão · Organizações v2

Material interno (Direção Editorial §26). Não publicado.

| Campo | Registro |
|---|---|
| Página/rota | Para Organizações · `/organizacoes` |
| Referência da implementação | branch `v2/home` (v1 preservada na tag `v1.0-site`); arquivos: `src/app/organizacoes/page.tsx`, `src/components/sections/organizacoes/OrgBlocksA.tsx`, `OrgBlocksB.tsx` (`parts.tsx` e `OrgContactForm.tsx` sem mudança) |
| Data da revisão | 20/10/2026 |
| Aprovado por Ju/Luiz | Pendente |
| Textos alterados em relação ao documento | Ver "Diferenças em relação aos candidatos" abaixo |
| Ativos ainda pendentes | URL oficial da What The Future?!; caso real autorizado (futuro); confirmação dos escopos possíveis de cada formato |
| Testes realizados | `npx tsc --noEmit` (sem erros); `npx eslint` nos arquivos da página (sem erros) |
| Testes não realizados | build, render no navegador, desktop/mobile, teclado, leitor de tela, contraste, envio do formulário de Contato na rota `organizacoes`, redirecionamento `/ir/wtf` com URL cadastrada |
| Próxima etapa autorizada | Revisão com Ju/Luiz; codemod de chaves editáveis (coordenação) |

Cofre da v1: `docs/v2/cofre-organizacoes.md`.

## Mapa de blocos antes → depois

| v1 | Decisão | v2 |
|---|---|---|
| 1 Hero (título, quatro linhas "Cada…", citação sobre o hero, faixa de cinco eixos) | PRESERVAR título; COMPRIMIR texto ao candidato; citação e faixa → COFRE | O01 Abertura |
| 2 Mudança não é direção (três colunas, citação, dois cartões com "Ler mais") | COMPRIMIR → duas frases de abertura de O02, com "mudança não é direção" junto da situação concreta; resto → COFRE [ARTIGO] | O02 |
| 3 Perguntas que importam (cinco perguntas com listas) | Selecionadas e distribuídas nos três cartões de O02; resto → COFRE [ARTIGO] [WORKSHOP] | O02 |
| 4 Três territórios | Territórios viram o rótulo de cada cartão de O02 (Tecnologia e humanidade; Transformação e capacidades; Futuros e estratégia). "Não são produtos/unidades de negócio" → MATAR (regra interna) | O02 |
| 5 Formatos (cinco cartões com fotos, "Não é uma escada obrigatória") | COMPRIMIR → tabela necessidade / formato / saída possível (quatro linhas do documento) | O03 Formatos |
| 6 Futuros aplicados e WTF ("FH não é WTF", SciFiXD, Futurismo Pessoal, quatro usos) | COMPRIMIR → descrição positiva e breve da colaboração; SciFiXD e Futurismo Pessoal → COFRE [PESQUISAR] | O04 Trabalho em coletivo |
| 7 O mundo real como laboratório (A2F 13 anos, EMC/Oracle, HomeCare+, Ayumana) | COMPRIMIR → um parágrafo + link para `/ju`; nomes e números → COFRE [PESQUISAR]. PRESERVAR "Possibilidade sem realidade vira fantasia. Realidade sem possibilidade vira resignação." | O05 Experiência |
| 8 O que muda depois (seis resultados) | MATAR promessas de resultado; PRESERVAR "Nenhuma palestra, workshop ou projeto transforma uma organização sozinho." + ressalva sobre condições internas, integradas a O03 | O03 |
| 9 Fechamento com formulário próprio (OrgContactForm) | Unificado: CTA para o formulário único de Contato (`/contato?rota=organizacoes`), que já pede o que está acontecendo, por que agora e quem está envolvido | O06 Contato |

## Textos novos (v2)

- O01: dois parágrafos do documento; CTA "Conte o desafio" → `CONTACT_ROUTES.organizacoes`; secundário (v1) "Conheça as formas de trabalhar juntos" → `#formatos`.
- O02: título do documento; abertura nova derivada da v1: "Organizações mudam o tempo inteiro. Adotam tecnologias, redesenham processos, revisam estratégias. Tudo isso pode ser necessário. / Mas mudança não é direção. E a pergunta que importa costuma chegar como um pedido urgente."; três cartões do documento; nota "Situações ilustrativas."
- O03: título e tabela do documento; frase da v1 preservada + "O escopo de cada formato é definido em proposta. Lideranças, condições internas e continuidade também fazem parte do resultado."; CTA "Conheça a palestra Futuros Humanos" → `/palestras`.
- O04: título e texto do documento. CTA condicional: com URL oficial cadastrada no painel (Configurações → WTF), "Conheça a What The Future?!" (`/ir/wtf`, nova aba); sem URL, "Converse sobre futuros aplicados" → `CONTACT_ROUTES.futuros`.
- O05: título, texto e CTA "Conheça minha trajetória" (`/ju`) do documento.
- O06: título, texto e CTA "Conversar sobre o desafio" do documento; e-mail e WhatsApp só quando cadastrados.

## Diferenças em relação aos candidatos do documento

- O01: mantido o CTA secundário da v1 para a âncora `#formatos` (destino real na própria página).
- O02: duas frases de abertura (não estavam no candidato) para cumprir "Mudança não é direção: preservar com situação concreta próxima" (§6) e o mapa (bloco 2 → O02). Os territórios aparecem como rótulo dos cartões.
- O03: a ressalva do documento ("possibilidades de escopo a validar, não entregas automaticamente incluídas") virou frase pública curta sobre proposta e continuidade; o resto é regra interna.
- O05: frase-assinatura da v1 mantida como respiro.
- O06: o formulário próprio saiu da página (decisão do documento: um só formulário). `OrgContactForm.tsx` ficou no repositório sem uso e sem alteração; pode ser apagado depois da aprovação. A âncora `#conversa` continua existindo (seção O06) para links antigos.

## Fotos

Todas do ensaio ilustrativo (`data-photo-origin="generated-ai"`), alt "Cena ilustrativa…" ou descritivo; nenhuma legenda de evento. Uma foto por bloco, sem repetir na página: O01 workshop com post-its, O02 conversa com liderança, O04 quadro com post-its, O05 notebook, O06 retrato sorrindo. As cinco fotos da faixa de formatos da v1 saíram.

## Pendências para Ju/Luiz

1. URL oficial da What The Future?! (cadastrar no painel). Até lá o CTA leva ao contato de futuros aplicados, com rótulo honesto.
2. SciFiXD e Futurismo Pessoal: descrição, disponibilidade e relação com Ju (sem presumir exclusividade ou propriedade).
3. Saídas possíveis de cada formato (coluna 3 de O03): Ju valida que são escopos que ela oferece.
4. Trajetória: o que pode ser dito publicamente sobre A2F (período e papel), EMC/Oracle, HomeCare+ e Ayumana. Hoje só em `/ju` e no cofre.
5. Caso real (futuro): entrar só com autorização, na estrutura contexto, pergunta, trabalho realizado e evidência.
6. O texto em primeira pessoa ("Trabalho com…", "Integro…") é de Ju; confirmar que a página fala na voz dela e não da equipe.

## Notas técnicas

- `OrgColetivo` e `OrgContato` leem `getExternal()` (configurações com cache "settings").
- Âncoras: mantidas `#formatos` e `#conversa`; novas `#situacoes`, `#coletivo`, `#experiencia`.
- Textos novos estão como texto literal (fora de `tx()`), aguardando o codemod; textos v1 mantidos usam as mesmas chaves.
- A tabela de O03 usa `<dl>` por linha (rótulos visíveis no celular, só para leitor de tela no desktop) com cabeçalho visual `aria-hidden`.
