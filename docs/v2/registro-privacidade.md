# Registro de decisão: Privacidade (/privacidade)

Formato: direção editorial Site 2.0, §26 e §18. Arquivo interno. **Esta página não é uma política jurídica validada.** Ela descreve só o que foi conferido no código em 2026-10-20.

| Campo | Registro |
|---|---|
| Página/rota | `/privacidade` (âncora `#cookies` usada no rodapé, preservada) |
| Referência da implementação | branch `v2/home`, sem commit. Arquivo: `src/app/privacidade/page.tsx` |
| Data da revisão | 2026-10-20 |
| Aprovado por Ju/Luiz | Pendente. Precisa também de revisão jurídica (§18) |
| Textos alterados | Página reescrita (ver abaixo) |
| Ativos ainda pendentes | Ver "A validar" |
| Testes realizados | `npx tsc --noEmit` e `npx eslint` sem erros no arquivo |
| Testes não realizados | Renderização no navegador, `next build`, link de descadastro real |
| Próxima etapa autorizada | Revisão de Ju/Luiz e de quem cuida da parte jurídica |

## Texto v1 (cofre)

- Título: "Política de Privacidade"
- "Esta página está em elaboração. A política completa, em conformidade com a Lei Geral de Proteção de Dados (LGPD), será publicada antes do lançamento do site."
- "Os dados enviados pelos formulários são usados apenas para responder à conversa iniciada por você e não são compartilhados com terceiros para fins comerciais."
- Cookies: "As regras de uso de cookies e ferramentas de medição serão descritas aqui assim que forem definidas."
- Botão: "Começar a conversa"

## Blocos: antes e depois

| v1 | Decisão | v2 |
|---|---|---|
| "Está em elaboração... será publicada antes do lançamento" | MATAR | Promessa de prazo e de conformidade LGPD não verificada. Substituído por nota factual: a página descreve o que o site faz hoje e ainda passa por revisão jurídica |
| "usados apenas para responder" | COMPRIMIR / corrigir | Incompleto: os dados também servem à newsletter e ao controle de abuso. Virou a seção "Para que usamos" |
| "não são compartilhados com terceiros para fins comerciais" | MATAR | Não verificável como compromisso; e os dados passam por fornecedores (Supabase, Resend, Vercel). Substituído por lista factual dos serviços e "Não usamos esses dados para publicidade" (nenhuma integração de anúncios no código) |
| Cookies "serão descritos" | Reescrito | Fato do código: só o cookie de sessão do painel `jf_admin`; nenhum pixel ou script de publicidade |
| Botão "Começar a conversa" | COMPRIMIR | "Ir para o contato" |

## O que a página afirma e onde foi verificado

| Afirmação | Fonte no código |
|---|---|
| Contato coleta nome, e-mail, organização, telefone, mensagem, assunto, campos do assunto, URL da página, navegador (user agent) e hash do IP | `src/app/api/contato/route.ts`, `db/schema.sql` (contact_submissions) |
| IP não é guardado; hash SHA-256 com sal, usado para limitar 5 envios em 10 min | `src/lib/db.ts` (`hashIp`, `recentCount`), rotas de API |
| Página Para Organizações usa a mesma rota | `src/components/sections/organizacoes/OrgContactForm.tsx` |
| Newsletter guarda e-mail, texto do consentimento, data, origem e hash do IP | `src/app/api/newsletter/route.ts`, `db/schema.sql` (newsletter_subscribers) |
| Supabase (Postgres) em São Paulo | host do pooler em `.env.local` é `aws-1-sa-east-1` (só o host foi lido, nenhum segredo) |
| Resend envia aviso à equipe, confirmação ao remetente (quando `autoreply` ativo) e a newsletter | `src/lib/notify.ts`, `src/lib/newsletter.ts` |
| Vercel Analytics | `src/app/layout.tsx` (`<Analytics />`), `package.json` |
| Painel restrito com senha | `src/lib/auth.ts`, `/admin` |
| Único cookie do próprio site: sessão do painel | `src/lib/auth.ts` (`jf_admin`); nenhum outro `cookies().set` ou `document.cookie` |
| Descadastro em um clique, e-mail fica marcado como "descadastrado" (não é apagado) | `src/app/newsletter/sair/route.ts`, `src/lib/newsletter.ts` (List-Unsubscribe) |
| E-mail para pedidos aparece só se configurado no painel; senão, link para /contato | `getExternal()` |

## A validar (Ju/Luiz + jurídico) antes de chamar de política

1. **Controlador**: nome legal (pessoa física ou empresa) e CNPJ/CPF a publicar, endereço de contato. Hoje a página não nomeia o responsável.
2. **Encarregado (DPO)**: nome e canal, ou justificativa de dispensa.
3. **Prazos de guarda**: não há rotina de exclusão no código. Contatos e inscritos ficam no banco sem prazo; descadastro só muda o status. Definir prazos e, se for o caso, implementar limpeza.
4. **Exclusão a pedido**: o painel não tem botão para apagar contato ou inscrito. Hoje um pedido de exclusão depende de ação manual no banco (Supabase). Definir quem faz e em quanto tempo.
5. **Base legal** de cada finalidade (consentimento para newsletter; legítimo interesse ou procedimentos preliminares para contato).
6. **Transferência internacional**: Resend e Vercel processam dados fora do Brasil (confirmar regiões contratadas). A página não afirma nada sobre isso.
7. **Vercel Analytics**: confirmar com a documentação/contrato da Vercel como a medição funciona (cookies, dados coletados) antes de detalhar na página.
8. **Quem acessa o painel**: lista de pessoas com acesso.
9. **Texto de consentimento da newsletter** (`NewsletterForm.tsx`, outro agente) aponta para esta página como "Política de Privacidade". O §18 pede não pedir aceite de documento incompleto: decidir se o aceite continua enquanto a validação não sai.
10. **Indexação**: a página segue com `robots: noindex`. Revisar quando a versão validada estiver pronta.
11. **Formulário do e-mail de confirmação** e qualquer nova integração (pixels, CRM) precisam atualizar esta página antes de entrar no ar.
