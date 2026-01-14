// Script para gerenciar tema escuro/claro
// ========================================

(function() {
  // Elementos do DOM
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const bodyElement = document.body;
  
  // Chave de armazenamento local
  const THEME_KEY = 'theme-preference';
  
  // Função para detectar preferência do sistema
  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }
  
  // Função para obter tema salvo ou preferência do sistema
  function getSavedTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) {
      return saved;
    }
    return getSystemTheme();
  }
  
  // Função para aplicar tema
  function applyTheme(theme) {
    if (theme === 'dark') {
      bodyElement.classList.add('dark-mode');
      htmlElement.setAttribute('data-theme', 'dark');
      if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.setAttribute('aria-label', 'Ativar modo claro');
      }
    } else {
      bodyElement.classList.remove('dark-mode');
      htmlElement.setAttribute('data-theme', 'light');
      if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.setAttribute('aria-label', 'Ativar modo escuro');
      }
    }
    localStorage.setItem(THEME_KEY, theme);
  }
  
  // Aplicar tema ao carregar a página
  const initialTheme = getSavedTheme();
  applyTheme(initialTheme);
  
  // Adicionar evento ao botão de toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = localStorage.getItem(THEME_KEY) || getSystemTheme();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }
  
  // Monitorar mudanças na preferência do sistema
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      // Aplicar apenas se não houver preferência salva
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(newTheme);
      }
    });
  }
})();
