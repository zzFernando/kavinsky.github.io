# Guia de Customização - Site Jekyll

Este documento oferece orientações detalhadas para customizar seu site Jekyll.

## 📌 Configuração Essencial (_config.yml)

### Informações do Site

```yaml
title: "Seu Nome Aqui"
description: "Descrição breve do que você faz"
author: "Seu Nome"
email: "seu-email@example.com"
baseurl: ""  # Deixar vazio para repositório user.github.io
url: "https://seu-usuario.github.io"
```

### Redes Sociais

```yaml
github_username: seu-usuario
linkedin_username: seu-usuario
twitter_username: seu-usuario
```

## 🎨 Personalização de Cores

Edite `_sass/_variables.scss`:

```scss
// Cores principais
$color-primary: #2c3e50;      // Azul escuro (headers, botões)
$color-secondary: #3498db;    // Azul claro (links, destaque)
$color-accent: #e74c3c;       // Vermelho (CTA importante)
$color-success: #27ae60;      // Verde
$color-warning: #f39c12;      // Amarelo

// Cores neutras
$color-dark: #1a1a1a;         // Texto escuro
$color-light: #f5f5f5;        // Fundo claro
$color-gray: #7f8c8d;         // Texto cinzento
```

### Customizar Dark Mode

```scss
// Em _sass/_base.scss
body.dark-mode {
  background-color: #1e1e1e;   // Customize a cor de fundo
  color: #e0e0e0;              // Customize a cor do texto
}
```

## 📝 Criar uma Página Nova

1. Crie um arquivo `.md` na raiz (ex: `cv.md`)

```markdown
---
layout: page
title: "Meu CV"
permalink: /cv/
---

Conteúdo aqui...
```

2. Adicione o link na navbar editando `_includes/navbar.html`:

```html
<li class="nav-item">
  <a href="/cv/" class="nav-link">CV</a>
</li>
```

## 📊 Adicionar Projetos

Edite `_data/projects.yml`:

```yaml
- name: "Seu Projeto"
  description: "O que este projeto faz"
  tech: 
    - "Tecnologia 1"
    - "Tecnologia 2"
    - "Tecnologia 3"
  github: "https://github.com/usuario/repo"
  demo: "https://projeto-demo.com"
  featured: true  # Mostrar na homepage
```

## 🔤 Tipografia

Edite `_sass/_variables.scss`:

```scss
$font-family-main: 'Inter', sans-serif;  // Fonte principal
$font-size-base: 16px;                   // Tamanho padrão
$font-size-lg: 18px;
$font-size-xl: 24px;
$font-size-2xl: 32px;
$font-size-3xl: 48px;
```

### Importar Google Fonts

Em `_layouts/default.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;600;700&display=swap" rel="stylesheet">
```

E em `_sass/_variables.scss`:

```scss
$font-family-main: 'SuaFonte', sans-serif;
```

## 🌈 Temas Prontos

### Tema Minimalista

```scss
$color-primary: #000000;
$color-secondary: #333333;
$color-accent: #666666;
```

### Tema Vibrante

```scss
$color-primary: #6c5ce7;
$color-secondary: #00b894;
$color-accent: #fdcb6e;
```

### Tema Profissional

```scss
$color-primary: #1e3a8a;
$color-secondary: #2563eb;
$color-accent: #059669;
```

## 📱 Responsividade

Os breakpoints já estão definidos em `_sass/_variables.scss`:

```scss
$breakpoint-sm: 576px;   // Mobile
$breakpoint-md: 768px;   // Tablet
$breakpoint-lg: 992px;   // Desktop
$breakpoint-xl: 1200px;  // Desktop grande
```

Use assim em seus SASS:

```scss
@include respond-to(sm) {
  // Estilos para mobile
}

@include respond-to(md) {
  // Estilos para tablet+
}
```

## 🖼️ Adicionar Logo/Avatar

1. Coloque sua imagem em `assets/images/logo.png`

2. Edite `_includes/navbar.html`:

```html
<a href="/" class="brand-logo">
  <img src="/assets/images/logo.png" alt="Logo" class="brand-icon">
  <span class="brand-text">{{ site.title }}</span>
</a>
```

3. Customize o tamanho em `_sass/_navbar.scss`:

```scss
.brand-icon {
  width: 50px;    // Customize
  height: 50px;   // Customize
}
```

## 📄 Adicionar Favicon

1. Gere um favicon em [favicon.io](https://favicon.io/)

2. Coloque os arquivos em `assets/images/`

3. Adicione ao `_layouts/default.html`:

```html
<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">
```

## 🔍 SEO Avançado

### Meta Tags Customizadas

Em cada post/página, adicione:

```markdown
---
layout: post
title: "Título"
description: "Descrição única para meta tag (155-160 caracteres)"
keywords: "palavra-chave, palavra-chave2"
---
```

### Open Graph

Edite `_layouts/default.html`:

```html
<meta property="og:image" content="https://seu-site.com/assets/images/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

## 📧 Formulário de Contato

Usando Formspree (gratuito):

1. Crie `contact.md`:

```markdown
---
layout: page
title: "Contato"
permalink: /contact/
---

<form action="https://formspree.io/f/SEU-ID" method="POST">
  <input type="email" name="email" required placeholder="Seu email">
  <textarea name="message" required placeholder="Sua mensagem"></textarea>
  <button type="submit">Enviar</button>
</form>
```

2. Customize o formulário em `_sass/_pages.scss`.

## 🎯 Google Analytics

Em `_layouts/default.html`, antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📰 Customizar Layout de Posts

Edite `_layouts/post.html` para adicionar seções como:
- Autor com foto
- Tempo de leitura
- Compartilhamento em redes sociais

## 🚀 Performance

### Otimizar Imagens

```markdown
![Descrição](image.jpg){: width="600" height="400"}
```

### Lazy Loading

```html
<img src="image.jpg" loading="lazy" alt="Descrição">
```

### Minimificar CSS

Jekyll já minifica automaticamente com `style: compressed` em `_config.yml`.

## 🔐 Segurança

- Nunca commite informações sensíveis
- Use variáveis de ambiente para chaves API
- Mantenha dependencies atualizadas: `bundle update`

## 📚 Recursos Adicionais

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [SASS Documentation](https://sass-lang.com/documentation)
- [GitHub Pages Limits](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

---

**Dúvidas?** Consulte a documentação oficial ou abra uma issue no seu repositório!
