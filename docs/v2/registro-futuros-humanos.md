# Registro de decisão · Futuros Humanos v2

Material interno (Direção Editorial Site 2.0, §26). Textos da v1 preservados em `docs/v2/cofre-futuros-humanos.md`.

| Campo | Registro |
|---|---|
| Página/rota | Futuros Humanos · `/futuros-humanos` |
| Referência da implementação | branch `v2/home` (checkout compartilhado), v1 = tag `v1.0-site`. Arquivos: `src/app/futuros-humanos/page.tsx`, `src/components/sections/futuros-humanos/FuturosHumanosBlocksA.tsx`, `FuturosHumanosBlocksB.tsx`, `FuturesDiagram.tsx`, `SpiralDiagram.tsx` |
| Data da revisão | 20/10/2026 |
| Aprovado por Ju/Luiz | Pendente |
| Textos alterados em relação ao documento | Ver "Diferenças em relação aos candidatos" abaixo |
| Ativos ainda pendentes | Referência bibliográfica verificada para as quatro categorias de futuros; desenho canônico da Espiral (hoje `SpiralMark`, PNG provisório) |
| Testes realizados | `tsc --noEmit` (sem erros nos arquivos da página), `eslint` nos arquivos da página (limpo), leitura do texto renderizado no dev server, destinos de todos os links, hierarquia de títulos, ausência de rolagem horizontal em 375 px e 1024 px |
| Testes não realizados | `next build`; capturas desktop/mobile completas (a aba do navegador em segundo plano não terminou de desenhar as capturas); navegação por teclado ponta a ponta; leitor de tela real; contraste medido por ferramenta |
| Próxima etapa autorizada | Revisão da Ju/Luiz. Rodar o codemod de editáveis (coordenador) |

## Mapa de blocos v1 → v2

| Bloco v1 | Decisão | Bloco v2 | O que mudou |
|---|---|---|---|
| 1 · Hero (Abertura) | PRESERVAR + COMPRIMIR | F01 `FHHero` | Título mantido. Subtítulo duplo ("Não controlamos tudo...") e definição longa saíram; entrou o texto F01. CTAs: "Explore a Espiral" → `#espiral`; "Conheça a palestra" → `/palestras`. A frase "Aquilo que existe não esgota..." deixou o hero e virou o título de F03 |
| 5 · O automático | MOVER (antecipar) + COMPRIMIR | F02 `FHAutomatico` | Texto F02 com a ressalva de que nem toda repetição é problema. Colagem de 5 fotos reduzida a 3. Fluxo Intenção/Repetição/Consequência, listas "para uma pessoa/organização" e perguntas de revisão → COFRE |
| 3 · A tese (provável não é destino) | PRESERVAR com precisão | F03 `FHTese` (`#tese`) | Título "Aquilo que existe não esgota aquilo que pode existir." Quatro categorias com definição de plausível. Pergunta de valores. Nota de proveniência pública curta (categorias dos Estudos de Futuros, cone de futuros, não criação da Ju). Diagrama mantido, com legenda textual. "O provável fala sobre continuidade" e o bloco "Prever também pode influenciar" → COFRE |
| 2 · Ferramentas mais poderosas | MOVER (depois do problema) + FUNDIR | F04 `FHFerramentas` | Fundido com o bloco 7 (autoria). Texto F04, três perguntas, destaque da frase-assinatura e definição de autoria |
| 7 · Humanidade, tecnologia e autoria | FUNDIR em F04 | F04 | Perguntas em post-it, "Delegar ≠ terceirizar", "Humanidade não é automaticamente virtude" e "Para não entregar às nossas ferramentas..." → COFRE ([ARTIGO]/[PALESTRA 2]) |
| 4 · Agência | COMPRIMIR + condições | F05 `FHAgencia` | Título "Limites existem. Potência também." Condições reais e ação coletiva. Destaque "Agência não é controle. É participação." Pergunta final. Tríade Controle/Participação/Omissão e exemplos → COFRE |
| 6 · Espiral | PRESERVAR + demonstrar | F06 `FHEspiral` (`#espiral`) | Quatro movimentos com um parágrafo cada, sem numeração (antes: NumberBadge 1–4). Retorno explícito ("A Espiral não fecha"), destaque, exemplo hipotético em tabela acessível com "Olhar de novo", fecho e nota de não garantia. O desenho mostra só os nomes e o retorno "↻ e a pergunta volta, de outro lugar"; as perguntas ficam nos cartões (sem duplicar). "Possibilidades, sozinhas, não mudam nada" → MATAR (substituída por "Imaginar já muda o que conseguimos perceber...") |
| 8 · O que provoca | REDUZIR a aplicações e links | F07 `FHEscalas` | Texto curto de escalas e CTAs "Na sua vida" → `/pessoas`, "Na sua organização" → `/organizacoes`. Cartões por público, formatos e perguntas → COFRE ([WORKSHOP]) |
| 9 · Encerramento | RETIRAR recapitulação | F08 `FHEncerramento` | Pergunta como título, "Temos futuros para construir." e CTA "Leve essa conversa para sua organização" → `CONTACT_ROUTES.organizacoes`. Lista "Ao longo dessa conversa..." → MATAR |

