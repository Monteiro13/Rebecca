// Définition des questions
const questions = [
    {
      question: "Quelle est la capitale du Gabon ?",
      options: ["Libreville", "Port-Gentil", "Franceville"],
      answer: 0
    },
    {
      question: "Quelle est la langue officielle du Gabon ?",
      options: ["Français", "Anglais", "Portugais"],
      answer: 0
    },
    {
      question: "Quelle est la monnaie utilisée au Gabon ?",
      options: ["Euro", "Dollar", "Franc CFA"],
      answer: 2
    },
    {
      question: "Quelle est la plus grande réserve naturelle du Gabon ?",
      options: ["Parc national de Loango", "Parc national de la Lopé", "Parc national des Monts de Cristal"],
      answer: 1
    },
    {
      question: "Quelle est la population approximative du Gabon ?",
      options: ["1 million", "5 millions", "2 millions"],
      answer: 2
    },
    {
      question: "Quel est le principal sport pratiqué au Gabon ?",
      options: ["Football", "Basketball", "Athlétisme"],
      answer: 0
    },
    {
      question: "Quel est le point culminant du Gabon ?",
      options: ["Mont Bengoué", "Mont Iboundji", "Mont Cristal"],
      answer: 2
    },
    {
      question: "Quelle est la matière première la plus exploitée au Gabon ?",
      options: ["Pétrole", "Bois", "Manganèse"],
      answer: 0
    },
    {
      question: "Quelle est la date de l'indépendance du Gabon ?",
      options: ["17 août 1960", "1er janvier 1961", "28 novembre 1959"],
      answer: 0
    },
    {
      question: "Le Gabon compte combien de province ?",
      options: ["11","9","7"],
      answer: 1
    }
  ];
  
  // Variables pour suivre le score et l'indice de la question
  let score = 0;
  let currentQuestion = 0;
  
  // Fonction pour afficher la question suivante
  function displayNextQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[currentQuestion];
  
    questionContainer.innerHTML = `
      <h2>${question.question}</h2>
      <ul>
        <button class="btn btn-success" onclick="checkAnswer(0)">${question.options[0]}</button>
        <button class="btn btn-success" onclick="checkAnswer(1)">${question.options[1]}</button>
        <button class="btn btn-success" onclick="checkAnswer(2)">${question.options[2]}</button>
      </ul>
    `;
  }
  
  // Fonction pour vérifier la réponse
  function checkAnswer(answer) {
    const question = questions[currentQuestion];
  
    if (answer === question.answer) {
      alert('Bonne reponse');
      score++;
    }else{
      alert('Mauvaise reponse');
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayNextQuestion();
    } else {
      displayResult();
    }
  }
  
  // Fonction pour afficher le résultat final
  function displayResult() {
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
  
    questionContainer.style.display = "none";
    resultContainer.innerHTML = `
      <h2>Votre score final est :  <span>${score}/${questions.length}</span></h2>
      <button class="btn btn-outline-success" onclick="location.reload()">Recommencer</button>
    `;
  }
  
  // Démarrer le quiz en affichant la première question
  displayNextQuestion();
  