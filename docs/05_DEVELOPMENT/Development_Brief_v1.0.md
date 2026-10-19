# JU FERREIRA — DEVELOPMENT BRIEF v1.0
## Checkpoint D — contrato operacional do desenvolvimento

**Data:** 25/09/2026  
**Status:** pronto para criação do ambiente técnico após Package Lock  
**Projeto:** Hub / Site Ju Ferreira  
**Owner de negócio e decisão final:** Ju Ferreira / Luiz  
**Liderança estratégica e de produto:** ChatGPT  
**Agente principal de desenvolvimento:** Codex  
**Objetivo:** transformar os mockups e copies aprovados em um site real, responsivo, acessível, performático e fiel à identidade Ju Ferreira.

---

# 0. REGRA-MÃE

O Codex não está sendo contratado para “inventar um site”.

O site já foi estrategicamente desenhado.

O papel do Codex é:

> **interpretar com precisão, implementar com qualidade e validar contra as referências aprovadas.**

Ele NÃO deve:

- redesenhar a arquitetura;
- reescrever a copy;
- simplificar conceitos;
- trocar componentes por padrões genéricos;
- “melhorar” a identidade por preferência própria;
- inventar conteúdo;
- inventar artigos;
- inventar depoimentos;
- inventar números;
- inventar logos;
- inventar histórias;
- transformar o site em SaaS;
- transformar o site em site de coach;
- transformar o site em portfólio de futurista-tech.

---

# 1. FONTES DE VERDADE — ORDEM OBRIGATÓRIA

Antes de escrever qualquer código, o Codex deve ler e respeitar esta ordem:

1. `00_MASTER/Ju_Ferreira_Site_Master_v1.0.md`
2. `00_MASTER/Ju_Ferreira_Development_Brief_v1.0.md`
3. `04_DESIGN_SYSTEM/Ju_Ferreira_Visual_Constitution_Design_System_v0.1.md`
4. `05_DEVELOPMENT/Ju_Ferreira_HOME_Mockup_Manifest_v1.0.md`
5. copy consolidada da página em implementação
6. mockup aprovado do bloco correspondente
7. demais documentos canônicos do projeto, quando aplicáveis

Em caso de conflito:

> **copy `.md` vence texto rasterizado do PNG.**

> **Site Master vence interpretação espontânea do desenvolvedor.**

> **Mockup define intenção visual; Design System define consistência global.**

---

# 2. ESCOPO DA V1

Páginas:

1. Home
2. Ju
3. Futuros Humanos
4. Palestras & Workshops
5. Para Organizações
6. Para Pessoas
7. Ideias
8. Contato

Total de blocos visuais aprovados:

> **69**

A Home será a **Golden Page**.

Nenhuma página interna deve ser desenvolvida em escala antes da aprovação da Home e congelamento do Design System v1.0.

---

# 3. STACK TÉCNICA

## 3.1 Core

Usar:

- **Next.js — versão estável atual**
- **App Router**
- **React**
- **TypeScript**
- **Node.js LTS**
- **Git**
- **GitHub**

## 3.2 Styling

Usar:

- **Tailwind CSS** para layout, responsividade e utilitários;
- **CSS Custom Properties** para tokens da marca;
- CSS dedicado para:
  - typography fluida;
  - strokes;
  - colagens;
  - composições editoriais;
  - casos em que utilitários prejudiquem legibilidade.

Regra:

> Tailwind é ferramenta, não linguagem visual.

Não converter o projeto em “template Tailwind”.

---

## 3.3 Animação

Na Golden Page inicial:

- preferir CSS nativo;
- `prefers-reduced-motion` obrigatório;
- não instalar biblioteca de animação antes de existir necessidade real.

Se depois houver razão concreta para animações coordenadas:

- avaliar `Motion` / solução equivalente estável;
- documentar por que a dependência foi adicionada.

---

## 3.4 Ícones

Não depender de biblioteca genérica para elementos de identidade.

Permitido para UI utilitária discreta.

Para elementos autorais:
- SVG próprio;
- assets oficiais;
- strokes do Design System.

---