## Diferenças em relação aos candidatos do documento

- F01: o eyebrow "Futuros Humanos" foi mantido acima do título (identifica a página). Texto e CTAs idênticos ao documento.
- F02: a pergunta foi composta como "Se continuarmos assim, *o que estamos ajudando a tornar mais provável?*" (ênfase visual), mesmo texto.
- F03: título usa a frase-assinatura conforme documento. A nota de proveniência foi escrita para o público: "Essas categorias não são criação minha. São referências dos Estudos de Futuros, muitas vezes representadas no desenho conhecido como cone de futuros. Uso essas distinções para organizar a conversa." Não cita autores (sem referência validada).
- F05: o texto "Agência pode começar numa conversa, num pedido de ajuda..." virou introdução + lista curta (mesmas palavras).
- F06: no desenho, a anotação manuscrita "↻ e a pergunta volta, de outro lugar" é nova (síntese do retorno do Contexto Mestre §5). Mantidas da v1, por função: "A Espiral não fecha." e o post-it "A Espiral precisa sobreviver a uma terça-feira qualquer." (Contexto Mestre §5).
- F07: o link opcional "O que continuo investigando" → `/ideias` não foi incluído: a página Ideias está sendo reescrita em paralelo e a âncora `#em-investigacao` pode mudar. Incluir depois, se a seção existir publicamente.

## Pendências

1. [PESQUISAR] Referência verificada para prováveis/plausíveis/possíveis/preferíveis (candidatas a conferir: Hancock & Bezold, 1994; Voros, 2003/2017). Só então acrescentar nota bibliográfica. Não afirmar revisão acadêmica concluída.
2. Desenho canônico da Espiral (gestual, irregular, retorno legível). Hoje: `/spiral/spiral.webp` provisório.
3. Fotos do ensaio contextual (`/images/ensaio/*`) são cenas geradas, marcadas `data-photo-origin="generated-ai"`. Substituir pelo ensaio real.
4. Revisão da Ju: tom do F04 em primeira pessoa ("Eu gosto de tecnologia") e da nota de proveniência.

## Observações técnicas

- `SpiralDiagram` agora mora em `futuros-humanos/SpiralDiagram.tsx` (removido da Home pelo coordenador) e foi editado: sem numeração, com marcador de retorno, `figcaption` acessível.
- Textos novos estão em JSX puro, sem `tx()`. O codemod do coordenador precisa rodar para que voltem a ser editáveis no painel. Chaves antigas que saíram da página ficam órfãs no registro.
- Nenhum arquivo compartilhado foi alterado.
