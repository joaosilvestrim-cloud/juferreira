# JU FERREIRA — HOME
## Mockup Manifest v1.0
### Checkpoint B — bloco → mockup → copy → regra visual

**Fonte visual:** `1 - Home/Home - Bloco 1.png` a `Home - Bloco 9.png`  
**Fonte textual canônica:** `Ju_Ferreira_HOME_Copy_v1.0.md`  
**Status:** pronto para orientar design system e implementação da Golden Page  
**Regra principal:** o texto rasterizado dentro dos PNGs nunca é fonte de copy. A copy oficial vem do `.md`.

---

# 0. COMO O DESENVOLVEDOR DEVE LER OS MOCKUPS

Os mockups foram aprovados como **direção visual e composicional**, não como arquivos de layout pixel-perfect prontos para produção.

Cada decisão abaixo recebe uma destas classificações:

## MUST MATCH
Deve ser preservada com alta fidelidade:
- hierarquia;
- relação entre texto, fotografia e espaço;
- ritmo da página;
- contraste;
- intenção editorial;
- linguagem de marca;
- função do bloco.

## SHOULD MATCH
Deve ficar visualmente próximo, mas pode adaptar-se ao browser real:
- margens;
- proporções;
- crop;
- dimensões de cards;
- espaçamentos internos;
- posição exata de rabiscos.

## INTERPRET
É referência, não especificação:
- fotografia gerada no mockup;
- objetos fictícios;
- logos ilustrativos não fornecidos como asset;
- livros e capas fictícios;
- detalhes manuscritos gerados pela imagem;
- texto rasterizado;
- imperfeições de geração;
- diferença de 1 px entre exports.

---

# 1. REGRAS GLOBAIS DA HOME

## 1.1 Header

### MUST MATCH
- assinatura `JU FERREIRA` à esquerda;
- navegação limpa e discreta;
- CTA `Contato` como botão vermelho arredondado;
- muito respiro;
- sensação editorial, não SaaS;
- altura visual leve.

### INTERPRET
Os 9 mockups mostram o header repetido porque cada bloco foi desenhado como uma tela independente.

**Na implementação final existe um único Header global. Não repetir o header em cada seção.**

A navegação canônica do site deve seguir o Site Master. Os mockups antigos não são autoridade para itens omitidos da navegação.

## 1.2 Paleta percebida

Direção:
- off-white quente como base;
- quase-preto/grafite;
- vinho/vermelho profundo para ênfase;
- vermelho vivo nos gestos gráficos;
- fundo escuro em momentos de tensão e encerramento.

Os valores HEX definitivos serão fechados no Design System depois da Golden Page.

## 1.3 Tipografia percebida

Direção:
- display serif editorial de alto contraste para headlines;
- sans humanista/geométrica limpa para corpo, navegação e botões;
- manuscrita apenas em notas e acentos.

Não escolher fonte definitiva só por semelhança visual antes do checkpoint de tipografia.

## 1.4 Linha/espiral vermelha

### MUST MATCH
- gesto orgânico;
- imperfeito;
- humano;
- recorrente;
- conecta áreas e ideias;
- nunca deve parecer vetor corporativo perfeitamente geométrico.

### INTERPRET
A posição exata em cada PNG não precisa ser copiada. O gesto deve responder à composição real.

## 1.5 Fotografia

### MUST MATCH
- calor humano;
- ambiente real;
- luz natural/cinemática;
- Ju em ação, pensamento ou presença;
- evitar pose corporativa genérica.

### INTERPRET
As pessoas presentes nos mockups são referências de composição. **Não são assets finais.**
Usar apenas fotografias reais aprovadas da Ju ou imagens produzidas/licenciadas para o site.

## 1.6 Botões

Dois padrões visuais:
1. primário preenchido em vermelho;
2. secundário claro/outline escuro.

Direção:
- formato cápsula;
- seta simples;
- sem excesso de sombra;
- feedback de hover sutil.

---

# 2. BLOCO 01 — HERO

**Mockup:** `Home - Bloco 1.png`  
**Copy:** `Ju_Ferreira_HOME_Copy_v1.0.md` → `BLOCO 1 — HERO`

## Função narrativa
Abrir o universo inteiro com a pergunta-mãe e estabelecer imediatamente possibilidade, futuro e participação.