## 3.5 Forms

Na fase de formulários:

- React Hook Form ou solução equivalente madura;
- Zod ou equivalente para validação;
- acessibilidade;
- proteção anti-spam;
- feedback de erro e sucesso.

Não instalar ainda durante o primeiro bloco da Home.

---

## 3.6 Conteúdo editorial

Na primeira fase:

- páginas institucionais com conteúdo local estruturado;
- artigos reais podem ser mantidos em Markdown/MDX ou camada equivalente.

A decisão de CMS será feita **depois da Golden Page**, considerando:
- frequência de publicação;
- autonomia editorial desejada;
- fluxo de aprovação;
- custo operacional.

Não escolher CMS antecipadamente.

---

# 4. HOSPEDAGEM

Destino preferencial:

> **Vercel**

Motivos:
- integração natural com Next.js;
- previews por branch/PR;
- deploy simples;
- boa experiência para revisão visual;
- rollback;
- performance.

A decisão final de domínio e produção ocorre apenas na Fase 7.

Não comprar serviço extra antes de necessidade.

---

# 5. REPOSITÓRIO

Nome recomendado:

```text
ju-ferreira-site
```

Estrutura inicial:

```text
ju-ferreira-site/
│
├── docs/
│   ├── master/
│   ├── design-system/
│   ├── manifests/
│   └── development/
│
├── references/
│   ├── mockups/
│   │   ├── home/
│   │   ├── ju/
│   │   ├── futuros-humanos/
│   │   ├── palestras-workshops/
│   │   ├── organizacoes/
│   │   ├── pessoas/
│   │   ├── ideias/
│   │   └── contato/
│   └── contact-sheets/
│
├── content/
│   ├── home/
│   ├── ju/
│   ├── futuros-humanos/
│   ├── palestras-workshops/
│   ├── organizacoes/
│   ├── pessoas/
│   ├── ideias/
│   └── contato/
│
├── public/
│   ├── brand/
│   ├── images/
│   ├── photography/
│   ├── strokes/
│   ├── spiral/
│   └── icons/
│
├── src/
│   ├── app/
│   ├── components/
│   │   ├── global/
│   │   ├── ui/
│   │   ├── editorial/
│   │   ├── sections/
│   │   └── forms/
│   ├── lib/
│   ├── styles/
│   └── data/
│
├── tests/
│   ├── e2e/
│   ├── visual/
│   └── accessibility/
│
└── README.md
```

---

# 6. NOMENCLATURA

Filesystem e código:

- ASCII;
- kebab-case para arquivos/pastas;
- PascalCase para componentes React.

Exemplos:

```text
futuros-humanos
palestras-workshops
organizacoes
HomeHero.tsx
EditorialSplit.tsx
OrganicStroke.tsx
```

Nunca usar espaços ou acentos em paths técnicos.

---

# 7. GIT — REGRA DE SEGURANÇA

Branch principal:

```text
main
```

Nunca desenvolver diretamente em `main`.

Durante a Golden Page:

```text
feature/home-foundation
feature/home-block-01
feature/home-block-02
...
```

Ou worktrees equivalentes, conforme workflow do Codex.

Cada unidade aprovada deve gerar commit claro.

Exemplos:

```text
feat(home): implement hero block
fix(home): align hero spacing with approved mockup
feat(design-system): add organic stroke primitives
```

Não usar commits como:

```text
update
fix
stuff
changes
```

---

# 8. REGRA DE MUDANÇA

Antes de alterar código existente, o Codex deve avaliar:

1. o que muda;
2. onde muda;
3. o que pode quebrar;
4. como validar.

Não fazer refactor amplo “aproveitando a oportunidade” durante ajuste visual de um bloco.

Mudanças arquiteturais precisam ser propostas antes.

---

# 9. ORDEM DE IMPLEMENTAÇÃO

## Fase Golden Page

### Passo 1
Foundation:
- projeto;
- tokens;
- container;
- typography placeholders;
- header;
- footer mínimo;
- Playwright;
- screenshot tooling.

### Passo 2
Home — Bloco 01.

### Passo 3
QA do Bloco 01.

