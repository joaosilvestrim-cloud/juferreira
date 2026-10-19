# JU FERREIRA — VISUAL CONSTITUTION / DESIGN SYSTEM v0.1
## Checkpoint C — constituição visual extraída da Home e validada contra as demais páginas

**Data:** 25/09/2026  
**Status:** sistema visual provisório para calibragem da Golden Page  
**Base de análise:** 69 mockups de blocos + copies consolidadas + Site Master + Home Mockup Manifest v1.0  
**Validação transversal:** Ju, Futuros Humanos, Palestras & Workshops, Organizações, Pessoas, Ideias e Contato

---

# 0. O QUE ESTE DOCUMENTO É

Este arquivo transforma a linguagem visual aprovada nos mockups em um sistema utilizável por desenvolvimento.

Ele existe para impedir dois problemas:

1. construir cada bloco como se fosse um site diferente;
2. tentar copiar literalmente acidentes dos mockups gerados por IA.

Este documento é **v0.1**, não versão final.

A versão final do Design System só será congelada depois da implementação e aprovação da Home como **Golden Page**.

---

# 1. PRINCÍPIO VISUAL CENTRAL

A marca Ju Ferreira deve parecer:

> **editorial + humana + intelectual + viva + imperfeita + sofisticada**

Ela não deve parecer:

- SaaS;
- consultoria corporativa tradicional;
- site de coach;
- startup de IA;
- revista de moda;
- futurismo neon;
- apresentação em PowerPoint;
- template premium genérico.

A linguagem visual nasce do atrito entre:

**sofisticação editorial**  
e  
**presença humana imperfeita**.

É por isso que serifas refinadas convivem com:

- rabiscos;
- sublinhados;
- post-its;
- linhas orgânicas;
- fotografias reais;
- café;
- livros;
- papéis;
- mesas;
- palco;
- ambiente cotidiano.

---

# 2. SISTEMA DE CORES

Os valores abaixo foram derivados visualmente dos mockups e são **tokens provisórios**.

Eles serão refinados na Golden Page.

## 2.1 Base

```css
--jf-cream-50:  #FAF7F2;
--jf-cream-100: #F9F3EB;
--jf-cream-200: #EEE4D9;

--jf-ink-900:   #181411;
--jf-ink-800:   #221D19;
--jf-ink-700:   #332925;
```

### Uso

`cream-50 / cream-100`
- background principal;
- blocos claros;
- cards;
- áreas de respiro.

`ink-900`
- texto principal;
- navegação;
- bordas;
- fundos escuros alternativos.

---

## 2.2 Vermelho de marca

```css
--jf-red-500:   #B80C10;
--jf-red-600:   #A00808;
--jf-red-700:   #8F0808;
```

### Função

O vermelho não é apenas cor de botão.

Ele é:

- ênfase semântica;
- gesto;
- direção;
- tensão;
- interrupção;
- movimento;
- assinatura editorial.

### Regra

Evitar grandes áreas claras totalmente vermelhas.

O vermelho funciona melhor como:

- palavra;
- CTA;
- linha;
- sublinhado;
- seta;
- pequeno campo;
- contraste sobre fundo escuro.

---

## 2.3 Vinho profundo

```css
--jf-wine-900: #3B0302;
--jf-wine-800: #4B0807;
--jf-wine-700: #5A100D;
```

### Uso

- encerramentos;
- transições dramáticas;
- contato;
- blocos de tensão;
- momentos filosóficos.

Não usar em toda página.

O vinho deve funcionar como **mudança de estado**, não como fundo padrão.

---

## 2.4 Rosa editorial

```css
--jf-blush-100: #F5DDD7;
--jf-blush-200: #EDCDC5;
```

Uso restrito:

- tags;
- post-its;
- labels;
- pequenos planos de fundo;
- microcomponentes editoriais.

---

## 2.5 Regra de contraste

Texto longo:

- `ink-900` em `cream-50/100`;
- `cream-50` em `wine-900` ou `ink-900`.

Nunca depender apenas do vermelho para legibilidade.

---

# 3. TIPOGRAFIA

Ainda não definimos famílias finais.

O sistema exige três papéis tipográficos.

## 3.1 Display Serif