## MUST MATCH
- headline é o elemento dominante da primeira dobra;
- composição editorial assimétrica;
- `DIFERENTE?` recebe destaque em vermelho;
- subheadline logo abaixo, com peso visual relevante;
- dois CTAs visíveis na primeira dobra;
- grande área de respiro;
- fotografia ocupa a região inferior/direita;
- linha vermelha cria movimento e conduz o olhar;
- atmosfera clara, quente e sofisticada.

## SHOULD MATCH
- headline em aproximadamente duas linhas no desktop;
- texto à esquerda e imagem à direita;
- CTA primário antes do secundário;
- fotografia parcialmente integrada ao fundo, evitando aparência de card;
- recorte orgânico/branco inferior pode ser mantido como textura se funcionar no sistema.

## INTERPRET
- montanha e fotografia específica;
- posição exata dos arcos vermelhos;
- logo circular desenhado do mockup;
- largura exata dos botões.

## Mobile
- headline continua sendo a prioridade;
- imagem desce depois da introdução/CTAs;
- não tentar preservar a mesma geometria de arcos;
- CTAs podem empilhar;
- evitar que `DIFERENTE?` quebre de modo estranho;
- primeira dobra deve ainda comunicar pergunta + tese + ação.

## Critério de aceite
Ao abrir a Home sem rolar, o usuário deve perceber:
**Ju Ferreira + pergunta-mãe + tese + possibilidade de contratação + Futuros Humanos.**

---

# 3. BLOCO 02 — A TENSÃO

**Mockup:** `Home - Bloco 2.png`  
**Copy:** `Ju_Ferreira_HOME_Copy_v1.0.md` → `BLOCO 2 — A TENSÃO`

## Função narrativa
Criar contraste com o hero e apresentar a tensão mudança ≠ direção.

## MUST MATCH
- mudança abrupta de atmosfera clara para escura;
- headline grande à esquerda;
- `MUDANÇA` e `DIREÇÃO` enfatizadas em vermelho;
- imagem abstrata/arquitetônica ocupa a metade direita;
- muito contraste entre texto claro e fundo quase preto;
- pergunta final separada visualmente do corpo;
- linha vermelha cruza a imagem e reforça tensão/movimento.

## SHOULD MATCH
- divisão visual aproximada 45/55;
- imagem com luz entrando em espaço escuro;
- headline quebrada em múltiplas linhas;
- pergunta final maior que o corpo, menor que a headline.

## INTERPRET
- cenário exato;
- textura específica da parede;
- traçado exato do vermelho.

## Mobile
- headline;
- corpo;
- pergunta final;
- imagem como pausa visual;
- não colocar texto sobre área de imagem com contraste instável.

## Critério de aceite
O bloco deve ser percebido como **mudança de estado emocional** dentro da Home.

---

# 4. BLOCO 03 — FUTUROS HUMANOS

**Mockup:** `Home - Bloco 3.png`  
**Copy:** `Ju_Ferreira_HOME_Copy_v1.0.md` → `BLOCO 3 — FUTUROS HUMANOS`

## Função narrativa
Apresentar a tese e introduzir a Espiral sem transformar a Home na página completa de Futuros Humanos.

## MUST MATCH
- layout claro;
- tese grande no lado esquerdo;
- `pode existir.` em vermelho/ênfase;
- Espiral ocupa protagonismo visual no lado direito;
- quatro movimentos claramente identificáveis:
  `IMAGINAR / ESCOLHER / TORNAR-SE / CONSTRUIR`;
- fluxo `IMAGINAR → ESCOLHER → TORNAR-SE → CONSTRUIR ↻`;
- CTA para Futuros Humanos;
- aparência intelectual/editorial, não infográfico corporativo.

## SHOULD MATCH
- desktop em duas áreas principais;
- Espiral grande, respirada e não confinada num card;
- labels posicionados ao longo do movimento;
- linha fina de apoio antes do fluxo.

## INTERPRET
- coordenadas exatas dos quatro pontos;
- número de voltas exato;
- escala exata da espiral.

## Regra crítica
A Espiral não pode parecer:
- mola;
- ícone de loading;
- processo circular perfeito;
- gráfico corporativo.

