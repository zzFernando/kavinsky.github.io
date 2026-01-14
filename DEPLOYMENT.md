# Checklist de Deployment - GitHub Pages

Use este checklist antes de fazer deploy seu site Jekyll no GitHub Pages.

## ✅ Pré-Deployment

### Configuração
- [ ] Editar `_config.yml` com informações pessoais (nome, email, redes sociais)
- [ ] Verificar URLs em `_config.yml` (baseurl, url)
- [ ] Customizar cores em `_sass/_variables.scss`
- [ ] Atualizar página About (`about.md`)
- [ ] Adicionar projetos em `_data/projects.yml`
- [ ] Atualizar links do header/footer nas redes sociais

### Conteúdo
- [ ] Criar posts de exemplo para seu blog
- [ ] Adicionar imagens em `assets/images/`
- [ ] Revisar todos os posts para erros de Markdown
- [ ] Verificar links internos (sem erros 404)
- [ ] Adicionar excerpt aos posts
- [ ] Categorizar e taggear posts

### SEO
- [ ] Adicionar descrição meta em posts importantes
- [ ] Verificar títulos das páginas (title tags)
- [ ] Adicionar Open Graph meta tags
- [ ] Criar `robots.txt` (opcional)

### Testes Locais
- [ ] Executar `bundle install`
- [ ] Executar `bundle exec jekyll serve`
- [ ] Abrir `http://localhost:4000` no navegador
- [ ] Testar navegação principal
- [ ] Testar dark mode (botão no navbar)
- [ ] Testar responsividade (mobile, tablet, desktop)
- [ ] Testar todos os links (internos e externos)
- [ ] Verificar syntax highlighting de código
- [ ] Limpar cache: `bundle exec jekyll clean`

### Performance
- [ ] Otimizar imagens (compressão)
- [ ] Verificar tamanho do bundle CSS/JS
- [ ] Testar no Google PageSpeed Insights

### Navegadores
- [ ] Testar no Chrome
- [ ] Testar no Firefox
- [ ] Testar no Safari
- [ ] Testar no Edge

## 🚀 Deployment

### Preparação do Repositório

1. **Renomear repositório** (se necessário)
   ```bash
   # Deve ser nomeado como: seu-usuario.github.io
   ```

2. **Inicializar git** (se necessário)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Jekyll site setup"
   ```

3. **Configurar branch padrão**
   - Ir para Settings > Branches
   - Verificar se `main` está como branch padrão

### Configurar GitHub Pages

1. Ir para **Settings** > **Pages**
2. Verificar:
   - [ ] Source: Deploy from a branch
   - [ ] Branch: `main` (ou `master`)
   - [ ] Directory: `/ (root)`

### Push para GitHub

```bash
# Adicionar remote (se ainda não existe)
git remote add origin https://github.com/seu-usuario/seu-usuario.github.io.git

# Fazer push
git branch -M main
git push -u origin main
```

### Monitorar Build

1. Ir para **Actions** no repositório
2. Aguardar workflow `pages build and deployment` completar
3. Verificar se há erros no log
4. Visualizar site em `https://seu-usuario.github.io`

## ✔️ Pós-Deployment

### Validação
- [ ] Site acessível em `https://seu-usuario.github.io`
- [ ] Todas as páginas carregam corretamente
- [ ] CSS e imagens aparecem
- [ ] Dark mode funciona
- [ ] Navbar responsivo funciona
- [ ] Posts aparecem na lista
- [ ] Links funcionam

### SEO & Indexação
- [ ] Verificar sitemap: `https://seu-usuario.github.io/sitemap.xml`
- [ ] Verificar RSS: `https://seu-usuario.github.io/feed.xml`
- [ ] Submeter sitemap ao Google Search Console
- [ ] Submeter sitemap ao Bing Webmaster Tools
- [ ] Verificar meta tags no inspetor do navegador

### Analytics (Opcional)
- [ ] Configurar Google Analytics
- [ ] Verificar se está recebendo dados
- [ ] Monitorar bounce rate e páginas populares

### Backup & Versionamento
- [ ] Verificar commits no git
- [ ] Fazer backup local do repositório
- [ ] Ativar GitHub Pages em Settings

## 🔄 Manutenção Contínua

### Semanal
- [ ] Revisar posts publicados
- [ ] Corrigir typos encontrados
- [ ] Responder comentários (se houver)

### Mensal
- [ ] Atualizar Gemfile: `bundle update`
- [ ] Verificar GitHub Pages updates
- [ ] Revisar Google Analytics
- [ ] Considerar novo post

### Trimestral
- [ ] Atualizar dependências
- [ ] Revisar SEO
- [ ] Otimizar performance
- [ ] Atualizar página About se necessário

## 🐛 Troubleshooting

### Site não está aparecendo
1. Verificar se repositório é público
2. Confirmar nome: `seu-usuario.github.io`
3. Verificar se está em `https` (não `http`)
4. Aguardar 5-10 minutos após push

### Build falha no GitHub Pages
1. Verificar logs em **Actions**
2. Procurar por erros Jekyll
3. Verificar se não há caracteres especiais
4. Validar YAML em `_config.yml`

### CSS/JS não carrega
1. Verificar permissões de arquivo
2. Confirmar paths relativos
3. Limpar cache do navegador
4. Executar `bundle exec jekyll clean`

### Imagens não aparecem
1. Verificar se arquivo existe
2. Confirmar extensão (`.jpg`, `.png`, etc)
3. Usar paths relativos: `/assets/images/...`
4. Evitar espaços em nomes de arquivo

## 📞 Suporte

Se encontrar problemas:
1. Verificar [GitHub Pages Docs](https://docs.github.com/en/pages)
2. Verificar [Jekyll Docs](https://jekyllrb.com/)
3. Abrir issue no repositório do tema/Jekyll
4. Consultar Stack Overflow

## 📋 Comandos Úteis

```bash
# Desenvolvimento local
bundle exec jekyll serve
bundle exec jekyll serve --draft  # Incluir drafts
bundle exec jekyll serve --incremental  # Modo incremental (mais rápido)

# Limpeza
bundle exec jekyll clean
bundle exec jekyll clean && bundle exec jekyll serve

# Build para produção
bundle exec jekyll build

# Atualizar dependências
bundle update

# Mostrar versão
bundle exec jekyll --version
```

---

**Sucesso no deployment!** 🎉

Seu site estará em: `https://seu-usuario.github.io`
