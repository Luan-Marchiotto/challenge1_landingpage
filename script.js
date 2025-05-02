const form = document.getElementById('form');
const input = document.getElementById('input');
const chat = document.getElementById('chat');

form.addEventListener('submit', function(e) { // enviar
  e.preventDefault();
  const msg = input.value.trim();
  if (msg) {
    addMessage(msg, 'user');
    respond(msg); // Mensagem original
    input.value = '';
  }
});

function addMessage(text, sender) { // adicionar mensagem
    const msgDiv = document.createElement('div');
    msgDiv.className = 'msg ' + sender;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    msgDiv.innerHTML = `<span>${text}</span><div style="font-size:10px;color:gray;text-align:right;">${time}</div>`;
    chat.appendChild(msgDiv);
    chat.scrollTop = chat.scrollHeight;
}

function respond(msgOriginal) { // respostas das mensagens enviadas
    const msg = msgOriginal.toLowerCase(); // Tratando para editar comparações de maiscula ou minuscula

    let response = 'Não entendi, tente outra coisa como: "Elenco atual", "Próximo Jogo"...';

    const greetings = [
        "Fala, fã da FURIA! No que posso te ajudar?",
        "E aí! Pronto para torcer pela FURIA?",
        "Opa! Como posso ajudar hoje?"
    ];

    // Mensagens e repsostas previamente prontas

    if (msg.includes('jogo') || msg.includes('próximo')) {
        response = "O próximo jogo da FURIA é neste sábado às 16h contra a NAVI!";
    } else if (msg.includes('resultado') || msg.includes('último')) {
        response = "A FURIA perdeu a The MongolZ por 2x0 no último confronto!";
    } else if (msg.includes('elenco') || msg.includes('jogadores') || msg.includes('time')) {
        response = "Elenco atual: FalleN, yuurih, KSCERATO, MOLODOY, YEKINDAR.";
    } else if(msg.includes('reservas') || msg.includes('reserva')){
        response = "Reservas atual: chelo, skullz."
    } else if (msg.includes('ranking')) {
        response = "Atualmente, a FURIA está no Top 16 do ranking HLTV no CS.";
    } else if (msg.includes('torcida') || msg.includes('vamos') || msg.includes('vai') || msg.includes('furia')) {
        response = "VAAAAAAMO FURIAAA 🔥 #GoFuria";
    } else if (msg.includes('oi') || msg.includes('olá') || msg.includes('bom dia') || msg.includes('boa tarde') || msg.includes('boa noite')) {
        response = greetings[Math.floor(Math.random() * greetings.length)];
    } else if (msg.includes('coach') || msg.includes('treinador')) {
        response = 'O coach da FURIA é Sidnei "sidde" Macedo! 🧠';
    } else if (msg.includes('loja') || msg.includes('site')) {
        response = 'Claro! Você pode acessar a loja oficial da FURIA aqui: <a href="https://www.furia.gg" target="_blank" style="color: white;">Furia Life Style</a>';
    }

    setTimeout(() => addMessage(response, 'bot'), 500);
}

// para envio dos emails

emailjs.init("USER_ID"); // Subistituia aqui pelo user_id no emailJS sendo sua public key

document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  console.log("Formulário enviado");
  emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', this) // Subistitua aqui pelo service_id e template_id respectivamente
    .then(function(response) {
      console.log('Sucesso:', response); 

      document.getElementById('mensagem').innerText = 'Obrigado por se inscrever! Confira seu e-mail 😉';

      document.getElementById('newsletterForm').reset();
    }, function(error) {
      console.log('Erro:', error);

      document.getElementById('mensagem').innerText = 'Erro ao enviar. Tente novamente.';
    });
});