Ela deve manter irregularidade humana.

## Mobile
Não miniaturizar a Espiral desktop.

Recomenda-se:
1. tese;
2. breve corpo;
3. Espiral vertical/adaptada;
4. quatro movimentos em sequência legível;
5. fluxo síntese;
6. CTA.

## Critério de aceite
A pessoa deve entender a lógica da Espiral mesmo sem visitar a página Futuros Humanos.

---

# 5. BLOCO 04 — JU FERREIRA

**Mockup:** `Home - Bloco 4.png`  
**Copy:** `Ju_Ferreira_HOME_Copy_v1.0.md` → `BLOCO 4 — JU FERREIRA`

## Função narrativa
Humanizar e provar que a tese nasceu da experiência, não de uma construção abstrata de marca.

## MUST MATCH
- headline grande à esquerda;
- `vida real.` em vermelho;
- fotografia da Ju com presença forte à direita;
- corpo biográfico sem aparência de CV;
- quatro provas/sínteses visuais na base:
  `Tecnologia vivida.`
  `Empresas construídas.`
  `Humanidade em primeiro plano.`
  `Futuros em construção.`
- CTA `Conheça Ju Ferreira`.

## SHOULD MATCH
- aproximadamente metade texto / metade foto;
- pequenos ícones lineares nas quatro sínteses;
- linha vermelha interagindo com a fotografia;
- fotografia sem moldura/card pesado.

## INTERPRET
- pose específica;
- biblioteca/cenário específico;
- ícones exatos;
- círculo exato sobre a fotografia.

## Mobile
- headline + texto primeiro;
- fotografia ampla;
- quatro sínteses em 2×2 ou stack;
- CTA após sínteses.

## Critério de aceite
O usuário deve concluir:
**“Ela não está apenas falando de futuros; existe trajetória concreta por trás.”**

---

# 6. BLOCO 05 — PARA ORGANIZAÇÕES

**Mockup:** `Home - Bloco 5.png`  
**Copy:** `Ju_Ferreira_HOME_Copy_v1.0.md` → `BLOCO 5 — PARA ORGANIZAÇÕES`

## Função narrativa
Transformar pensamento em oferta B2B sem converter a Home em catálogo.

## MUST MATCH
- headline editorial grande;
- `sua organização.` em vermelho;
- três territórios/ofertas visíveis:
  `Palestras`
  `Workshops`
  `Experiências e Projetos Customizados`;
- fotografia de palco à direita;
- frase:
  `Futuros Humanos é a palestra-mãe. Mas a conversa não precisa ser sempre a mesma.`
  com destaque;
- CTA primário e secundário claramente distintos.

## SHOULD MATCH
- desktop com área comercial à esquerda e palco à direita;
- três colunas simples, sem cards pesados;
- pequenos gestos vermelhos acima dos títulos;
- bloco final de CTA alinhado ao conteúdo.

## INTERPRET
- foto de palco específica;
- crop exato;
- largura exata de cada coluna.

## Mobile
- headline;
- introdução;
- três formatos empilhados;
- frase da palestra-mãe;
- CTAs;
- foto pode entrar entre introdução e formatos ou depois dos formatos, conforme ritmo.

## Critério de aceite
O bloco deve deixar claro que existem **ofertas compráveis**, mas também customização.

---

# 7. BLOCO 06 — PROVA / JU HANDS-ON

**Mockup:** `Home - Bloco 6.png`  
**Copy:** `Ju_Ferreira_HOME_Copy_v1.0.md` → `BLOCO 6 — PROVA / JU HANDS-ON`

## Função narrativa
Entregar prova de autoridade real, resultados e construção no presente.

## MUST MATCH
- headline `Eu não estudo futuros de fora.` dominante;
- `futuros de fora.` em vermelho;
- prova quantitativa e histórica visível;
- separação de lastro em territórios:
  tecnologia/mercado;
  empreendedorismo/construção;
  negócios no presente;
- colagem fotográfica à direita;
- sensação de dossier/editorial, não “logos de clientes” tradicional;
- frase final `É desse lugar que eu falo sobre futuros.`;
- CTA para trajetória.

## SHOULD MATCH
- logos reais quando houver autorização/asset correto;
- números-chave em vermelho;
- colagem assimétrica de 3–4 fotografias;
- notas manuscritas sobre algumas fotos;
- linha/espiral envolvendo a colagem.

