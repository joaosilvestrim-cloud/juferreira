# Registro de decisão: Contato (/contato)

Formato: direção editorial Site 2.0, §26. Arquivo interno.

| Campo | Registro |
|---|---|
| Página/rota | `/contato` (com `?rota=` e `?assunto=`, âncora `#formulario`) |
| Referência da implementação | branch `v2/home`, sem commit. Arquivos: `src/app/contato/page.tsx`, `src/app/contato/opengraph-image.tsx`, `src/components/sections/contato/ContatoBlocks.tsx`, `ContactForm.tsx`, `routes.ts` |
| Data da revisão | 2026-10-20 |
| Aprovado por Ju/Luiz | Pendente |
| Textos alterados em relação ao documento | Ver "Textos novos" abaixo. Os títulos e mensagens obrigatórios do §15 foram usados literalmente. |
| Ativos ainda pendentes | Canais oficiais confirmados no painel; canal de suporte EPIC247; revisão da confirmação automática por e-mail (ver Pendências) |
| Testes realizados | `npx tsc --noEmit` (sem erros nos arquivos de Contato/Privacidade); `npx eslint` nos arquivos da página (sem avisos) |
| Testes não realizados | Envio real do formulário (envia e-mails reais), `next build`, navegação no navegador, capturas desktop/mobile, leitor de tela, contraste medido |
| Próxima etapa autorizada | Revisão visual em preview pela coordenação; aprovação de Ju/Luiz |

Textos da v1 guardados integralmente em `docs/v2/cofre-contato.md`.

## Mapa de blocos: antes e depois

| Bloco v1 | Decisão | Destino v2 |
|---|---|---|
| Bloco 1 Hero ("Toda conversa começa com alguma coisa.", 3 parágrafos, faixa rosa, 2 botões, nota manuscrita, post-it) | COMPRIMIR | C01 dentro de `ContatoConversa`: "Vamos conversar." + um parágrafo. Foto do hero mantida (coluna esquerda, só desktop). Restante: COFRE |
| Bloco 2 Seis portas (6 cartões com foto, listas, CTAs, faixa "Não começamos pelo produto") | MOVER + COMPRIMIR | Viraram o seletor "Sobre o que você quer conversar?" no topo do formulário (C02). Textos dos cartões: COFRE. Âncora `#portas` deixou de existir (nenhum link interno apontava para ela) |
| Bloco 3 Formulário ("Agora, conte um pouco do contexto.", lista, post-it, foto, frase final) | PRESERVAR (formulário) + COMPRIMIR (moldura) | C02. Âncora `#formulario` agora está na seção que abre a página, com o título e o formulário juntos. Moldura textual: COFRE. Foto do formulário removida para não repetir retrato próximo |
| Bloco 4 Atalhos (4 cartões, "Clareza também pode economizar caminho", "Do outro lado tem gente") | MATAR (fundido) | Os atalhos são o próprio seletor de assunto. EPIC247 "conhecer/suporte" virou campo do assunto EPIC247. Textos: COFRE |
| Faixa escura "Se está claro, vamos direto." | MATAR | Excluída, conforme §15 |
| Bloco 5 Canais oficiais (5 cartões, "Quero falar/Quero acompanhar", placeholders "em breve", foto, post-it) | COMPRIMIR | C03 "Prefere outro caminho?": lista apenas os canais preenchidos no painel (e-mail, WhatsApp, LinkedIn perfil, LinkedIn página, Instagram). Sem nenhum preenchido, título e lista não aparecem. Placeholders "link oficial em breve" e "e-mail oficial em breve" removidos |
| Bloco 6 Fechamento longo (foto noturna, "Talvez essa conversa comece aqui", "E se pudesse ser diferente?", tríade de marca) | MATAR (substituído) | Fecho curto "Temos futuros para construir." ao fim de C03 (chave `contato/b1e7453163` preservada). Demais textos: COFRE |

## Formulário (C02): o que mudou

