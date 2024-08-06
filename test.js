// Total amount of questions, needs to be changed if the amount of question changes
let questionAmount = 10;
// Questions json data
let questions = {
  1: {
    q: "מה ההבדלים בין המצבים של נורת החיווי ברחפן?",
    a1: "אדום- תקין, צהוב- סוללה נמוכה, ירוק- הכל תקין",
    a2: "אדום- נחיתה, צהוב- סוללה נמוכה, ירוק- הכל תקין",
    a3: "אדום- נחיתה, צהוב- תקלה, ירוק- הכל תקין",
    a4: "אדום-סוללה נמוכה, צהוב- תקלה, ירוק- הכל תקין",
    correct: "a4",
    chosen: "",
  },

  2: {
    q: "מהו תפקיד הברומטר?",
    a1: "מודד את המהירות הרוח",
    a2: "מודד את הגובה של הרחפן מנקודת ההמראה",
    a3: "מודד מרחק מעצמים עד 13 מ׳ באוויר",
    a4: "מפיץ אור ב-5 מטר בהמראה ובנחיתה",
    correct: "a2",
    chosen: "",
  },
  3: {
    q: "מהם מרחקי הבטיחות במערכת הימנעות ממכשולים?",
    a1: "0.5 מתריאה, 2.5 עוצר לפני האובייקט",
    a2: "0.5 מתריאה, 2.0 עוצר לפני האובייקט",
    a3: "2.5 מתריאה, 0.5 עוצר לפני האובייקט",
    a4: "2.5 מתריאה, 1.5 עוצר לפני האובייקט",
    correct: "a3",
    chosen: "",
  },
  4: {
    q: "מהו תפקידו של הגימבל?",
    a1: "לייצב ולקזז את תנועות המצלמה",
    a2: "להחזיק את המצלמה",
    a3: "למדוד את הגובה מהנק׳ שהרחפן המריא ממנה",
    a4: "לשמור על המצלמה מלהשבר",
    correct: "a1",
    chosen: "",
  },
  5: {
    q: "מהי המהירות המקסימלית במצב P?",
    a1: '72 קמ"ש',
    a2: '60 קמ"ש',
    a3: '18 קמ"ש',
    a4: '65 קמ"ש',
    correct: "a4",
    chosen: "",
  },
  6: {
    q: "באיזה זווית אנטנות השלט צריכות להיות?",
    a1: "45 מעלות",
    a2: "180 מעלות",
    a3: "90 מעלות",
    a4: "75 מעלות",
    correct: "a3",
    chosen: "",
  },
  7: {
    q: "מה המהירות של המצב S ברחפן?",
    a1: "50 קמ״ש",
    a2: "72 קמ״ש",
    a3: "65 קמ״ש",
    a4: "18 קמ״ש",
    correct: "a2",
    chosen: "",
  },
  8: {
    q: "באיזה מצב נטיס את הרחפן?",
    a1: "PGPS",
    a2: "PATTI",
    a3: "POPTI",
    a4: "מצב T",
    correct: "a1",
    chosen: "",
  },
  9: {
    q: "מה בודקים בפרופלורים?",
    a1: "שחור שחור, לבן ללבן באלכסון",
    a2: "לא סדוק, שבור",
    a3: "מחוברים כמו שצריך לרחפן",
    a4: "כל התשובות נכונות",
    correct: "a4",
    chosen: "",
  },
  10: {
    q: "מה תפקיד כפתורי C1 וC2?",
    a1: "לחצני חזרה הביתה",
    a2: "לחצני הפסקת טיסה",
    a3: "לחצני קיצור דרך",
    a4: "לחצן להחלפת מצבים של הרחפן",
    correct: "a3",
    chosen: "",
  },
};

let currentQuestion;
let currentQuestionNumber = 1;
let questionNumbers;
let questionTitle;
let countAnswered = 0;
let allAnswered = false;
let chosenAnswers = {};
let color = false;

window.addEventListener("load", () => {
  // Session Storage clears and set visited page to true
  sessionStorage.clear();
  sessionStorage.setItem("visited", "true");
  // Sets listener - back to the lomda
  document.getElementById("lomda").addEventListener("click", () => {
    window.location.href = "./index.html";
  });
  // Shows the explaination paragraph and start button
  document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("test-starter").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("test-starter").style.zIndex = "-1";
    }, 100);
  });
  //
  startTest();
});

