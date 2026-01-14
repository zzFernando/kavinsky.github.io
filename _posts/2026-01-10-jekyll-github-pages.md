---
layout: post
title: "Começando com Jekyll e GitHub Pages"
date: 2026-01-10
categories: [Jekyll, GitHub Pages]
tags: [jekyll, github-pages, blog, static-site]
author: Fernando
excerpt: "Neste post, vamos explorar como configurar um blog estático usando Jekyll e hospedá-lo gratuitamente no GitHub Pages. Perfeito para desenvolvedores que querem um blog rápido e seguro."
---

## Introdução

Jekyll é um gerador de sites estáticos desenvolvido pelo GitHub e integrado nativamente ao GitHub Pages. Se você é desenvolvedor e quer um blog rápido, seguro e fácil de manter, Jekyll é a solução perfeita!

## Por que usar Jekyll?

- **Rápido**: Sites estáticos são extremamente rápidos
- **Seguro**: Sem banco de dados ou servidor para hackear
- **Versionado**: Seu blog é apenas código, use Git para controlar versões
- **Gratuito**: Hospedagem gratuita no GitHub Pages
- **Simples**: Apenas arquivos Markdown e HTML

## Pré-requisitos

Você precisará ter instalado:

- Ruby 2.7.0 ou superior
- Bundler
- Git

## Instalação

```bash
gem install jekyll bundler
jekyll new meu-blog
cd meu-blog
bundle exec jekyll serve
```

Acesse `http://localhost:4000` e veja seu blog funcionando!

## Estrutura de arquivos

```
meu-blog/
├── _config.yml       # Configuração do site
├── _posts/          # Seus posts
├── _layouts/        # Layouts do site
├── _includes/       # Componentes reutilizáveis
├── assets/          # CSS, JS e imagens
└── index.md         # Página inicial
```

## Criando seu primeiro post

Crie um arquivo em `_posts/` com o formato: `YYYY-MM-DD-titulo.md`

```markdown
---
layout: post
title: "Meu Primeiro Post"
date: 2026-01-10
categories: [blog]
tags: [primeiro-post]
---

Conteúdo do seu post aqui...
```

## Publicando no GitHub Pages

1. Crie um repositório chamado `seu-usuario.github.io`
2. Push seu código Jekyll para o repositório
3. Seu site estará disponível em `https://seu-usuario.github.io`

É realmente assim tão simples!

## Conclusão

Jekyll oferece uma forma leve e eficaz de manter um blog técnico sem a complexidade de plataformas mais pesadas. Perfeito para documentar sua jornada de desenvolvimento.

Nos próximos posts vou falar sobre temas customizados e plugins Jekyll. Stay tuned!

---

**Tem dúvidas?** [Entre em contato!](/contact)
