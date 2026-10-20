# Registro de decisão · Pessoas v2

Material interno (Direção Editorial §26). Textos da v1 guardados em `docs/v2/cofre-pessoas.md`.

| Campo | Registro |
|---|---|
| Página/rota | `/pessoas` |
| Referência da implementação | branch `v2/home`, sem commit. Arquivos: `src/app/pessoas/page.tsx`, `src/components/sections/pessoas/{PessoasHero,PessoasMargem,PessoasPergunta,PessoasPortas,PessoasFechamento,parts}.tsx`. Removidos: `PessoasAgencia`, `PessoasAutomatico`, `PessoasEspiral`, `PessoasComecar`, `PessoasEpic`, `PessoasJu` (conteúdo no cofre). |
| Data da revisão | 20/10/2026 |
| Aprovado por Ju/Luiz | Pendente |
| Textos alterados em relação ao documento | B03 e B04: ajustes listados abaixo. Demais blocos seguem o texto candidato. |
| Ativos ainda pendentes | Ver "Pendências". |
| Testes realizados | `tsc --noEmit` e `eslint` sem erros; leitura em servidor de desenvolvimento já ativo (desktop e 375 px): textos, hierarquia de títulos, ausência de rolagem horizontal. |
| Testes não realizados | `next build`; clique real nos destinos (`/ir/epic247` depende da URL cadastrada no painel); leitor de tela; contraste medido; edição pelo painel (/admin) dos textos novos, que só ficam editáveis depois do codemod. |
| Próxima etapa autorizada | Revisão de Ju/Luiz. Publicação não autorizada. |

## Mapa de blocos (v1 → v2)

| Bloco v1 | Decisão | Destino v2 | Observação |
|---|---|---|---|
| Abertura (`PessoasHero`) | COMPRIMIR | B01 | Título preservado. Texto do candidato. CTA único "Comece por uma pergunta" → `#uma-pergunta`. Nota manuscrita "Limites existem. Potência também." saiu da abertura porque virou título do B02. |
| Agência pessoal (`PessoasAgencia`) | COMPRIMIR → COFRE | B02 | "Limites existem. Potência também." vira título. Lista "Talvez você não consiga..." e "Agência não é controle" vão para o cofre (casa principal da tese: /futuros-humanos). |
| Automático (`PessoasAutomatico`) | PRESERVAR (3 observações) / COFRE | B02 | Mantidas as notas "O que você sustenta", "O que você adia", "O que você normalizou", com as perguntas originais. "O que você repete" foi absorvido pela frase do candidato sobre hábitos e repetições. Texto longo sobre terça-feira no cofre. |
| Espiral pessoal (`PessoasEspiral`) | MOVER → COFRE | B03 | Explicação dos quatro movimentos sai; o B03 usa só as perguntas e linka `/futuros-humanos#espiral`. |
| Por onde começar (`PessoasComecar`) | MATAR (repetição) → COFRE | B03 | Os quatro cartões de diagnóstico ("Eu preciso perceber melhor"...) funcionavam como classificação; trocados pelo exercício breve. |
| EPIC247 (`PessoasEpic`) | COMPRIMIR → COFRE [EPIC] | B04 | Descrição curta do candidato. Comparação longa "EPIC247 não é Futuros Humanos" removida (regra §6). Sem preço, prazo ou promessa. |
| Portas editoriais (`PessoasPortas`) | FUNDIR | B04 | Três portas com o mesmo peso. |
| Ju também tentando (`PessoasJu`) | COMPRIMIR → COFRE | B05 | Uma passagem curta, primeira pessoa. Trechos sobre maternidade e "Vulnerabilidade não é contar tudo" no cofre [POST] [LIVRO]. |
| Comece de onde você está (`PessoasFechamento`, parte 1) | FUNDIR | B05 | "Você pode começar de onde está" vira destaque do B05. |
| Próximo passo (`PessoasFechamento`, parte 2) | MATAR (nova lista da Espiral e 4 CTAs) | B04/B05 | Mantida só a assinatura "Temos futuros para construir." no fim do B05. |