### Passo 4
Home — Bloco 02.

Repetir.

Não implementar os 9 blocos numa única operação inicial.

---

# 10. PROTOCOLO POR BLOCO

Antes de codificar cada bloco, o Codex deve responder com:

## A. Compreensão
- função narrativa;
- composição;
- conteúdo;
- CTA;
- elementos MUST MATCH.

## B. Plano
- componentes reutilizáveis;
- assets necessários;
- comportamento desktop;
- comportamento mobile;
- riscos.

## C. Pendências
Listar qualquer informação ausente.

Somente depois da aprovação:

> implementar.

---

# 11. GOLDEN PAGE — HOME

A Home será usada para calibrar:

- grid;
- type scale;
- cores;
- button system;
- strokes;
- fotografia;
- dark mode contextual;
- responsive behavior;
- section rhythm;
- animation;
- accessibility.

Após Home aprovada:

> criar `Design System v1.0`.

Só depois iniciar páginas internas em escala.

---

# 12. VISUAL QA

Obrigatório usar Playwright ou ferramenta equivalente.

Viewports mínimos:

```text
Desktop: 1440 × 1000
Tablet:  768 × 1024
Mobile:  390 × 844
```

Adicionar também verificação ampla quando necessário:

```text
Wide: 1728 × 1117
```

---

# 13. SCREENSHOT LOOP

Para cada bloco:

1. implementar;
2. iniciar servidor local;
3. abrir viewport de referência;
4. capturar screenshot;
5. comparar com mockup;
6. listar diferenças;
7. corrigir;
8. repetir.

Não declarar bloco concluído apenas porque “parece bom”.

---

# 14. COMPARAÇÃO VISUAL

A comparação deve observar:

- hierarchy;
- line breaks;
- whitespace;
- relative widths;
- image crop;
- image-to-text ratio;
- CTA placement;
- color weight;
- section height;
- visual rhythm;
- alignment;
- density.

Não perseguir literalmente:

- ruído do PNG;
- imperfeições de IA;
- fotografia fictícia;
- coordenadas exatas de rabisco;
- texto embutido na imagem.

---

# 15. RESPONSIVIDADE

Mobile não é desktop comprimido.

Para cada bloco documentar:

```text
desktop_structure
tablet_transition
mobile_structure
```

A versão mobile deve preservar:

- função;
- hierarquia;
- emoção;
- CTA;
- leitura.

Ela pode alterar:

- ordem;
- tamanho;
- crop;
- composição;
- posição de strokes;
- quantidade de decoração.

---

# 16. COPY

Regra absoluta:

> **Não reescrever copy sem solicitação humana explícita.**

O Codex pode alertar:

- overflow;
- quebra ruim;
- inconsistência técnica;
- conteúdo ausente.

Mas não pode “melhorar” a frase por conta própria.

Se copy e layout entrarem em conflito:

> adaptar layout primeiro.

---

# 17. ASSETS

Categorias:

## APPROVED REAL
Pode ir para produção.

## PLACEHOLDER
Usar temporariamente e marcar.

## REFERENCE ONLY
Existe apenas no mockup.

## TO PRODUCE
Precisa ser criado/fotografado/desenhado.

Nunca transformar asset `REFERENCE ONLY` em produção sem aprovação.

---

# 18. FOTOGRAFIA

Quando a foto real equivalente ainda não existir:

- usar placeholder neutro;
- manter proporção correta;
- preservar espaço;
- registrar em `PENDING_ASSETS.md`.

Não usar uma pessoa gerada no mockup como Ju Ferreira em produção.

---

# 19. FONTES

Não baixar fonte paga ou proprietária sem licença.

Antes de escolher:
- confirmar web licensing;
- performance;
- português completo;
- pesos necessários;
- itálico;
- variável quando útil.

Durante foundation pode usar fallback temporário claramente marcado.

Golden Page não é aprovada com fallback temporário.

---

# 20. SEO

A implementação deve prever desde o início:

- headings semânticos;
- metadata por página;
- Open Graph;
- canonical;
- sitemap;
- robots;
- URLs limpas.