// Calls listeners for buttons
const startTest = () => {
  // Configure consts
  const send = document.getElementById("send"); // כפתור הגש
  const send2 = document.getElementById("send2"); // כפתור הגש כאשר לא כל השאלות נענו
  const finished = document.getElementById("finished"); // חלון סיום
  const inside = document.getElementById("inside"); // תוכן חלון סיום
  const confirm = document.getElementById("confirm"); // תוכן חלון סיום כאשר לא כל השאלון נענו
  const checkTestBtn = document.getElementById("checkTest"); //כפתור בדיקת מבחן

  // Add the nesessary listeners
  send.addEventListener("click", sendTest);
  send2.addEventListener("click", () => {
    send.style.display = "none";
    finished.style.display = "block";
    inside.style.display = "block";
    confirm.style.display = "none";
    checkTestBtn.classList.remove("hidden");
    checkTest();
  });
  document.getElementById("close").addEventListener("click", () => {
    document.getElementById("send").style.display = "block";
    finished.style.display = "none";
  });
  checkTestBtn.addEventListener("click", () => {
    colorAnswers();
    finished.style.display = "none";
  });

  //
  questionTitle = document.getElementById("question");
  questionNumbers = document.getElementsByClassName("qc");

  // Set up the first question
  questionTitle.innerText = questions[currentQuestionNumber].q;
  document.getElementById(
    "ans1"
  ).innerHTML = `<span class="pick"> ▫ </span>${questions[currentQuestionNumber].a1}`;
  document.getElementById(
    "ans2"
  ).innerHTML = `<span class="pick"> ▫ </span>${questions[currentQuestionNumber].a2}`;
  document.getElementById(
    "ans3"
  ).innerHTML = `<span class="pick"> ▫ </span>${questions[currentQuestionNumber].a3}`;
  document.getElementById(
    "ans4"
  ).innerHTML = `<span class="pick"> ▫ </span>${questions[currentQuestionNumber].a4}`;

  // Set up the other questions
  currentQuestion = questionNumbers[0];
  document.getElementById("ans1").addEventListener("click", chooseAnswer);
  document.getElementById("ans2").addEventListener("click", chooseAnswer);
  document.getElementById("ans3").addEventListener("click", chooseAnswer);
  document.getElementById("ans4").addEventListener("click", chooseAnswer);
  for (let i = 0; i < questionNumbers.length; i++) {
    questionNumbers[i].addEventListener("click", () => {
      document.getElementById("questionCount").innerText = `${
        i + 1
      }/${questionAmount}`;
      // Load previous answer
      //
      if (questions[currentQuestionNumber].chosen !== "") {
        questions[currentQuestionNumber].chosen.classList.remove("chosen");
        questions[
          currentQuestionNumber
        ].chosen.children[0].innerHTML = `<span class="pick"> ▫ </span>`;
      }
      currentQuestionNumber = i + 1;
      chooseQuestion(event);
    });
  }
};

// Choose question function
const chooseQuestion = (event) => {
  currentQuestion.classList.remove("current");
  event.currentTarget.classList.add("current");

  currentQuestion = event.currentTarget;
  // Change title and questions
  questionTitle.innerText = questions[currentQuestionNumber].q;
  document.getElementById(
    "ans1"
  ).innerHTML = `<span class="pick"> ▫ </span>${questions[currentQuestionNumber].a1}`;
  document.getElementById(
    "ans2"
  ).innerHTML = `<span class="pick"> ▫ </span>${questions[currentQuestionNumber].a2}`;
  document.getElementById(
    "ans3"
  ).innerHTML = `<span class="pick"> ▫ </span>${questions[currentQuestionNumber].a3}`;
  document.getElementById(
    "ans4"
  ).innerHTML = `<span class="pick"> ▫ </span>${questions[currentQuestionNumber].a4}`;
  // Load previous answer
  if (questions[currentQuestionNumber].chosen !== "") {
    questions[currentQuestionNumber].chosen.classList.add("chosen");
    questions[
      currentQuestionNumber
    ].chosen.children[0].innerHTML = `<span class="pick"> ▪ </span>`;
  }
  if (color) {
    const lastAns = sessionStorage.getItem(`${currentQuestionNumber}`);
    const correctAns = questions[currentQuestionNumber].correct.replace(
      "a",
      ""
    );

    for (let i = 1; i < 5; i++) {
      document.getElementById(`ans${i}`).className = "";
      document.getElementById(`ans${i}`).classList.add("answer");
      // Show the correct answer
      document.getElementById(`ans${correctAns}`).classList.add("right");

      if (lastAns === null) {
        console.log("we might have a problem");
      } else if (lastAns === correctAns) {
        document.getElementById(`ans${lastAns}`).classList.add("right");
      } else {
        document.getElementById(`ans${lastAns}`).classList.add("wrong");
      }
    }
  }
};