Uso:
- hero;
- headlines de seção;
- frases de encerramento;
- grandes perguntas.

Características:
- alto contraste;
- editorial;
- elegante;
- legível;
- personalidade sem excesso de ornamento.

### Direção

A fonte definitiva deve permitir:
- caixa alta;
- caixa baixa;
- headlines de 60–100px;
- itálico quando necessário;
- bom português;
- acentos completos.

---

## 3.2 Sans

Uso:
- body;
- navegação;
- botões;
- labels;
- formulários;
- cards;
- captions.

Características:
- limpa;
- humana;
- pouco tecnológica;
- excelente leitura em tamanhos pequenos;
- não excessivamente geométrica.

---

## 3.3 Handwritten / manuscrita

Uso:
- notas;
- pequenos comentários;
- post-its;
- apontamentos.

### Regra

Nunca:
- corpo;
- menu;
- longas frases;
- informação crítica;
- formulário.

A manuscrita é **voz lateral**, não voz principal.

---

# 4. ESCALA TIPOGRÁFICA PROVISÓRIA

O browser final usará `clamp()`.

## Desktop

```css
--text-xs:      12px;
--text-sm:      14px;
--text-base:    17px;
--text-lg:      20px;
--text-xl:      24px;

--display-sm:   44px;
--display-md:   58px;
--display-lg:   76px;
--display-xl:   92px;
```

## Mobile

Headlines devem cair aproximadamente para:

- 38–48px hero;
- 32–40px seção;
- 26–32px subheads.

Não reduzir mecanicamente.

A quebra de linha faz parte do design.

---

# 5. GRID

## 5.1 Desktop de referência

Os mockups foram criados próximos de `1672 × 941`.

A implementação não será dimensionada literalmente a 1672px.

Viewport visual de QA principal:

> **1440px**

Container recomendado:

```css
max-width: 1280px;
margin-inline: auto;
padding-inline: 32px;
```

Em telas maiores:

```css
padding-inline: 48px;
```

---

## 5.2 Sistema de colunas

Base:

> **12 colunas**

Uso comum:

- 5 / 7;
- 6 / 6;
- 4 / 8;
- 7 / 5.

Não forçar 12 colunas em composições orgânicas.

O grid é infraestrutura invisível, não aparência.

---

# 6. ESPAÇAMENTO

Base:

> **8px**

Tokens:

```css
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  24px;
--space-6:  32px;
--space-7:  48px;
--space-8:  64px;
--space-9:  96px;
--space-10: 128px;
```

## Seções

Desktop:

- vertical mínimo: 88px;
- padrão: 112–144px;
- grandes momentos: até 180px.

Mobile:

- 64–96px.

### Regra

Este site precisa de **respiro**.

Não resolver densidade diminuindo tudo.

Resolver por:
- hierarquia;
- agrupamento;
- sequência;
- espaço.

---

# 7. HEADER GLOBAL

## Anatomia

Esquerda:
- logo/assinatura Ju Ferreira.

Centro:
- Ju
- Futuros Humanos
- Palestras
- Para Organizações
- Para Pessoas
- Ideias

Direita:
- Contato.

## Desktop

- fundo claro ou transparente conforme bloco;
- altura aproximada 72–88px;
- CTA Contato vermelho;
- navegação pequena;
- sem mega-menu na v1.

## Dark mode contextual

Quando o header estiver sobre seção escura:
- logo claro;
- nav clara;
- CTA permanece vermelho.

## Mobile

- logo;
- botão menu;
- CTA pode migrar para drawer.

Menu fullscreen ou drawer simples.

Sem navegação comprimida horizontalmente.

---

# 8. BOTÕES

## 8.1 Primary Pill

Visual:
- fundo vermelho;
- texto off-white;
- border-radius alto;
- seta simples.

Provisório:

```css
height: 48–52px;
padding-inline: 24–30px;
border-radius: 999px;
```

Hover:
- escurecer levemente;
- seta desloca 2–4px;
- nada chamativo.

---

## 8.2 Secondary Pill

- fundo transparente/off-white;
- border 1px;
- texto ink;
- hover suave.

---

## Regra

No máximo:
- 1 CTA primário;
- 1 CTA secundário

