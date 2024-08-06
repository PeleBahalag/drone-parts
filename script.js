let toControllerBtn;
let page1;
let page2;
let scrollval = 0;

let data = {
  d1: {
    title: "מנועים",
    subtitle: "תפקידם להמיר את אנרגיית החשמל לעבודה מכאנית.",
    paragraph:
      "ככל שהם עובדים יותר (מזיזים את הרחפן יותר, יש הרבה רוח) הסוללה נגמרת מהר יותר.",
    paragraph2: "",
  },
  d2: {
    title: "פרופלורים",
    subtitle: "",
    paragraph:
      "לפרופלורים חיבור של לבן ושחור. כל זוג פרופלורים מנוגדים (כלומר זוג אחד מסתובב לכיוון מסויים והזוג השני לכיוון השני) כדי ליצור שיווי משקל ברחפן. ניתן לראות על הפרופלור צבע שחור או צבע לבן ועל המנוע המתאים לו גם צבע לבן או שחור.",
    paragraph2: "נבדוק שהם מחוברים היטב ואין שברים.",
  },
  d3: {
    title: "תאורות LED",
    subtitle: "מתריעות על כלי טיס באוויר",
    paragraph: "תאורות LED קדמיות יופיעו בצבע אדום",
    paragraph2: "תאורות LED אחוריות יופיעו בצבע ירוק",
  },
  d4: {
    title: "אנטנות",
    subtitle: "קליטה ושידור בין הרחפן לשלט",
    paragraph: "נמצאות ברגליים של הרחפן.",
    paragraph2: "",
  },
  d5: {
    title: "מצלמה וגימבל",
    subtitle: "הגימבל מקזז את תנועת הרחפן כך שהתמונה במסך תהיה יציבה.",
    paragraph: "* ישנה גומיה המחברת בין גוף הרחפן לגימבל ולמצלמה",
    paragraph2:
      "* כאשר הגימבל ומצלמה בתוך הערכה, קיים גם כיסוי פלסטיק שתפקידו לשמור על המצלמה ועל הגימבל. לא נטיס עם כיסוי זה.",
  },
  d6: {
    title: "מערכת הימנעות ממכשולים",
    subtitle:
      "המערכת מזהה אובייקט מטווח של 2.5 מטר ועוצרת מאובייקט בטווח של 0.5 מטר.",
    paragraph:
      "המערכת משתמשת ב8 מצלמות שלא נועדו לצילום- בחלק הקדמי, צדדי, אחורי ותחתון של הרחפן.",
    paragraph2: "",
  },
  d7: {
    title: "כפתור הפעלה",
    subtitle: "הפעלה וכיבוי של הרחפן",
    paragraph: "",
    paragraph2: "",
  },
  d8: {
    title: "סוללה",
    subtitle: "בMavic2 זמן ההטענה לסוללה אחת הוא שעה ועשרים דקות.",
    paragraph: "נוודא כי הסוללה מלאה ואינה נפוחה/סדוקה או שבורה.",
    paragraph2: "",
  },
  d10: {
    title: "נורית חיווי",
    subtitle: "נמצאת מאחורי הרחפן",
    paragraph: "נורית החיווי מוסרת את סטטוס הרחפן. היא מחולקת ל3 צבעים:",
    paragraph2: "אדום- סוללה נמוכה,  צהוב- תקלה,  ירוק- הכל תקין.",
  },
  c1: {
    title: "אנטנות",
    subtitle: "קליטה ושידור בין השלט לרחפן.",
    paragraph: "האנטנות יכוונו ל90 מעלות.",
    paragraph2: "",
  },
  c2: {
    title: "לחצן הפעלה",
    subtitle: "",
    paragraph: "לחיצה קצרה מציגה את חיווי הטעינה של השלט.",
    paragraph2: "לחיצה קצרה + לחיצה ארוכה מיד אחריה מפעילה את השלט.",
  },
  c3: {
    title: "סטיקים שליטה",
    subtitle: "שולטים ברחפן",
    paragraph: "סטיק ימני- קדימה,אחורה,ימינה,שמאלה.",
    paragraph2: "סטיק שמאלי- למעלה, למטה, סיבוב 360 מעלות לשני הכיוונים.",
  },
  c4: {
    title: "כפתור 5D",
    subtitle: "כפתור קיצורי דרך למטיס.",
    paragraph: "",
    paragraph2: "",
  },
  c5: {
    title: "כפתור הפסקת טיסה",
    subtitle: "(לא בשימוש.)",
    paragraph: "",
    paragraph2: "",
  },
  c6: {
    title: "לחצן חזרה הביתה",
    subtitle: "RTH (Return To Home)",
    paragraph:
      "כאשר לוחצים על לחצן זה הרחפן חוזר הביתה (אל המקום אשר הגדרנו לו כבית).",
    paragraph2:
      "כאשר הסוללה מגיעה ל 20% תופיע הודעה באפליקציה הממליצה לחזור הביתה. כאשר האות מהשלט לרחפן עובד ליותר מ 3 שניות הרחפן אוטומטית חוזר הביתה. באפליקציה ישנה אפשרות לבחור את הגובה שהרחפן יגיע אליו בעת חזרה הביתה. כאשר הרחפן יגיע ל10% הוא ינחת במקום בונמצא. (מצב סוללה קריטית)",
  },
  c7: {
    title: "צד",
    subtitle: "",
    paragraph: "",
    paragraph2: "",
  },
  c8: {
    title: "מחזיק טאבלט",
    subtitle: "",
    paragraph: "הטאבלט ייתפס ויוחזק על ידי חלק זה.",
    paragraph2: "",
  },
  c9: {
    title: "GPS",
    subtitle:
      "P-Position-בתוך המצב ישנם שלושה מצבים (לפי השטח ואינם ניתנים לבחירה):",
    paragraph:
      "GPS-P-GPS פועל חיישנים עובדים, ברומטר עובד. המצד האידיאלי ורק בו נטיס. GPS -P-OPTI לא זמין, חיישנים עובדים, ברומטר עובד. GPS -P-ATTI וחיישנים אינם פועלים, הרחפן יכול להשתמש בברומטר שלו בלבד ובזיכרון מקומי (cache)למציאת מיקום במרחב.",
    paragraph2:
      "לא נטנס כאשר הרחפן נמצא על מצב P-OPTI ו P-ATTI . אם אנחנו כבר באוויר- חובה להביא את הרחטן ישר להנחתה !!",
  },
  u3: {
    title: "מערכת אופטי וויז'יון VPS",
    subtitle: "שתי מצלמות (שלא נועדו  לצילום), הנמצאות בתחתית הרחפן",
    paragraph:
      '"מצלמות" בתמונת זיכרון לרחפן את האזור ממנו המריא, וכאשר יגיע לנחיתה הנחיתה תהיה יותר מדויקת ומהירה.',
    paragraph2: "",
  },
  u4: {
    title: "ברומטר",
    subtitle: "רכיב שנמצא בתוך הרחפן",
    paragraph: "הברומטר מודד את הגובה מנקודת ההמראה של הרחפן.",
    paragraph2: "",
  },
  u2: {
    title: "חיישנים אולטרסונים",
    subtitle: "נותנים את גובה הרחפן המדוייק ביחס לקרקע מעליה נמצא.",
    paragraph: "(עד 10 מטרים.)",
    paragraph2: "",
  },
  s2: {
    title: "החלפת מצבי טיסה:",
    subtitle:
      "P-Mode: המצב בו נטיס, הכלי מסתמך על קליטת לווינים בGPS בכדי לשמור על מקומו באוויר וכך לקבוע נקודת חזרה ממקום ההמראה. מהירות טיסה מקסימאלית- 50 קמש.",
    paragraph:
      " T-Mode: מוגבל במהירות הטיסה ובמהירות העלייה והירידה. מיועד בעיקר לצילום.",
    paragraph2:
      "S-Mode: מצב ספורט, מערכת מניעת התנגשויות איננה פועלת. הרחפן נעזר בGPS ובמערכת החישה. מהירות מקסימאלית: 65 קמש. מיועד להגעה מהירה יותר ליעד, אך הסוללה תתפרק מהר יותר.",
  },
  s3: {
    title: "כפתורי C1 ו-C2",
    subtitle: "2 כפתורי קיצור דרך למטיס",
    paragraph: "נמצאים בגב הרחפן.",
    paragraph2: "",
  },
  s4: {
    title: "גלגלת ימנית וגלגלת שמאלית",
    subtitle: "",
    paragraph:
      "גלגלת ימנית- חוגת בהירות המצלמה. ניתן לשנות את רמה החשיפה לאור.",
    paragraph2: "גלגלת שמאלית- חוגת גימבל- אחראית על העלאת והורדת המצלמה.",
  },
  "drone-btn-count": 8,
  "controller-btn-count": 9,
};
let cardOpened = false;