## INTERPRET
- logos renderizados dentro do mockup;
- fotos do mockup;
- notas manuscritas literais;
- composição exata dos recortes.

## Regra factual
Resultados, logos, números e empresas devem vir de fonte aprovada e asset real.  
Não copiar visualmente um logo rasterizado do mockup quando houver arquivo oficial.

## Mobile
- headline e prova textual primeiro;
- números em cards/linhas simples;
- colagem reduzida para 1–2 imagens por vez ou grid legível;
- evitar mosaico minúsculo.

## Critério de aceite
Deve responder à objeção:
**“Por que ouvir a Ju sobre isso?”**

---

# 8. BLOCO 07 — PARA PESSOAS

**Mockup:** `Home - Bloco 7.png`  
**Copy:** `Ju_Ferreira_HOME_Copy_v1.0.md` → `BLOCO 7 — PARA PESSOAS`

## Função narrativa
Abrir a porta B2C e mostrar caminhos diferentes sem colapsá-los num único produto.

## MUST MATCH
- pergunta grande:
  `E se essa conversa for sobre a sua própria vida?`;
- `sua própria vida?` em vermelho;
- fotografia íntima da Ju no lado esquerdo;
- frase manuscrita:
  `Limites existem. Potência também.`;
- seção `Por onde eu começo?`;
- três portas distintas:
  `EPIC247`
  `Uma Terça-feira Qualquer`
  `Ideias`;
- cada porta com descrição e CTA próprio;
- CTA geral `Comece por aqui`.

## SHOULD MATCH
- desktop split: fotografia ~35–40%, conteúdo ~60–65%;
- miniaturas pequenas por porta;
- divisórias horizontais leves;
- CTA de cada linha em outline.

## INTERPRET
- fotos das miniaturas;
- posição exata do manuscrito;
- rabisco que conecta fotografia e lista.

## Mobile
- pergunta e introdução;
- fotografia;
- nota manuscrita;
- três portas como cards/linhas empilhadas;
- CTA geral por último.

## Regra comercial
Não apresentar:
- EPIC247 como Futuros Humanos;
- newsletter como produto de transformação;
- Ideias como curso.

São portas diferentes.

## Critério de aceite
O usuário deve conseguir identificar **qual próximo passo combina com seu momento**.

---

# 9. BLOCO 08 — IDEIAS

**Mockup:** `Home - Bloco 8.png`  
**Copy:** `Ju_Ferreira_HOME_Copy_v1.0.md` → `BLOCO 8 — IDEIAS`

## Função narrativa
Demonstrar profundidade editorial e criar recorrência via artigos + newsletter.

## MUST MATCH
- headline grande:
  `Algumas ideias merecem mais tempo.`;
- `mais tempo.` em vermelho;
- composição editorial semelhante a revista;
- área de artigos;
- área de newsletter;
- fotografia/repertório na parte superior direita;
- nota manuscrita;
- fechamento:
  `Primeiro vem a pergunta. Depois vem o conteúdo.`;
- contraste claro entre leitura e assinatura.

## SHOULD MATCH
- 3 cards de artigos no desktop;
- newsletter com campo de e-mail e botão vermelho;
- divisória vertical entre artigos e newsletter;
- textura de mesa/livros/caderno para repertório.

## INTERPRET
- títulos e datas mostrados dentro do PNG se não existirem na base real;
- livros/capas fictícios;
- fotografia específica;
- qualquer artigo inventado pela geração.

## Regra crítica de conteúdo
Na implementação:
- artigos exibidos precisam existir;
- datas precisam ser verdadeiras;
- categorias precisam vir do sistema editorial;
- newsletter precisa integrar plataforma real.

## Mobile
- headline;
- repertório/foto;
- artigos em carrossel ou stack;
- newsletter em bloco próprio;
- fechamento editorial.

## Critério de aceite
O bloco deve comunicar:
**“Há pensamento acumulado aqui, não apenas oferta comercial.”**

---

# 10. BLOCO 09 — ENCERRAMENTO

**Mockup:** `Home - Bloco 9.png`  
**Copy:** `Ju_Ferreira_HOME_Copy_v1.0.md` → `BLOCO 9 — ENCERRAMENTO`

