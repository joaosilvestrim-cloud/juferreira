# Registro de decisão · Ideias v2

Material interno (Direção Editorial §26). Textos da v1 guardados em `docs/v2/cofre-ideias.md`. A página de leitura `src/app/ideias/[slug]` não foi alterada.

| Campo | Registro |
|---|---|
| Página/rota | `/ideias` (lista) |
| Referência da implementação | branch `v2/home`, sem commit. Arquivos: `src/app/ideias/page.tsx`, `src/components/sections/ideias/{IdeiasBlocksA,IdeiasBlocksB,AcervoList,data}.ts(x)`. `NewsletterForm.tsx` e `Parts.tsx` sem alteração. |
| Data da revisão | 20/10/2026 |
| Aprovado por Ju/Luiz | Pendente |
| Textos alterados em relação ao documento | I02, I03 e I04: ajustes listados abaixo. |
| Ativos ainda pendentes | Ver "Pendências". |
| Testes realizados | `tsc --noEmit` e `eslint` sem erros; leitura em servidor de desenvolvimento já ativo (desktop e 375 px) com 0 artigos publicados e 0 referências: I02 e listas de referências omitidas, sem rolagem horizontal, hierarquia h1 → h2 → h3. |
| Testes não realizados | Acervo com artigos publicados (componente `AcervoList` e filtros não foram vistos renderizados); referências cadastradas; inscrição real na newsletter (não enviada para não registrar e-mail); `next build`; leitor de tela. |
| Próxima etapa autorizada | Revisão de Ju/Luiz. Publicação não autorizada. |

## Mapa de blocos (v1 → v2)

| Bloco v1 | Decisão | Destino v2 | Observação |
|---|---|---|---|
| Abertura (`IdeiasHero`) | COMPRIMIR | I01 | Título e nota "Nem tudo aqui está resolvido." preservados. A faixa de três colunas abaixo da abertura saiu (segundo bloco de introdução). |
| A pergunta antes do conteúdo (`IdeiasPergunta`) | COMPRIMIR → COFRE [ARTIGO] | I05 | Os cinco passos ("Alguma coisa me faz parar"...) e a legenda epistêmica viram material de ensaio futuro. |
| Destaques (`IdeiasDestaque`) | MATAR (público) → COFRE [ARTIGO] [PESQUISAR] | I02 | Artigo protagonista e cinco artigos ilustrativos com "Leia o ensaio" para `#` saíram. I02 mostra só artigos publicados no painel; sem publicação, a seção não aparece. |
| Territórios (`IdeiasTerritorios`) | MOVER → COFRE | I02 (filtros) | Viram filtros do acervo, com nomes do candidato, e só aparecem quando há conteúdo em mais de uma categoria. |
| Em investigação (`IdeiasInvestigacao`) | COMPRIMIR | I04 | Cinco cartões viram três. "Que capacidades humanas ganham importância?" (8 capacidades) e "O que estamos terceirizando sem perceber?" vão para o cofre [ARTIGO]. Sem botão "Ler mais/Leia". |
| Newsletter (`IdeiasTerca`) | COMPRIMIR | I03 | `id="uma-terca-feira-qualquer"` mantido. Amostra do formato com três itens preservados da v1. "O que ela não é", "Por que terça-feira?" e paralelos com Ideias no cofre [POST]. |
| Referências (`IdeiasRepertorio`) | COFRE (placeholders) | I05 | "Referência a definir", "Autor a definir" e "Placeholder" removidos do público. Referências do painel aparecem só quando cadastradas. "Trilhas de investigação" no cofre. |
| Pensamento e mundo real (`IdeiasMundoReal`) | COFRE [ARTIGO] [PALESTRA 2] | (nenhum) | Conteúdo futuro. |
| Continue a conversa (`IdeiasConversa`) | FUNDIR | I03/I05 | A página termina com a nota editorial e um link para Futuros Humanos. |

## Textos novos ou alterados (v2)

- I01. Título preservado "Algumas ideias merecem mais tempo." · Texto do candidato · CTAs: "Comece a ler" → `#acervo` (só com acervo) e "Assine Uma Terça-feira Qualquer" → `#uma-terca-feira-qualquer`.
- I02. Título "Por onde você quer entrar?" · Cada item mostra tipo, data de publicação (pt-BR), título, resumo, categorias e rótulo epistêmico quando cadastrado; link "Leia o texto" → `/ideias/<slug>`. Capa só se cadastrada (sem imagem de reserva).
  - Alteração: o tipo é sempre "Artigo", porque o painel ainda não registra tipo (Ensaio, Podcast, Entrevista, Registro de palestra).
  - Categorias públicas: Futuros; Tecnologia e humanidade; Escolhas; Liderança; Vida real (ids do painel: futuros, tecnologia, escolhas, lideranca, vida-real). Seleção múltipla; "Tudo" limpa o filtro.
- I03. Título "Uma Terça-feira Qualquer" · Texto do candidato · Amostra (Uma ideia / Uma história / Uma pergunta) · Formulário existente com `source="ideias"`.
  - Alteração: o subtítulo do formulário é "Receber por e-mail", mas o botão do componente compartilhado continua "Assine Uma Terça-feira Qualquer". "Leia uma edição" omitido: não há edição publicada com endereço próprio.
- I04. Título "Perguntas que continuam abertas." · Texto do candidato · Cartões:
  - Soberania Humana [EM INVESTIGAÇÃO]: texto do candidato.
  - Quanto mais capacidade, mais responsabilidade? [HIPÓTESE]: trechos preservados da v1.
  - Como continuar humano sem romantizar o humano? [EM INVESTIGAÇÃO]: trechos preservados da v1.
  - Alteração: o candidato pede um cartão; mantive mais dois curtos da v1 para dar substância à seção. Avaliar com Ju.
- I05. Título "Pensar também é mudar de ideia." · Texto do candidato · Referências do painel (Na mesa agora / Referências que voltam) só quando existirem · CTA "Conheça Futuros Humanos" → `/futuros-humanos`.
- SEO padrão: título "Ideias" (antes "Ideias — Algumas ideias merecem mais tempo", com travessão); descrição alinhada ao I01. O painel de SEO continua podendo sobrescrever.

## Imagens

- I01: `home-05-escrita-vertical` (sem mudança).
- I03: `home-06-ideias-horizontal`.
- I04: `ju-leitura-anotacoes` com a nota "Ainda não sei exatamente onde elas terminam."
- Saíram: repetições de `home-05-escrita-vertical` (3x), `home-01-abertura-*` (4x), `ju-leitura-anotacoes` (3x) e fotos de territórios, arenas e cartões ilustrativos.

## Pendências

1. Ju/Luiz: links e textos dos dois conteúdos recentes (podcast e entrevista) para inaugurar o acervo. Hoje não há onde cadastrar podcast/entrevista: o painel só tem artigos.
2. Ju/Luiz: confirmar canal (e-mail, LinkedIn ou ambos) e frequência da newsletter. A palavra "semanal" vem do candidato e da v1.
3. Ju: cadastrar referências reais no painel (Leituras). Sem cadastro, nada aparece.
4. Ju: aprovar os dois cartões extras do I04 ou reduzir a Soberania Humana.
5. Se houver edição pública da newsletter, acrescentar "Leia uma edição" com destino real.
6. `src/app/ideias/opengraph-image.tsx` não foi revisado (fora do escopo de arquivos).
7. Textos novos estão como texto simples no código: só ficam editáveis no painel depois do codemod.
