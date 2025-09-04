function rateMundu() {
  const type = document.getElementById("munduType").value;
  let result = "";
  switch(type) {
    case "velcro": result = "⚡ Velcro power! Lasts 6 hours of tug-of-war."; break;
    case "elastic": result = "😂 Noob choice. Slips in 10 minutes."; break;
    case "belt": result = "🕺 Secure but stylish. Lasts 3 hours of dancing."; break;
    case "double": result = "💪 Traditional beast. Holds 12+ hours."; break;
  }
  document.getElementById("munduResult").innerText = result;
}

function rateSadya() {
  const ratings = [
    "10/10 🍌 Banana perfectly aligned!",
    "6/10 🍛 Payasam overflow detected.",
    "8/10 🌸 Curry placement could be neater.",
    "3/10 🚨 Papadam crushed!"
  ];
  const random = ratings[Math.floor(Math.random() * ratings.length)];
  document.getElementById("sadyaResult").innerText = random;
}

function translateGreeting() {
  const greetings = [
    "ഓണം ആശംസകൾ! 🎉",
    "സ്നേഹപൂർവ്വം പൊന്നോണം ആശംസകൾ 🌼",
    "സദ്യയും സന്തോഷവും നിറഞ്ഞ ഓണം വരട്ടെ 🍛",
    "മാവേലിയുടെ കാലം പോലെ സമൃദ്ധമായ ഓണം വരട്ടെ 👑"
  ];
  const random = greetings[Math.floor(Math.random() * greetings.length)];
  document.getElementById("malGreeting").innerText = random;
}