por unidade narrativa principal.

---

# 9. CARDS

Os mockups confirmam que cards existem, mas **não são o idioma principal**.

## Card permitido

- editorial;
- borda fina;
- fundo quase igual ao background;
- raio discreto;
- pouco/no shadow.

## Evitar

- cards com sombra SaaS;
- cada informação dentro de caixa;
- dashboards;
- icon cards genéricos.

Tokens provisórios:

```css
--radius-sm: 12px;
--radius-md: 18px;
--radius-lg: 24px;
```

---

# 10. DIVISORES

Preferência:

- linha fina;
- tinta/ink com baixa opacidade;
- vertical ou horizontal.

O divisor organiza sem virar decoração.

---

# 11. GESTOS VERMELHOS

Família visual:

- underline;
- arrow;
- circle;
- partial circle;
- curve;
- spiral;
- connecting line;
- strike-through ocasional.

## Implementação

Criar biblioteca SVG própria:

```text
stroke-underline-01.svg
stroke-arrow-01.svg
stroke-circle-01.svg
stroke-curve-01.svg
stroke-spiral-01.svg
```

Não desenhar novo SVG arbitrário em cada componente.

### Variação

Pode haver:
- rotação;
- escala;
- crop;
- stroke width pequena.

---

# 12. ESPIRAL

A Espiral é elemento central.

## MUST

- assimétrica;
- imperfeita;
- orgânica;
- com sensação de percurso;
- não perfeitamente concêntrica.

## Pode existir em 3 funções

### Conceptual
Com os quatro movimentos.

### Decorative
Grande, cortada, abstrata.

### Connector
Linha que atravessa uma composição.

## Proibição

Não transformar em:
- loading;
- círculo perfeito;
- ícone tech;
- logo substituto.

---

# 13. FOTOGRAFIA

## Direção

A fotografia deve trazer:
- corpo;
- presença;
- contexto;
- imperfeição;
- proximidade.

Ambientes recorrentes:
- mesa;
- livros;
- café;
- notebook;
- reunião;
- palco;
- casa/escritório;
- natureza urbana.

## Fotografia da Ju

Prioridade:
1. fotos reais existentes;
2. novo ensaio;
3. imagem licenciada para contexto sem Ju.

Não usar imagens geradas como se fossem registro real.

## Tratamento

- quente;
- contraste suave;
- sem filtros instagramáveis;
- sem recorte corporativo frio.

---

# 14. COLAGEM EDITORIAL

Aparece principalmente em:
- Ju;
- prova/hands-on;
- Pessoas;
- Ideias;
- Organizações.

Componentes:
- fotos;
- papel;
- notas;
- fita;
- rabisco;
- recorte;
- sobreposição.

## Regra

A colagem deve parecer:
> **material de pensamento**

e não:
> scrapbook decorativo.

---

# 15. NOTAS MANUSCRITAS

Anatomia:
- frase curta;
- fundo papel/blush/off-white;
- pequena rotação;
- underline/arrow opcional.

Máximo sugerido:
- 1–2 notas de destaque por viewport.

Não colocar notas em toda seção.

---

# 16. LIGHT / DARK RHYTHM

A arquitetura visual alterna estados.

Padrão predominante:

`LIGHT → LIGHT → DARK → LIGHT → LIGHT → ... → DARK`

Dark sections têm função narrativa:
- tensão;
- síntese;
- fechamento;
- mudança de estado.

Nunca alternar escuro/claro apenas por estética.

---

# 17. TIPOS DE SEÇÃO

A análise transversal dos mockups revela 8 famílias estruturais.

## A. Editorial Hero
Headline + body + imagem + CTA.

## B. Editorial Split
Texto 40–55% / imagem 45–60%.

## C. Thesis Section
Headline + conceito + diagrama.

## D. Card Territory Section
3–5 territórios / portas / formatos.

## E. Proof Section
Números + história + logos + fotos.

## F. Collage Section
Narrativa com fotos/notas/objetos.

## G. Conversion Section
Texto + CTA / formulário.

## H. Closing Section
Dark + frase forte + pouco conteúdo.

Essas famílias devem virar componentes flexíveis, não templates rígidos.