const scrollReaction = () => {
  console.log(event.deltaY);
  if (event.deltaY < 0) {
    moveToDrone();
  } else {
    moveToController();
  }
};

function disable_scroll_mobile() {
  document.addEventListener("touchmove", preventDefault, false);
}

// Load function
window.addEventListener("load", () => {
  toControllerBtn = document.getElementById("next");
  toDroneBtn = document.getElementById("prev");
  page1 = document.getElementById("page1");
  page2 = document.getElementById("page2");
  page3 = document.getElementById("page3");
  document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("starter").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("starter").style.zIndex = "-1";
    }, 100);
  });
  // Portrait
  if (window.innerHeight > window.innerWidth) {
    // alert("Please use Landscape!");
    addListeners(false);
  }
  // Landscape
  else {
    addListeners(true);
  }

  // Get sessionStorage information
  getSessionInfo();
});

const getSessionInfo = () => {
  if (sessionStorage.getItem("visited") !== "true") {
    sessionStorage.setItem("visited", "false");
  }
  // If visited the page already
  else {
    document.getElementById("starter").style.display = "none";
  }
};

// Add all the listeners to the buttons
const addListeners = (landscape) => {
  // Test
  document.getElementById("test").addEventListener("click", toTest);

  document.getElementById("page1").addEventListener(
    "scroll",
    function () {
      window.scrollTo(0, 0);
    },
    false
  );

  document.getElementById("btd1").addEventListener("click", function () {
    showCard("d1");
  });
  document.getElementById("btd2").addEventListener("click", function () {
    showCard("d2");
  });
  document.getElementById("btd3").addEventListener("click", function () {
    showCard("d3");
  });
  document.getElementById("btd4").addEventListener("click", function () {
    showCard("d4");
  });
  document.getElementById("btd5").addEventListener("click", function () {
    showCard("d5");
  });
  document.getElementById("btd6").addEventListener("click", function () {
    showCard("d6");
  });
  document.getElementById("btd7").addEventListener("click", function () {
    showCard("d7");
  });
  document.getElementById("btd8").addEventListener("click", function () {
    showCard("d8");
  });
  document.getElementById("btd10").addEventListener("click", function () {
    showCard("d10");
  });
  // drone top and under
  document.getElementById("btd9").addEventListener("click", toUnder);
  document.getElementById("btu1").addEventListener("click", toTop);
  //
  document.getElementById("btc1").addEventListener("click", function () {
    showCard("c1");
  });
  document.getElementById("btc2").addEventListener("click", function () {
    showCard("c2");
  });
  document.getElementById("btc3").addEventListener("click", function () {
    showCard("c3");
  });
  document.getElementById("btc4").addEventListener("click", function () {
    showCard("c4");
  });
  document.getElementById("btc5").addEventListener("click", function () {
    showCard("c5");
  });
  document.getElementById("btc6").addEventListener("click", function () {
    showCard("c6");
  });
  // controller side and back
  document.getElementById("btc7").addEventListener("click", toSide);
  document.getElementById("bts1").addEventListener("click", toFront);
  //
  document.getElementById("btc8").addEventListener("click", function () {
    showCard("c8");
  });
  document.getElementById("btc9").addEventListener("click", function () {
    showCard("c9");
  });
  document.getElementById("btu2").addEventListener("click", function () {
    showCard("u2");
  });
  document.getElementById("btu3").addEventListener("click", function () {
    showCard("u3");
  });
  document.getElementById("btu4").addEventListener("click", function () {
    showCard("u4");
  });
  document.getElementById("bts2").addEventListener("click", function () {
    showCard("s2");
  });
  document.getElementById("bts3").addEventListener("click", function () {
    showCard("s3");
  });
  document.getElementById("bts4").addEventListener("click", function () {
    showCard("s4");
  });

  document.getElementById("x").addEventListener("click", hideCard);
  toDroneBtn.addEventListener("click", moveToDrone);
  toControllerBtn.addEventListener("click", moveToController);

  if (landscape) {
    window.addEventListener("wheel", scrollReaction);
  }
};

