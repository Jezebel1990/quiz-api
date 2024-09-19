const express= require('express')
const app = express()
const port = 3000;

app.use(express.json());

const questions = [
    { id: 1, question: "Qual o planeta mais próximo do Sol?", options: ["Marte", "Vênus", "Terra", "Mercúrio"], correctAnswer: 3,  difficulty: 'medium' },
    { id: 2, question: "Quem desenvolveu a Teoria da Relatividade?", options: ["Isaac Newton", "Galileu Galilei", "Albert Einstein", "Nicolau Copérnico"], correctAnswer: 2,  difficulty: 'medium' },
    { id: 3, question: "Qual é a capital da França?", options: ["Madrid", "Berlim", "Paris", "Lisboa"], correctAnswer: 2, difficulty: 'easy'},
    { id: 4, question: "Qual é a maior montanha do mundo?", options: ["Monte Everest", "Monte Kilimanjaro", "Monte Fuji", "Monte McKinley"], correctAnswer: 0, difficulty: 'hard' },
    { id: 5, question: "Quem pintou a Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], correctAnswer: 1, difficulty: 'easy' },
    { id: 6, question: "Qual é a fórmula química da água?", options: ["H2O", "CO2", "NaCl", "CH4"], correctAnswer: 0 , difficulty: 'easy'},
    { id: 7, question: "Qual é o maior oceano do mundo?", options: ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Oceano Ártico"], correctAnswer: 2,  difficulty: 'medium' },
    { id: 8, question: "Qual é o continente mais populoso?", options: ["África", "América do Norte", "Ásia", "Europa"], correctAnswer: 2, difficulty: 'hard' },
    { id: 9, question: "Quem foi o primeiro homem a pisar na Lua?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], correctAnswer: 0, difficulty: 'hard' },
    { id: 10, question: "Qual é o símbolo químico do ouro?", options: ["Au", "Ag", "Pb", "Fe"], correctAnswer: 0 , difficulty: 'easy'},
    { id: 11, question: "Qual é o maior país em extensão territorial?", options: ["China", "Estados Unidos", "Brasil", "Rússia"], correctAnswer: 3,  difficulty: 'medium' },
    { id: 12, question: "Qual é a unidade básica da vida?", options: ["Molécula", "Célula", "Átomo", "Organoide"], correctAnswer: 1, difficulty: 'easy' },
    { id: 13, question: "Qual é a língua oficial do Brasil?", options: ["Espanhol", "Português", "Inglês", "Francês"], correctAnswer: 1 , difficulty: 'easy'},
    { id: 14, question: "Quem escreveu 'Dom Quixote'?", options: ["Gabriel García Márquez", "Miguel de Cervantes", "Jorge Luis Borges", "Pablo Neruda"], correctAnswer: 1,  difficulty: 'medium' },
    { id: 15, question: "Qual é a fórmula da área de um círculo?", options: ["πr²", "2πr", "πd", "πr"], correctAnswer: 0, difficulty: 'hard' },
    { id: 16, question: "Qual é a principal fonte de energia do Sol?", options: ["Fissão nuclear", "Fusão nuclear", "Combustão química", "Eletromagnetismo"], correctAnswer: 1, difficulty: 'hard' },
    { id: 17, question: "Qual é o menor país do mundo em termos de área?", options: ["Mônaco", "San Marino", "Cidade do Vaticano", "Liechtenstein"], correctAnswer: 2, difficulty: 'hard' },
    { id: 18, question: "Qual é o maior animal terrestre?", options: ["Elefante", "Girafa", "Rinoceronte", "Hipopótamo"], correctAnswer: 0, difficulty: 'easy' },
    { id: 19, question: "Quem foi o primeiro presidente dos Estados Unidos?", options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], correctAnswer: 2, difficulty: 'hard' },
    { id: 20, question: "Qual é o número atômico do oxigênio?", options: ["6", "8", "10", "12"], correctAnswer: 1, difficulty: 'medium' }
  ];

// Rota para pegar todas as perguntas do quiz
app.get('/quiz', (req, res) => {
    res.json(questions);
  });
  
  // Rota para pegar uma pergunta específica pelo ID
  app.get('/quiz/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const question = questions.find(q => q.id === id);
    
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ message: "Pergunta não encontrada" });
    }
  });
  
  // Rota para verificar a resposta
  app.post('/quiz/:id/answer', (req, res) => {
    const id = parseInt(req.params.id);
    const { answer } = req.body; 
    
    const question = questions.find(q => q.id === id);
    
    if (!question) {
      return res.status(404).json({ message: "Pergunta não encontrada" });
    }
    
    // Verifica se a resposta está correta
    const isCorrect = question.correctAnswer === answer;
    res.json({ correct: isCorrect });
  });


  // Endpoint para obter perguntas por nível de dificuldade
app.get('/quiz/difficulty/:level', (req, res) => {
  const level = req.params.level;
  const filteredQuestions = quiz.filter(q => q.difficulty === level);
  
  if (filteredQuestions.length > 0) {
    res.json(filteredQuestions);
  } else {
    res.status(404).json({ error: "Nenhuma pergunta encontrada para esse nível de dificuldade." });
  }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});