- Assuntos: Palestras e workshops; Organizações e projetos; Futuros aplicados; Parcerias e imprensa; EPIC247; Ainda não sei. Ids de rota inalterados (`palestras`, `organizacoes`, `futuros-aplicados`, `parcerias`, `epic247`, `nao-sei`).
- Campos comuns em todos os assuntos (antes "Ainda não sei" escondia Organização e Telefone): Nome*, E-mail*, Organização (opcional), Telefone/WhatsApp (opcional), "O que trouxe você até aqui?"*.
- Palestras: Data prevista, Local ou formato, Público, todos opcionais. Removidos: nome do evento (coberto por Organização), "Quem estará na sala?", "O que você gostaria que estivesse diferente...?" (obrigatório e repetia a mensagem), tema.
- Organizações: só "Você já imagina algum formato?" (opcional), porque muda o encaminhamento. Removidos 4 campos discursivos, 2 deles obrigatórios.
- Futuros aplicados: nenhum campo extra (antes 4, um obrigatório).
- Parcerias e imprensa: Tipo de convite e Data ou prazo, opcionais. Removidos veículo, link e "O que você gostaria que a Ju fizesse".
- EPIC247: "O que você precisa?" com "Quero conhecer" / "Preciso de suporte" (obrigatório). `?assunto=conhecer` e `?assunto=suporte` pré-selecionam; o valor antigo `antes-de-comprar` cai em "Quero conhecer"; `outro` não pré-seleciona.
- Botão: "Enviar mensagem".
- Sucesso (só com HTTP ok + `{ ok: true }` da API): "Mensagem enviada." / "Obrigado por contar o contexto. A equipe dará continuidade pelo contato informado." Foco vai para o título da confirmação.
- Falha: "Não foi possível enviar agora. Seus dados continuam no formulário para você tentar novamente." em `role="alert"`. Quando a API devolve um motivo específico (e-mail inválido, muitas mensagens seguidas), ele aparece logo abaixo. Os valores digitados ficam no estado e não se perdem.
- Removido "Revise apenas se quiser. Não precisa estar perfeito." e a promessa "Vamos ler o contexto antes de responder" (promessa de leitura humana não validada, §15).
- Nova nota de acessibilidade: "Campos marcados com * são obrigatórios."
- Preservados: honeypot `website`, payload compatível com o schema de `/api/contato` (origin "contato", rota, nome, email, organizacao, telefone, contexto, campos extras), `pageUrl` via `postJson`, link para `/privacidade`, `useSearchParams` dentro de `<Suspense>`, troca de assunto por `history.replaceState`.

## Textos novos (sem `tx()`, para o codemod)

- C01: "Vamos conversar." / "Conte o que você está tentando construir, resolver ou compreender. Se ainda não souber o formato, comece pelo contexto." (literal do §15)
- C02: legenda "Sobre o que você quer conversar?"; "Campos marcados com * são obrigatórios."; "O que trouxe você até aqui?"; dicas "Pode ser uma ideia, um desafio, uma pergunta ou um projeto ainda em formação." e, em "Ainda não sei", "Conte com suas palavras. Você não precisa saber em qual assunto isso se encaixa."; "Local ou formato"; "Público" / "Quem participa e quantas pessoas, se já souber."; "Se ainda não estiver definida, deixe em branco."; "O que você precisa?"; "Quero conhecer"; "Preciso de suporte"; "Enviar mensagem"; mensagens de sucesso e falha (literais do §15); link "Como tratamos seus dados".
- C03: "Prefere outro caminho?" (literal); textos de link "Abrir conversa no WhatsApp", "Perfil da Ju no LinkedIn", "Página Ju Ferreira no LinkedIn", "Ju Ferreira no Instagram"; rótulo "WhatsApp"; "(abre em nova aba)" para leitor de tela.
- Metadados: descrição padrão de SEO = texto de C01. Imagem de compartilhamento (`opengraph-image.tsx`): "Vamos conversar."; alt "Contato | Ju Ferreira" (sem travessão).

## Pendências

1. **Canais oficiais**: a página mostra o que estiver preenchido em /admin > Configurações. Ju/Luiz precisam confirmar que cada valor lá é o canal oficial (§15, §22). Se um campo estiver com valor provisório, ele aparece em público.
2. **Suporte EPIC247**: não existe configuração de canal de suporte específico. Hoje "Preciso de suporte" segue pelo formulário. Se houver canal próprio, criar uma configuração (ex.: `epic247_support_url`) e exibir junto da opção (mudança em arquivo compartilhado `src/lib/content.ts`).
3. **Confirmação automática por e-mail** (`src/lib/notify.ts`, compartilhado, quando `autoreply` = 1): assunto e texto ainda dizem "Recebemos. Obrigada por começar a conversa." e "Vamos ler o contexto antes de responder...". O §15 pede não prometer leitura humana sem validar a operação. Sugestão: assunto "Mensagem recebida" e corpo "Obrigado por contar o contexto. A equipe dará continuidade por este e-mail."
4. **Rótulos do painel** (`src/lib/admin.ts` ROUTE_LABEL) ainda usam os nomes v1 com "&" ("EPIC247 & Pessoas"...). Só afeta e-mail interno e painel; atualizar se quiser coerência. Os campos removidos continuam em FIELD_LABEL para mensagens antigas.
5. **Prazo de resposta**: nenhum foi prometido. Se Ju/Luiz quiserem informar, precisa ser um prazo real.
6. **Hidratação**: o formulário pré-renderizado (sem assunto) é trocado pelo formulário com `?rota=` ao hidratar. Algo digitado antes do JavaScript carregar pode se perder. Risco baixo, não testado.
7. A página "Para Organizações" tem formulário próprio (`OrgContactForm.tsx`, fora do meu escopo) com textos de sucesso diferentes.

## Testes não realizados

- Envio real ou com destinatário de teste (não autorizado; envia e-mails reais).
- Pré-seleção por `?rota=` e `?assunto=` em carregamento direto e atualização, conferida só por leitura de código.
- Rolagem da âncora `#formulario` com cabeçalho fixo (usa `scroll-mt-[var(--jf-header-h)]`).
- Desktop/mobile, teclado, leitor de tela, contraste.
- `next build`.