---

# 18. COMPONENTES DO DESIGN SYSTEM v0.1

## Global

- `SiteHeader`
- `MobileMenu`
- `SiteFooter`
- `Container`
- `Section`

## Typography

- `Eyebrow`
- `DisplayHeadline`
- `SectionHeadline`
- `BodyCopy`
- `PullQuote`
- `HandwrittenNote`

## Actions

- `PrimaryButton`
- `SecondaryButton`
- `TextLink`

## Visual

- `OrganicStroke`
- `Spiral`
- `PhotoFrame`
- `PhotoCollage`
- `EditorialDivider`

## Content

- `TerritoryCard`
- `ProofMetric`
- `ArticleCard`
- `ReferenceCard`
- `PathwayRow`
- `QuoteBlock`
- `NewsletterSignup`

## Forms

- `TextInput`
- `Select`
- `Textarea`
- `ChoiceCard`
- `ContactForm`

---

# 19. RESPONSIVE CONSTITUTION

## Breakpoints provisórios

```css
--bp-mobile:  480px;
--bp-tablet:  768px;
--bp-desktop: 1024px;
--bp-wide:    1440px;
```

Implementação pode usar breakpoints do framework, mas a lógica deve respeitar estes estados.

---

## Regra 1 — Mobile é recomposição

Nunca:

> desktop reduzido.

Sempre:

> narrativa recomposta.

---

## Regra 2 — Prioridade narrativa

Ordem padrão mobile:

1. eyebrow;
2. headline;
3. body;
4. CTA;
5. imagem;
6. conteúdo secundário.

Pode mudar quando a imagem for essencial para compreensão.

---

## Regra 3 — Colunas

Desktop 3–4 colunas:
→ tablet 2
→ mobile 1.

---

## Regra 4 — Colagens

Desktop:
- livres/assimétricas.

Mobile:
- 1–2 imagens grandes;
- detalhes secundários removidos;
- notas reposicionadas.

---

## Regra 5 — Linhas orgânicas

Não preservar geometria desktop.

No mobile:
- trocar asset;
- rotacionar;
- cortar;
- simplificar;
- remover se prejudicar leitura.

---

## Regra 6 — Headline

Nunca diminuir tanto que perca protagonismo.

Se necessário:
- mais altura;
- mais linhas;
- menos elementos ao redor.

---

# 20. ACESSIBILIDADE

O visual editorial não pode sacrificar usabilidade.

Obrigatório:

- contraste AA;
- foco visível;
- keyboard navigation;
- alt text real;
- formulário rotulado;
- target mínimo 44×44;
- respeitar `prefers-reduced-motion`;
- texto não rasterizado;
- SVG decorativo como aria-hidden;
- headings semanticamente hierárquicos.

---

# 21. MOVIMENTO / ANIMAÇÃO

A marca pede movimento orgânico, não espetáculo.

## Permitido

- fade/slide curto;
- linha desenhando;
- sublinhado entrando;
- imagem revelada;
- pequeno parallax;
- hover de seta;
- espiral surgindo gradualmente.

## Evitar

- scroll-jacking;
- texto voando;
- 3D;
- partículas;
- cursor customizado pesado;
- animação contínua;
- transições que atrasam leitura.

## Duração

Preferência:
- 180–500ms para UI;
- até 900ms para gesto editorial.

---

# 22. FORMULÁRIOS

Devem parecer parte do site, não embed de CRM.

Visual:
- campos amplos;
- borda fina;
- labels claras;
- fundo cream/branco;
- foco vermelho/vinho.

Contato adaptativo:
- mudança de campos sem recarregar página;
- mostrar apenas o necessário;
- preservar respostas ao trocar rota.

---

# 23. FOOTER

Minimalista.

Inclui:
- Ju Ferreira;
- navegação;
- LinkedIn;
- Instagram;
- privacidade;
- cookies/termos quando necessários;
- copyright.

Não:
- manifesto;
- logos de todos os negócios;
- mapa do ecossistema;
- CTA gigantesco depois do fechamento.

---

# 24. VALIDAÇÃO CONTRA AS DEMAIS PÁGINAS

A Home não foi usada isoladamente.

