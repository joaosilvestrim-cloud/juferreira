# Registro de decisão · Ju v2

Material interno (Direção Editorial Site 2.0, §26). Textos da v1 preservados em `docs/v2/cofre-ju.md`.

| Campo | Registro |
|---|---|
| Página/rota | Ju · `/ju` |
| Referência da implementação | branch `v2/home` (checkout compartilhado), v1 = tag `v1.0-site`. Arquivos: `src/app/ju/page.tsx`, `src/components/sections/ju/JuBlocks.tsx` (`JuIcons.tsx` ficou sem uso) |
| Data da revisão | 20/10/2026 |
| Aprovado por Ju/Luiz | Pendente |
| Textos alterados em relação ao documento | Ver "Diferenças em relação aos candidatos" abaixo |
| Ativos ainda pendentes | Ver "Pendências" |
| Testes realizados | `tsc --noEmit` (sem erros nos arquivos da página), `eslint` (limpo), leitura do texto renderizado no dev server, destinos dos links (incluindo o comportamento condicional WTF/EPIC247), hierarquia h1 → h2 → h3, sem rolagem horizontal em 375 px e 1024 px |
| Testes não realizados | `next build`; capturas desktop/mobile completas; teclado ponta a ponta; leitor de tela real; contraste medido; clique real nos redirecionamentos `/ir/*` |
| Próxima etapa autorizada | Revisão da Ju/Luiz (especialmente J02, J03 e J06). Rodar o codemod de editáveis (coordenador) |

## Mapa de blocos v1 → v2

| Bloco v1 | Decisão | Bloco v2 | O que mudou |
|---|---|---|---|
| 1 · Primeiro de tudo, eu sou a Ju | PRESERVAR entrada + simplificar | J01 `JuHero` | Título mantido. "Engenheira por formação / Empreendedora por insistência..." e "mais de duas décadas" → COFRE. Texto J01. Um CTA: "Conheça essa trajetória" → `#trajetoria` |
| 2 · A trajetória que construiu a lente | FUNDIR em J02 | J02 | Timeline de 5 marcos e o percurso engenharia → maternidade → COFRE. "Eu não cheguei aos futuros por tendência. Cheguei por trajetória." → COFRE [FRASE-ASSINATURA] |
| 3 · Tecnologia vivida de dentro | PRESERVAR materialidade, cortar repetição | J02 `JuTecnologia` (`#trajetoria`) | Texto J02 (EMC, Oracle, A2F). Indicadores 486% e US$ 20 milhões RETIRADOS → COFRE [PESQUISAR]. Mantidos: "nenhuma transformação tecnológica é apenas tecnológica" e "O que acontece com a gente quando ela consegue?" (Direção §6: preservar) |
| 4 · Construir, errar, recomeçar | CONCENTRAR numa passagem | J02 | Uma frase em J02: "Nesse caminho, acertei, errei, perdi dinheiro, recomecei e mudei de direção." (fatos da v1). Lista "É preciso vender...", "possibilidade sem realidade vira fantasia..." → COFRE. "Futuros testados pela realidade" → MATAR (§6) |
| (novo) | CRIAR (candidato) | J03 `JuEscolher` | História do professor Wilker, adaptação do documento. Ver pendência 1 |
| 5 · Maternidade | PRESERVAR virada, comprimir | J04 `JuMaternidade` | Título "...mudou de escala", texto J04, "eu não controlo o futuro delas" + participação. Antes/Depois, lista de perguntas e "não controlar ≠ não participar" → COFRE. Imagem trocada: a cena gerada com "meninas fictícias" (`maternidade-vertical.webp`) saiu; entrou retrato real da Ju (`/images/ju/retrato-sorriso-tijolos.webp`, sem uso anterior no site) |
| 6 · Da transformação aos futuros | INCORPORAR relação intelectual | J05 `JuFuturos` | Texto J05 + CTA "Conheça Futuros Humanos" → `/futuros-humanos`. Mantida a frase "Eu estudo futuros porque me interesso profundamente por pessoas." (Contexto Mestre §6). Cartões de pergunta, Alquimia Pessoal/Ser Arco-Íris, Futurismo Humanista → COFRE |
| 7 · O que a Ju constrói hoje | CARTÕES curtos | J06 `JuHoje` | 4 cartões: Palestras e experiências → `/palestras`; What The Future?! e EPIC247 com destino condicional (abaixo); Empresas e projetos sem link. Cartão "Futuros Humanos", miniaturas, "tese não é produto", "WTF não é Futuros Humanos", SciFiXD/Futurismo Pessoal → COFRE/MATAR |
| 8 · Tensões recorrentes | DISTRIBUIR e retirar | (removido) | Tensões já aparecem nos textos de J02/J05. Bloco inteiro → COFRE [ARTIGO]/[POST] |
| 9 · Encerramento | CONCLUIR sem nova aula | J07 `JuEncerramento` | Título "Eu não quero menos vida. Eu quero mais vida.", texto J07, destaque "Não terminei de me tornar. Não terminei de construir.", CTA "Vamos conversar" → `/contato`. Lista "Tentando pagar os boletos..." e recapitulação da tese → COFRE. Foto trocada para `ju-caminhada-movimento` (a anterior repetia a do encerramento de Futuros Humanos e Contato) |

