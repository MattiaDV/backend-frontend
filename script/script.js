let adminMessages = document.getElementById('admin');

fetch('../pages/messages.json')
  .then(res => res.json())
  .then(messages => {
    if(messages.length > 0) {
      adminMessages.innerHTML = `
      
        <div class = "messaggiocompleto">
        <div class="nickname">${messages[0].nickname}</div>
        <div class="message">${messages[0].messaggio}</div>
        </div>
      `;
    } else {
      adminMessages.innerHTML = '<p>Nessun messaggio disponibile</p>';
    }
  })
  .catch(err => {
    console.error('Errore nel caricamento dei messaggi:', err);
    adminMessages.innerHTML = '<p>Errore nel caricamento dei messaggi</p>';
  });


let chatg = document.getElementById('chatGene');

fetch('../pages/messages.json')
  .then(res => res.json())
  .then(messages => {
    if(messages.length > 0) {
      let html = '';
      for (let i = 1; i < messages.length; i++) {
        html += `
          <div class = "messaggiocompleto">
          <div class="nickname">${messages[i].nickname}</div>
          <div class="message">${messages[i].messaggio}</div>
          </div>
        `;
      }
      chatg.innerHTML = html;
    } else {
      chatg.innerHTML = '<p>Nessun messaggio disponibile</p>';
    }
  })
  .catch(err => {
    console.error('Errore nel caricamento dei messaggi:', err);
    chatg.innerHTML = '<p>Errore nel caricamento dei messaggi</p>';
  });