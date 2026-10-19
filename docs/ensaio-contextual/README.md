# Auditoria e biblioteca de imagens — Juliana Ferreira

Base analisada: commit e64b310; 19/10/2026. O pedido desta rodada é analisar o acervo, criar imagens complementares e aplicar a seleção por contexto no código e publicar pela integração GitHub/Vercel.

## Entrega

- 156 arquivos existentes inspecionados visualmente em pranchas por grupo.
- 136 posições fotográficas mapeadas nas oito páginas (incluindo variantes ocultas de desktop/mobile). As quatro ocorrências da espiral gráfica foram preservadas fora do mapa fotográfico.
- 41 imagens geradas, incluindo variações horizontal/vertical e uma colagem. Arquivos WebP em public/images/ensaio/.
- 77 arquivos distintos observados nas páginas; 79 arquivos do inventário não foram observados nesses percursos e permanecem como legado.
- Biblioteca: aproximadamente 6.42 MiB em WebP, sem ampliação.

## Diagnóstico

As nove imagens de /images/ju/ usadas no código se repetem em muitos contextos. A foto do quadro tem 11 referências literais e a do palco, nove. Isso produz incoerências concretas: quadro descrito como estudo com fones em Pessoas, poltrona descrita como conversa com plateia em Palestras, retrato sorridente usado para reflexão noturna em Contato, escrita descrita como café da manhã e foto no quadro descrita como escrita à mesa em Ideias.

O acervo legado mistura rostos dos mockups com a Juliana das referências; vários arquivos já contêm traços vermelhos, títulos ou anotações rasterizadas. 96 arquivos têm menos de 800 px no lado maior. Cards de tecnologia incluem mão robótica, cérebro luminoso e holograma, incompatíveis com o roteiro. As novas imagens de tecnologia mostram notebook e celular no cotidiano.

Antes da atualização, 12 posições desktop tinham altura maior que 1,9 vezes a largura. Exemplos medidos: Home / Para Pessoas 547×1388; Palestras / Contratação 605×1985; Ju / Encerramento 576×1515. As colunas receberam proporções limitadas, os cards panorâmicos foram ampliados e os retratos receberam pontos de foco. Anotações e traços que cobriam o rosto foram reposicionados. Não restam fotografias do ensaio com proporção superior a 1,9 nessas posições em desktop.

O componente Photo registra a origem do ensaio nos metadados e respeita o tamanho solicitado por cada bloco. As descrições foram corrigidas em conjunto com as imagens. As imagens de compartilhamento também foram atualizadas. A pedido do usuário, a apresentação visual não exibe selos sobre as fotografias ou observação adicional no rodapé; a origem permanece documentada neste catálogo.

## Seleção por página

| Página | Direção |
|---|---|
| Home | Horizonte na abertura, retrato de referência na apresentação, palco vertical, quatro cenas profissionais e escrita. |
| Ju | Biblioteca, trabalho concentrado, estudo, caminhada e maternidade ilustrativa de costas. |
| Futuros Humanos | Horizonte e janela, mãos desenhando, tecnologia cotidiana, movimentos urbanos e contato noturno. |
| Palestras | Variação entre palco, plateia, workshop e conversa individual; manter a área de provas reais vazia até haver registros. |
| Organizações | Workshop, conversa com liderança, planejamento e quadro, alinhados a cada formato. |
| Pessoas | Casa, café, reflexão, estudo com fones e caminhada. |
| Ideias | Leitura, escrita, livros, escolhas e tecnologia cotidiana; remover clichês futuristas da seleção. |
| Contato | Retrato acolhedor, detalhes das opções de contato e imagem noturna no encerramento. |

## Origem e limites

Ferramenta: image_gen integrada. As duas referências fornecidas pelo usuário orientaram rosto, cabelo, tonalidade de pele e aparência adulta; a semelhança pode variar entre cenas. Todas as imagens novas são sintéticas. Palco/equipe não documentam eventos ou organizações reais. As crianças são fictícias, vistas de costas, e não representam a identidade das filhas. Não usar essas cenas como comprovação ou legendar como registros reais. As seções STAGE_PHOTOS/TESTIMONIALS/ORGANIZATIONS não receberam conteúdo inventado.

Resolução nativa: 1536×1024 ou 1024×1536 (consultar catálogo). Não há RAW nem 4000 px nativos; não houve ampliação artificial. A seleção está aplicada aos componentes nas oito páginas públicas. A publicação usa o push na main do repositório joaosilvestrim-cloud/juferreira e sua integração existente com a Vercel. Os PNG/JPG originais ficam no pacote entregue no chat, mantendo WebP no acervo do site e JPG nos cartões de compartilhamento.

## Verificação

Oito rotas públicas visitadas em Edge/Playwright nas larguras 1440 e 390 px. Todas as imagens visíveis carregaram; zero pageerrors e zero rolagem horizontal. A verificação foi repetida após a aplicação e comparou as 136 posições com o mapa editorial nos dois tamanhos. npm run lint e npm run build passaram. Um build intermediário esgotou a memória local; a repetição com os processos de navegador encerrados passou. Formulários, banco e autenticação não foram exercitados. A implantação é conferida após o push, pelo status Vercel no GitHub e pelo domínio público.

## Arquivos

- catalogo.json: origem, dimensões, hash, descrições e prompts das imagens novas.
- mapa-por-bloco.json: imagem anterior e selecionada, estado applied, alt e dimensões efetivamente renderizados antes/depois.
- inventario-anterior.json: inventário completo dos 156 arquivos e uso observado.
- verificacao.json: resultados por rota e viewport.
- GALERIA.md: visualização das imagens novas.