//
const moveToController = () => {
  page1.style.overFlow = "scroll";
  page2.style.overFlow = "scroll";

  page2.classList.remove("animsecond-playrev");
  page1.classList.remove("animfirst-playrev");

  page2.classList.add("animsecond-play");
  page1.classList.add("animfirst-play");

  page1.classList.add("page1-hidden");
  page1.classList.remove("page1-shown");

  page2.classList.add("page2-shown");
  page2.classList.remove("page2-hidden");
};

//
const moveToDrone = () => {
  page1.style.overFlow = "scroll";
  page2.style.overFlow = "scroll";

  page2.classList.remove("animsecond-play");
  page1.classList.remove("animfirst-play");

  page2.classList.add("animsecond-playrev");
  page1.classList.add("animfirst-playrev");

  page2.classList.add("page2-hidden");
  page2.classList.remove("page2-shown");

  page1.classList.remove("page1-hidden");
  page1.classList.add("page1-shown");
};

// Open the card
const showCard = (btnNum) => {
  cardOpened = true;
  document.getElementById("info-page1").style.display = "block";
  document.getElementById("info-page1").classList.add("showCard");
  document.getElementById("info-page1-ttl").innerText = data[btnNum].title;
  document.getElementById("info-page1-subttl").innerText =
    data[btnNum].subtitle;
  document.getElementById("info-page1-para").innerText = data[btnNum].paragraph;
  document.getElementById("info-page1-para2").innerText =
    data[btnNum].paragraph2;
  if (cardOpened) {
    document.getElementById("body").addEventListener("mouseup", hideCard);
  }
};

// Hide the card
const hideCard = () => {
  cardOpened = false;
  document.getElementById("info-page1").style.display = "none";
  document.getElementById("info-page1").classList.remove("showCard");
};

// Change the picture to side prespective
const toSide = () => {
  page2.style.display = "none";
  page3.style.display = "block";
  window.removeEventListener("wheel", scrollReaction);
};

// Change the picture to front prespective
const toFront = () => {
  page2.classList.remove("animsecond-playrev");
  page2.classList.remove("animsecond-play");
  page3.style.display = "none";
  page2.style.display = "block";
  window.addEventListener("wheel", scrollReaction);
};

// Change the picture to under prespective
const toUnder = () => {
  page1.style.display = "none";
  page4.style.display = "block";
  window.removeEventListener("wheel", scrollReaction);
};

// Change the picture to top prespective
const toTop = () => {
  page4.style.display = "none";
  page1.style.display = "block";
  page1.classList.remove("animfirst-playrev");
  page1.classList.remove("animfirst-play");
  window.addEventListener("wheel", scrollReaction);
};

// Change URL to test.html
const toTest = () => {
  window.location.href = "./test.html";
};