## Função narrativa
Fechar a Home recuperando agência, limites e duas grandes portas de continuidade.

## MUST MATCH
- fundo vinho profundo;
- headline muito grande:
  `Temos futuros para construir.`;
- `construir.` em vermelho mais vivo;
- texto claro;
- dois caminhos:
  `Para Organizações`
  `Para Pessoas`;
- CTA próprio para cada caminho;
- linha/espiral vermelha em escala grande;
- frase final:
  `Aquilo que existe não esgota aquilo que pode existir.`;
- sensação de encerramento, não de mais uma seção comercial.

## SHOULD MATCH
- headline ocupa grande porção da metade esquerda;
- espiral abstrata ocupa direita;
- divisória vertical entre as duas portas;
- CTA organizações preenchido;
- CTA pessoas outline;
- linha horizontal antes da frase final.

## INTERPRET
- geometria exata dos arcos;
- posição exata dos traços;
- altura exata do bloco.

## Mobile
- fundo escuro preservado;
- headline;
- corpo;
- `Para Organizações`;
- `Para Pessoas`;
- tese final;
- espiral como detalhe de fundo, sem competir com legibilidade.

## Critério de aceite
A Home precisa terminar com sensação de:
**possibilidade + participação + próximo movimento.**

---

# 11. PADRÕES EXTRAÍDOS DA HOME PARA O DESIGN SYSTEM

Estes padrões aparecem repetidamente e devem virar componentes/tokens, não soluções isoladas:

1. **GlobalHeader**
2. **DisplayHeadline**
3. **RedEmphasis**
4. **PrimaryPillButton**
5. **SecondaryPillButton**
6. **OrganicRedStroke**
7. **EditorialSplitSection**
8. **HandwrittenNote**
9. **SectionEyebrow**
10. **EditorialDivider**
11. **ProofMetric**
12. **EditorialCard**
13. **ArticleCard**
14. **NewsletterSignup**
15. **PhotoCollage**
16. **SpiralDiagram**
17. **DarkEditorialSection**

---

# 12. RISCOS DE IMPLEMENTAÇÃO DA HOME

## Risco 1 — copiar o mockup como imagem
A página precisa ser HTML/CSS real, responsiva e acessível.

## Risco 2 — tentar reproduzir cada rabisco literalmente
Os rabiscos devem vir de um pequeno kit de assets/SVGs reutilizáveis.

## Risco 3 — fonte errada
Uma serif parecida, mas não certa, altera drasticamente a percepção da marca.  
Tipografia precisa ser fechada antes de considerar a Golden Page aprovada.

## Risco 4 — fotografia fictícia
Nenhuma imagem gerada no mockup deve ser automaticamente promovida a asset final.

## Risco 5 — excesso de header
Há apenas um Header global.

## Risco 6 — cards demais
O visual aprovado é editorial e aberto. Evitar transformar seções em grades SaaS.

## Risco 7 — responsividade por redução
Mobile exige recomposição, não shrink.

## Risco 8 — inventar conteúdo editorial
Artigos, referências, logos e métricas devem ser reais.

---

# 13. DEFINITION OF DONE — GOLDEN PAGE HOME

A Home só poderá ser considerada aprovada quando:

- copy estiver 100% alinhada ao `.md`;
- Header global estiver correto;
- tipografia final estiver definida;
- paleta final estiver definida;
- fotos reais estiverem aplicadas ou placeholders explicitamente marcados;
- os 9 blocos preservarem a intenção visual aprovada;
- desktop estiver validado em pelo menos 1440px;
- tablet estiver validado;
- mobile estiver validado em 390px;
- navegação estiver funcional;
- CTAs estiverem roteados;
- contrastes estiverem acessíveis;
- não houver horizontal scroll;
- imagens estiverem otimizadas;
- layout não depender de texto embutido em imagem;
- Playwright conseguir capturar screenshots de referência;
- diferenças visuais relevantes estiverem documentadas/aprovadas.

---

# 14. STATUS

**HOME MANIFEST: APROVADO PARA USO NO CHECKPOINT C.**

Próximo documento:
**Visual Constitution / Design System v0.1**, extraído da Home e posteriormente validado contra as demais páginas.