### CTAs condicionais em J06

`JuHoje` lê `getExternal()` (URLs do /admin → Configurações):
- WTF com `wtf_url` cadastrada: "Conheça a WTF" → `/ir/wtf`. Sem URL: "Converse sobre futuros aplicados" → `/contato?rota=futuros-aplicados#formulario`. (No dev server de hoje: sem URL.)
- EPIC247 com `epic247_url`: "Conheça o EPIC247" → `/ir/epic247`. Sem URL: "Tire uma dúvida sobre o EPIC247" → `/contato?rota=epic247#formulario`. (No dev server de hoje: com URL.)

## Diferenças em relação aos candidatos do documento

- J01: a pergunta de inquietação foi destacada em linha própria (vermelho, serifada); mesmo texto.
- J02: acréscimos fora do candidato: a frase "Nesse caminho, acertei, errei, perdi dinheiro, recomecei e mudei de direção." (concentra o bloco 4 com fatos da v1) e o fecho "Por isso, diante de uma nova ferramenta... O que acontece com a gente quando ela consegue?" (preservação pedida no §6).
- J03: texto idêntico ao candidato. "Na escola" é consistente com a palestra v1.1 (sétima série, aulas de Artes e Desenho Técnico); nenhum detalhe extra foi acrescentado. Post-it decorativo com a palavra "escolher.".
- J05: acréscimo da frase da v1 "Eu estudo futuros porque me interesso profundamente por pessoas.".
- J06: rótulos dos botões seguem o §16. Não há subtítulo ou introdução extra.

## Pendências (perguntas para a Ju)

1. **J03 Wilker:** aprova a adaptação para o site? Se não quiser usar a história, remover `JuEscolher` de `src/app/ju/page.tsx` (sem substituir por outra autobiografia).
2. **A2F:** confirmar "cofundar e liderar" e o período. "Mais de 13 anos" não está publicado.
3. **Indicadores Oracle:** 486% da meta e US$ 20 milhões ficam fora do site até confirmação de atribuição, período e contexto.
4. **EMC e Oracle:** confirmar a formulação "empresas como EMC e Oracle" (a v1 citava as duas).
5. **HomeCare+ e Ayumana:** não aparecem. Confirmar participação e estágio públicos antes de nomear no cartão "Empresas e projetos".
6. **WTF:** cadastrar URL oficial no /admin para o botão virar "Conheça a WTF".
7. **SciFiXD, Futurismo Pessoal, Alquimia Pessoal, Ser Arco-Íris:** no cofre com [PESQUISAR]; confirmar se e como citar.
8. **Foto da maternidade:** usar retrato real (hoje) ou uma imagem simbólica não documental aprovada. Fotos das filhas não são requisito.
9. Fotos `/images/ensaio/*` são cenas geradas (marcadas no HTML). Substituir pelo ensaio real.

## Observações técnicas

- `JuHoje` virou componente assíncrono (server component) para ler `getExternal()`, no mesmo padrão de `OrgBlocksB`.
- `src/components/sections/ju/JuIcons.tsx` ficou sem uso (timeline removida). Pode ser apagado.
- Textos novos estão em JSX puro, sem `tx()`. O codemod do coordenador precisa rodar. A imagem da maternidade (`/images/ju/retrato-sorriso-tijolos.webp`) e seu alt também estão sem `img()/tx()`.
- Nenhum arquivo compartilhado foi alterado.
