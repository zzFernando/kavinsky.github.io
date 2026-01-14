# Fernando - Site Pessoal

Bem-vindo ao repositório do meu site pessoal! Este é um site estático moderno construído com **Jekyll** e hospedado gratuitamente no **GitHub Pages**.

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue)](https://zzfernando.github.io)
[![Jekyll](https://img.shields.io/badge/Built%20with-Jekyll-CC342D?logo=jekyll&logoColor=white)](https://jekyllrb.com)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-green)](#)

## 📋 Características

- ✨ **Design Responsivo**: Mobile-first, funciona em todos os dispositivos
- 🌙 **Dark Mode**: Suporte a tema escuro com preferência do sistema
- 📝 **Blog Completo**: Posts em Markdown com suporte a categorias e tags
- 🎨 **Estilos Customizáveis**: SASS organizado e bem estruturado
- 📱 **Navbar Fixa**: Navegação responsiva com menu mobile
- 🔍 **SEO Otimizado**: Meta tags, Open Graph e sitemap automático
- 📊 **Feed RSS**: Inscrições automáticas para posts
- ⚡ **Performance**: Sem dependências externas não suportadas
- 💻 **Syntax Highlighting**: Destaque de código automático

## 🚀 Início Rápido

### Pré-requisitos

- Ruby 2.7.0 ou superior
- Bundler
- Git

### Instalação Local

1. **Clone o repositório**

```bash
git clone https://github.com/zzfernando/zzfernando.github.io.git
cd zzfernando.github.io
```

2. **Instale as dependências**

```bash
bundle install
```

3. **Execute o servidor local**

```bash
bundle exec jekyll serve
```

O site estará disponível em `http://localhost:4000`

## 📁 Estrutura do Projeto

```
zzfernando.github.io/
├── _config.yml                 # Configuração principal do Jekyll
├── _data/
│   └── projects.yml           # Dados dos projetos (YAML)
├── _includes/
│   ├── navbar.html            # Barra de navegação
│   └── footer.html            # Rodapé
├── _layouts/
│   ├── default.html           # Layout padrão
│   ├── home.html              # Layout da homepage
│   ├── page.html              # Layout para páginas
│   └── post.html              # Layout para posts
├── _posts/                    # Posts do blog
├── _sass/                     # Estilos SASS
├── assets/                    # CSS, JS e imagens
├── index.md                   # Homepage
├── about.md                   # Página Sobre
├── projects.md                # Página de Projetos
├── posts.md                   # Página de Posts
├── Gemfile                    # Dependências Ruby
├── .gitignore                 # Arquivos a ignorar
└── README.md                  # Este arquivo
```

## 📝 Como Criar um Novo Post

1. Crie um arquivo em `_posts/` seguindo o formato: `YYYY-MM-DD-titulo.md`

2. Adicione o front matter:

```markdown
---
layout: post
title: "Título do seu post"
date: 2026-01-13
categories: [Categoria1, Categoria2]
tags: [tag1, tag2, tag3]
author: Fernando
excerpt: "Um pequeno resumo do seu post"
---

# Seu conteúdo aqui
```

## 🎨 Personalizando o Site

### Configuração Básica

Edite `_config.yml`:

```yaml
title: Fernando
description: Breve descrição profissional
author: Fernando
email: seu-email@example.com
github_username: seu-usuario-github
linkedin_username: seu-usuario-linkedin
url: https://zzfernando.github.io
```

### Cores e Estilos

Edite `_sass/_variables.scss` para alterar cores primárias.

### Adicionar Projetos

Edite `_data/projects.yml`:

```yaml
- name: "Nome do Projeto"
  description: "Descrição"
  tech: ["React", "Node.js"]
  github: "https://github.com/usuario/repo"
  demo: "https://demo-url.com"
```

## 🌙 Dark Mode

O site detecta automaticamente a preferência de dark mode do sistema. Os usuários podem toggle manualmente e a preferência é salva.

## 📊 SEO

- ✅ Meta tags automáticas
- ✅ Open Graph para redes sociais
- ✅ Sitemap automático
- ✅ Feed RSS

## 🔧 Problemas Comuns

### Erro: "bundle: command not found"

```bash
gem install bundler
```

### O site não está atualizando

```bash
bundle exec jekyll clean
bundle exec jekyll serve
```

## 📦 Dependências

Todas as dependências estão em `Gemfile` e são **suportadas nativamente por GitHub Pages**:

- jekyll
- jekyll-feed
- jekyll-sitemap
- jekyll-seo-tag

## 🚀 Deploy no GitHub Pages

1. Renomeie para `seu-usuario.github.io`
2. Push para branch `main`
3. Site estará em `https://seu-usuario.github.io`

## 👤 Autor

**Fernando**
- GitHub: [@zzfernando](https://github.com/zzfernando)
- LinkedIn: [@zzfernando](https://linkedin.com/in/zzfernando)
- Email: contato@example.com

---

Desenvolvido com ❤️ usando Jekyll e GitHub Pages
