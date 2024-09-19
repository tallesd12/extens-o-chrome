document.getElementById("translate").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    // Define o idioma para o qual deseja traduzir (por exemplo, 'en' para inglês, 'es' para espanhol)
    const targetLanguage = 'en'; 
  
    // Constrói a URL de tradução do Google Translate
    const translateUrl = `https://translate.google.com/translate?hl=${targetLanguage}&sl=auto&tl=${targetLanguage}&u=${encodeURIComponent(tab.url)}`;
  
    // Abre a página traduzida em uma nova aba
    chrome.tabs.create({ url: translateUrl });
  });
  