## Textos novos ou alterados (v2)

- B01. Título (preservado): "E se essa conversa for sobre a sua própria vida?" · Texto e destaque conforme candidato · CTA "Comece por uma pergunta".
- B02. Título "Limites existem. Potência também." · Três parágrafos do candidato · Pergunta "O que você continua fazendo que já não escolheria da mesma forma hoje?" · Três notas preservadas da v1.
- B03. Título "Uma pergunta para a sua terça-feira." · Introdução, quatro perguntas e fecho do candidato · Link "Entenda a Espiral" → `/futuros-humanos#espiral`.
  - Alteração: o rótulo de cada verbo aparece em maiúsculas vermelhas antes da pergunta e o fecho ganhou o símbolo ↻ (decorativo, oculto ao leitor de tela).
- B04. Título "O próximo passo depende do que você precisa."
  - Alteração: "artigos, podcast e entrevista disponíveis em Ideias" virou "Perguntas em investigação e textos sobre futuros, tecnologia e escolhas, conforme são publicados." Motivo: hoje não há artigo publicado, podcast nem entrevista em /ideias. Atualizar quando houver acervo real.
  - Newsletter: "Uma conversa semanal, por e-mail, sobre aquilo que estamos construindo enquanto a vida acontece." CTA "Conheça a newsletter" → `/ideias#uma-terca-feira-qualquer` (inscrição funcional).
  - EPIC247: descrição do candidato. CTA "Conheça o EPIC247" → `/ir/epic247` e link secundário "Tire uma dúvida sobre o EPIC247" → `/contato?rota=epic247#formulario`.
- B05. Título "Eu também preciso voltar à pergunta." · Texto e destaque do candidato · Assinatura "Temos futuros para construir." (texto v1 preservado).

## Linguagem e gênero

O candidato pede linguagem sem marcar gênero. Removidas da página as formas "cansada", "pronta", "dividida", "você mesma". As três notas preservadas já são neutras. Se Ju decidir priorizar mulheres, registrar a decisão e aplicar de forma consistente.

## Imagens

- B01: `home-02-biblioteca-vertical` (desktop) e `home-02-biblioteca-horizontal` (mobile), sem mudança.
- B02: `pessoas-cafe-manha` (antes no Automático).
- B03: `contexto-caderno-escolhas` (mãos e caderno, sem rosto).
- B05: `pessoas-janela`.
- Saíram da página: `ju-trabalho-tecnologia`, `home-05-escrita-vertical`, `ju-estudo-fones`, `ju-caminhada-movimento` (duas vezes na v1), `home-06-ideias-horizontal`, `contexto-caminhos-escolhas`, `contexto-livros-janela`, `ju/retrato-biblioteca`, `maternidade-maos-dadas`, `home-01-abertura-horizontal`. Nenhuma imagem repete na página.
- Todas as imagens `/images/ensaio/` são do ensaio ilustrativo (marcadas `data-photo-origin="generated-ai"`). Substituir pelo ensaio fotográfico real quando existir.

## Pendências

1. Confirmar com Ju/Luiz a frequência e o canal da newsletter ("semanal", "por e-mail"). O envio é feito pelo painel; não foi testado envio real.
2. Confirmar a URL do EPIC247 no painel (Configurações → `epic247_url`, esperado `https://epic247.com.br`). Sem URL, `/ir/epic247` cai no formulário de contato, o que seria um desvio silencioso do rótulo "Conheça o EPIC247".
3. Validar a descrição pública do EPIC247 com a fonte atual do produto.
4. Confirmar que a página Futuros Humanos v2 mantém a âncora `#espiral` (hoje existe em `FuturosHumanosBlocksB`).
5. Quando Ideias tiver acervo real (artigos, podcast, entrevista), revisar o texto da porta "Quero continuar pensando".
6. Imagem de compartilhamento (`src/app/pessoas/opengraph-image.tsx`) usa a foto `retrato-biblioteca`, que saiu da página. Avaliar se mantém.
7. Os textos novos estão como texto simples no código: só ficam editáveis no painel depois do codemod.