const chooseAnswer = (event) => {
  if (!color && event.target.id !== "") {
    event.currentTarget.classList.add("chosen");
    event.currentTarget.children[0].innerHTML = `<span class="pick"> ▪ </span>`;
    if (questions[currentQuestionNumber].chosen !== "") {
      questions[currentQuestionNumber].chosen.classList.remove("chosen");
      questions[
        currentQuestionNumber
      ].chosen.children[0].innerHTML = `<span class="pick"> ▫ </span>`;
    } else {
      countAnswered++;
    }
    questions[currentQuestionNumber].chosen = event.currentTarget;
    currentQuestion.classList.add("answered");
    if (countAnswered === 10) {
      allAnswered = true;
      checkTest();
    }
    //   chosenAnswers
    sessionStorage.setItem(
      `${currentQuestionNumber}`,
      `${event.target.id.replace("ans", "")}`
    );
  }
};

// Send test
const sendTest = () => {
  send.style.display = "none";
  finished.style.display = "block";
  // If not all the questions had been answered
  if (!allAnswered) {
    document.getElementById("confirm").style.display = "block";
    inside.style.display = "none";
  } else {
    document.getElementById("confirm").style.display = "none";
    inside.style.display = "block";
    document.getElementById("checkTest").classList.remove("hidden");
  }
};

// Check test answers
const checkTest = () => {
  let score = 0;
  for (let i = 0; i < 10; i++) {
    let curr = i + 1;

    if (questions[curr].chosen !== "") {
      if (
        questions[curr].chosen.getAttribute("data-ans") ==
        questions[curr].correct
      ) {
        score = score + 10;
      }
    }
    document.getElementById("scoreNum").innerText = score;
    document.getElementById("scoreH1").classList.add("right");
    document.getElementById("scoreH1").classList.remove("wrong");
    // 70 and less
    if (score < 80) {
      document.getElementById("message").innerText = "יפה, אך יש מקום לשיפור";
      document.getElementById("scoreH1").classList.add("right");
      document.getElementById("scoreH1").classList.remove("wrong");
      // 50 and less
      if (score < 60) {
        document.getElementById("message").innerText = "חזור על החומר...";
        document.getElementById("scoreH1").classList.add("wrong");
        document.getElementById("scoreH1").classList.remove("right");
        // 20 and less
        if (score < 30) {
          document.getElementById("message").innerText = "סכנת התרסקות!";
          document.getElementById("scoreH1").classList.add("wrong");
          document.getElementById("scoreH1").classList.remove("right");
        }
      }
    }
  }
};

const colorAnswers = () => {
  const answers = document.querySelectorAll(".answer");

  for (const ans of answers) {
    ans.style.cssText = `color: black; cursor: auto;`;
  }
  color = true;
  for (let i = 0; i < questionNumbers.length; i++) {
    questionNumbers[i].replaceWith(questionNumbers[i].cloneNode(true));
  }
  for (let i = 0; i < questionNumbers.length; i++) {
    questionNumbers[i].addEventListener("click", () => {
      document.getElementById("questionCount").innerText = `${
        i + 1
      }/${questionAmount}`;
      // Load previous answer
      //
      if (questions[currentQuestionNumber].chosen !== "") {
        questions[currentQuestionNumber].chosen.classList.remove("chosen");
        questions[
          currentQuestionNumber
        ].chosen.children[0].innerHTML = `<span class="pick"> ▫ </span>`;
      }
      currentQuestionNumber = i + 1;
      chooseQuestion(event);
    });
  }

  // Check which questions' answers are correct.
  for (let i = 0; i < document.getElementsByClassName("qc").length; i++) {
    if (sessionStorage.getItem(`${i + 1}`) === null) {
      document.getElementsByClassName("qc")[i].classList.remove("wrongQ");
      document.getElementsByClassName("qc")[i].classList.remove("rightQ");
    } else if (
      sessionStorage.getItem(`${i + 1}`) ===
      questions[i + 1].correct.replace("a", "")
    ) {
      document.getElementsByClassName("qc")[i].classList.add("rightQ");
    } else {
      document.getElementsByClassName("qc")[i].classList.add("wrongQ");
    }
  }

  // Disable current question pick and set the first question as the one shown
  for (const q of document.getElementsByClassName("current")) {
    q.classList.remove("current");
  }
  document.getElementById("firstQ").click();
};