Os padrões foram contrastados com mockups representativos de:

## Ju
Confirma:
- fotografia humana forte;
- colagem editorial;
- notas manuscritas;
- large serif;
- prova sem currículo tradicional.

## Futuros Humanos
Confirma:
- dark closing;
- Espiral como elemento central;
- vermelho semântico;
- diagramas editoriais.

## Palestras
Confirma:
- palco;
- mistura comercial/editorial;
- cards leves;
- formulário contextual.

## Organizações
Confirma:
- territórios em colunas;
- diagramas e anotações;
- formulários;
- dark conversion blocks.

## Pessoas
Confirma:
- colagem mais íntima;
- portas/produtos em cards leves;
- dark closing;
- forte uso de notas.

## Ideias
Confirma:
- estética de revista;
- artigos;
- repertório;
- livros;
- newsletter;
- densidade editorial.

## Contato
Confirma:
- formulário como componente premium;
- shortcut cards;
- vinho como fechamento;
- poucas cores;
- clareza operacional.

### Conclusão

**A Home é representativa o suficiente para funcionar como Golden Page.**

Nenhuma das demais páginas exige hoje um segundo Design System.

Elas exigem apenas extensões do mesmo sistema.

---

# 25. TOKENS CSS PROVISÓRIOS

```css
:root {
  --jf-cream-50: #FAF7F2;
  --jf-cream-100: #F9F3EB;
  --jf-cream-200: #EEE4D9;

  --jf-ink-900: #181411;
  --jf-ink-800: #221D19;
  --jf-ink-700: #332925;

  --jf-red-500: #B80C10;
  --jf-red-600: #A00808;
  --jf-red-700: #8F0808;

  --jf-wine-900: #3B0302;
  --jf-wine-800: #4B0807;

  --jf-blush-100: #F5DDD7;
  --jf-blush-200: #EDCDC5;

  --jf-radius-sm: 12px;
  --jf-radius-md: 18px;
  --jf-radius-lg: 24px;
  --jf-radius-pill: 999px;

  --jf-space-1: 4px;
  --jf-space-2: 8px;
  --jf-space-3: 12px;
  --jf-space-4: 16px;
  --jf-space-5: 24px;
  --jf-space-6: 32px;
  --jf-space-7: 48px;
  --jf-space-8: 64px;
  --jf-space-9: 96px;
  --jf-space-10: 128px;

  --jf-container: 1280px;
}
```

**Não tratar estes tokens como definitivos antes da Golden Page.**

---

# 26. O QUE AINDA PRECISA SER FECHADO ANTES DO DESIGN SYSTEM v1.0

1. Família serif definitiva.
2. Família sans definitiva.
3. Solução manuscrita definitiva.
4. Arquivos vetoriais oficiais do logo.
5. Kit SVG de strokes.
6. SVG oficial da Espiral.
7. Paleta após teste real no browser.
8. Grid após Home implementada.
9. Fotos reais selecionadas.
10. Motion após protótipo.
11. Versão mobile validada em browser.

---

# 27. DECISÃO DO CHECKPOINT C

## APROVADO PARA AVANÇAR

A linguagem visual dos mockups possui consistência suficiente para virar um único sistema.

Não precisamos criar uma identidade nova.

Não precisamos criar 8 design systems.

Não precisamos redesenhar as páginas antes de codificar.

Precisamos:

1. preparar o Development Brief;
2. organizar assets;
3. iniciar a Golden Page;
4. calibrar o Design System no browser.

---

# 28. PRÓXIMO PASSO

**CHECKPOINT D — DEVELOPMENT BRIEF v1.0**

O Development Brief será o contrato operacional do Codex.

Ele definirá:

- stack;
- estrutura do repositório;
- regras de código;
- fontes de verdade;
- ordem de leitura;
- proibições;
- processo bloco por bloco;
- QA visual;
- Playwright;
- Git;
- branches;
- commits;
- responsividade;
- assets;
- conteúdo;
- acessibilidade;
- Definition of Done;
- regra de aprovação humana.

Somente depois do Checkpoint D o ambiente técnico será criado.

---

# FIM — VISUAL CONSTITUTION / DESIGN SYSTEM v0.1