SEO final será configurado em fase própria.

Não sacrificar linguagem da marca por keyword stuffing.

---

# 21. ACESSIBILIDADE

Obrigatório:

- semantic HTML;
- landmarks;
- ordem lógica de heading;
- keyboard navigation;
- focus state;
- AA contrast;
- alt text;
- forms com label;
- aria apenas quando necessário;
- reduced motion;
- skip link;
- toque mínimo 44px.

Usar teste automatizado quando possível.

---

# 22. PERFORMANCE

Targets orientadores para produção:

- Lighthouse Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Não otimizar métricas sacrificando identidade.

Prioridades:
- imagens responsivas;
- `next/image`;
- font loading;
- lazy loading;
- JS mínimo;
- SVG leve;
- evitar dependências desnecessárias.

---

# 23. JAVASCRIPT

Princípio:

> use JavaScript onde comportamento exige JavaScript.

Não transformar conteúdo editorial estático em client component sem necessidade.

Preferir:
- Server Components;
- CSS;
- HTML semântico.

Client Components apenas para:
- menu;
- forms;
- interação;
- motion que exigir estado;
- widgets.

---

# 24. DEPENDÊNCIAS

Antes de adicionar pacote externo, perguntar:

1. precisamos mesmo?
2. CSS/React nativo resolve?
3. o pacote é mantido?
4. impacto no bundle?
5. lock-in?

Não adicionar bibliotecas “por conveniência”.

---

# 25. COMPONENTIZAÇÃO

Evitar dois extremos:

## Extremo 1
Copiar e colar seções inteiras.

## Extremo 2
Criar abstração genérica incompreensível para cada detalhe.

Criar componente quando houver:
- repetição;
- regra global;
- identidade;
- comportamento reutilizável.

---

# 26. DESIGN TOKENS

Tokens devem viver centralizados.

Exemplo:

```css
:root {
  --jf-color-bg: ...;
  --jf-color-ink: ...;
  --jf-color-red: ...;
  --jf-space-section: ...;
}
```

Não espalhar valores arbitrários sem razão.

---

# 27. DADOS E CONTEÚDO

Conteúdo repetitivo deve ser estruturado.

Exemplo:

```ts
const pathways = [...]
const articles = [...]
const territories = [...]
```

Não repetir markup quando a estrutura é claramente uma lista de dados.

---

# 28. IDEIAS / ARTIGOS

Não publicar conteúdo fictício.

Se não houver artigo real:

- placeholder editorial claramente marcado em desenvolvimento;
- ocultar em produção até conteúdo aprovado.

A página não pode parecer ter arquivo editorial que não existe.

---

# 29. CONTATO

O formulário final deverá ser adaptativo.

Mas na fase Golden Page:
- apenas CTA;
- nenhum backend obrigatório.

Integração real será feita na fase de funcionalidades.

---

# 30. INTEGRAÇÕES

Não conectar serviços em produção durante construção visual.

Manter interfaces desacopladas.

Futuras integrações possíveis:

- newsletter;
- e-mail;
- CRM;
- analytics;
- LinkedIn Insight Tag;
- forms;
- anti-spam.

Todas serão decididas separadamente.

---

# 31. SEGREDOS

Nunca:
- hardcode API key;
- commitar `.env`;
- colocar token em client code;
- enviar segredo em chat/log.

Usar:
- `.env.local`;
- Vercel Environment Variables;
- `.env.example` sem valores.

---

# 32. SEGURANÇA

Para formulários e endpoints:

- validar servidor;
- sanitizar quando necessário;
- rate limiting / anti-spam;
- não confiar em input client;
- não expor stack traces.

---

# 33. BROWSER SUPPORT

Suportar versões modernas de:

- Chrome;
- Safari;
- Firefox;
- Edge.

Prioridade especial:
- Safari desktop;
- Safari iPhone.

---

# 34. QA DE CONTEÚDO

Antes de aprovar página:

- comparar copy com `.md`;
- revisar acentos;
- revisar pontuação;
- revisar links;
- revisar CTA;
- conferir palavras protegidas;
- conferir nomenclatura dos ecossistemas.

