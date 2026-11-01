# Restaurante da Birrinha

Landing page em React, TypeScript, Vite e Tailwind CSS. Componentes estão em `src/components/`; informações do restaurante e dados demonstrativos do cardápio ficam em `src/data/birrinhaData.ts`.

## Desenvolvimento

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Vercel

O projeto inclui `vercel.json` com `npm run build` e `dist` como diretório de saída. No painel da Vercel, confirme que **Root Directory** aponta para a pasta que contém `package.json` e `vercel.json`, e que o deploy está usando a branch correta. Não configure `public` como diretório de saída.

## Antes de publicar

Os nomes, fotos e adicionais do cardápio são exemplos de layout. A referência informa preço médio de R$ 20–40, sem preços individuais por prato; por isso os itens aparecem como “Consulte” até o restaurante confirmar os valores. Atualize `src/data/birrinhaData.ts` com o menu aprovado. Os depoimentos exibidos são os textos que constavam no site anterior, mas confirme a origem, nota e autorização antes de divulgar como avaliações do Google. A disponibilidade de entrega deve ser confirmada pelo restaurante. O horário do badge considera atendimento de quarta a segunda, das 11h às 14h, conforme informação existente no site.

O banner de portfólio usa o telefone do restaurante como destino porque ainda não há outro WhatsApp informado; troque `portfolioWhatsApp` pelo contato comercial correto. Para publicar em GitHub Pages sob um caminho de projeto, configure o `base` do Vite para o subdiretório do repositório.
