const mermaid_initializeAndRun = () => {
  if (!window.mermaid?.initialize) {
    return;
  }

  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const themes = window.mermaid.themes ?? ['default', 'dark'];

  window.mermaid.initialize({
    securityLevel: 'loose',
    startOnLoad: false,
    theme: isDark ? themes[1] : themes[0],
  });
  window.mermaid.run();
}

mermaid_initializeAndRun();
window.initializeAndRunMermaid = mermaid_initializeAndRun;