---

# 35. NÃO FAZER

O Codex NÃO deve:

- começar pelas 8 páginas;
- criar template pronto;
- usar lorem ipsum;
- inventar conteúdo;
- substituir copy;
- usar imagens fictícias como finais;
- adicionar gradientes neon;
- adicionar chat widget;
- adicionar dark mode toggle;
- adicionar carrossel porque “fica moderno”;
- adicionar animação por padrão;
- criar dashboards;
- adicionar ícones genéricos em tudo;
- usar emojis na UI;
- incluir AI badges;
- reformular branding;
- trocar arquitetura de navegação;
- adicionar páginas não aprovadas.

---

# 36. REGRA DE STOP

Se encontrar ambiguidade estratégica:

> **PARAR.**

Não escolher sozinho.

Produzir:

```text
DECISION REQUIRED
Context:
Options:
Impact:
Recommendation:
```

A decisão volta para liderança humana.

---

# 37. REGRA DE APROVAÇÃO

O Codex não aprova o próprio trabalho.

Fluxo:

> Codex implementa  
> → Playwright captura  
> → liderança revisa  
> → ajustes  
> → `APPROVED`

Só então próximo bloco.

---

# 38. DEFINITION OF DONE — BLOCO

Um bloco está pronto quando:

- copy correta;
- estrutura semântica correta;
- desktop comparado;
- mobile comparado;
- tablet funcional;
- imagem otimizada;
- sem overflow;
- sem console error;
- accessibility básica passa;
- links funcionam;
- screenshot salvo;
- diferenças conhecidas documentadas;
- aprovação humana registrada.

---

# 39. DEFINITION OF DONE — PÁGINA

Uma página está pronta quando:

- todos blocos aprovados;
- ritmo entre blocos aprovado;
- header/footer corretos;
- metadata;
- links;
- mobile;
- accessibility;
- performance;
- visual regression sem quebra;
- conteúdo real ou pendência explícita.

---

# 40. DEFINITION OF DONE — SITE V1

Antes de produção:

- 8 páginas aprovadas;
- design system v1.0;
- assets finais;
- fotos finais;
- forms;
- analytics;
- SEO;
- LGPD;
- 404;
- redirects, se aplicável;
- sitemap;
- robots;
- OG;
- accessibility;
- cross-browser;
- performance;
- backup/versionamento;
- domínio;
- produção;
- QA pós-deploy.

---

# 41. RELAÇÃO COM CHATGPT

O usuário não deve precisar tomar decisões técnicas sozinho.

Quando Codex:
- apresentar dúvida técnica relevante;
- sugerir mudança de arquitetura;
- propor pacote;
- encontrar conflito;
- precisar de decisão de produto;

o usuário deve trazer a questão para o ChatGPT.

ChatGPT atua como:
- Product Lead;
- Design Lead;
- QA Lead;
- tradutor técnico;
- gestor do Codex.

---

# 42. PRIMEIRO PROMPT DO CODEX

**NÃO EXECUTAR AINDA.**

O primeiro prompt será entregue apenas depois do Package Lock.

Ele NÃO pedirá código.

Sua função será:

1. ler todo o pacote;
2. provar compreensão;
3. auditar o plano;
4. identificar pendências;
5. não alterar arquivos.

Somente após essa leitura aprovaremos a criação do projeto.

---

# 43. CHECKPOINT D — STATUS

## APROVADO

O projeto agora possui:

- Site Master;
- inventário;
- mockup manifest inicial;
- Home Mockup Manifest;
- Visual Constitution;
- Development Brief.

Ainda falta:

> **CHECKPOINT E — DEVELOPMENT PACKAGE LOCK v1.0**

O Package Lock:
- organiza os documentos;
- normaliza nomes;
- remove lixo do macOS;
- monta estrutura final;
- incorpora referências;
- gera README de handoff;
- cria lista de assets pendentes;
- fecha a versão que será entregue ao Codex.

Somente depois:

> **abrir Codex.**

---

# FIM — JU FERREIRA DEVELOPMENT BRIEF v1.0
