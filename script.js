const notes = {
  birthday: [{ label: "birthday star", text: "Happy 20th birthday, Jemi. I love you so much, and I hope today makes you feel as cherished as you make other people feel. You are such a beautiful light in this world, and I’m so grateful I get to know you, love you, and watch you become even more of the person God created you to be." }],
  comfort: [
    { label: "for soft days", text: "Jemi, you do not have to be strong every second. You are allowed to rest, to breathe, to be held by love, and to let God carry what feels too heavy today." },
    { label: "for soft days", text: "You are loved on the days you shine and on the days you feel quiet. Nothing about a hard day makes you less worthy of tenderness." },
    { label: "for soft days", text: "I hope you remember that you are not alone. You have people who love you deeply, and more than that, you have a God who sees you completely and still calls you beloved." }
  ],
  love: [
    { label: "with love", text: "I love the way you make life feel warmer. You have this rare kind of energy that makes people feel seen, included, and lighter just by being around you." },
    { label: "with love", text: "Jemi, loving you as a friend is such an easy thing. You are joy, chaos, softness, faith, laughter, and light all in one person." },
    { label: "with love", text: "I hope you never forget how special you are to me. You are not just someone I know; you are someone I genuinely thank God for." }
  ],
  anxious: [
    { label: "when thoughts feel loud", text: "You do not have to figure out your entire future tonight. God is already in the days you have not reached yet. For now, breathe and take the next gentle step." },
    { label: "when thoughts feel loud", text: "Your thoughts may be racing, but they are not the boss of you. You are safe in this moment, and you have made it through uncertain things before." },
    { label: "when thoughts feel loud", text: "Jemi, let tomorrow stay in God’s hands for tonight. You are allowed to rest before every answer makes sense." }
  ],
  motivation: [
    { label: "for courage", text: "You are capable of more than you think. God did not place all this light, personality, and strength in you by accident." },
    { label: "for courage", text: "You are only 20, Jemi. You are not behind. You are becoming, learning, growing, and stepping into a life that still has so much beauty ahead." },
    { label: "for courage", text: "Keep going, not because you have anything to prove, but because you deserve to see the beautiful things waiting on the other side of your courage." }
  ],
  soft: [
    { label: "a little reminder", text: "You are allowed to be a work in progress. You are allowed to grow slowly, change gently, and still be deeply loved through every version of yourself." },
    { label: "a little reminder", text: "There is something so beautiful about your heart. Even when you do not notice it, the way you care for people leaves little traces of love everywhere." },
    { label: "a little reminder", text: "You do not have to earn love by being perfect. You are already worthy of kindness, patience, celebration, and peace." }
  ],
  faith: [
    { label: "faith note", text: "The same God who has carried you this far is not going to leave you now. You are seen, known, protected, and loved more deeply than you can imagine." },
    { label: "faith note", text: "Jemi, God’s timing is not rushed, but it is never careless. May this year remind you that He is writing something beautiful with your life." },
    { label: "faith note", text: "When you feel unsure of yourself, remember that God was sure when He made you. You are not an accident. You are loved with intention." }
  ]
};

const starTypes = [
  { type: "comfort", img: "star-pink.png" },
  { type: "love", img: "star-rose.png" },
  { type: "anxious", img: "star-blue.png" },
  { type: "soft", img: "star-cream.png" },
  { type: "motivation", img: "star-gold.png" },
  { type: "faith", img: "star-lavender.png" }
];

const stars = [
  // x, y, size, typeIndex, rotation, z
  [50, 12, 92, "birthday", -4, 90],
  [27, 18, 84, 0, -12, 18], [45, 18, 86, 1, 10, 20], [64, 18, 84, 2, -8, 22], [78, 21, 82, 3, 12, 24],
  [18, 31, 88, 4, 16, 26], [36, 31, 90, 5, -15, 28], [54, 31, 92, 0, 9, 30], [72, 31, 90, 1, -12, 32], [86, 33, 84, 2, 15, 34],
  [13, 44, 88, 3, -9, 36], [29, 44, 92, 4, 12, 38], [47, 44, 94, 5, -16, 40], [65, 44, 92, 0, 10, 42], [82, 45, 88, 1, -10, 44],
  [20, 57, 92, 2, 14, 46], [38, 57, 96, 3, -13, 48], [56, 57, 98, 4, 8, 50], [74, 58, 94, 5, -16, 52], [88, 59, 90, 0, 11, 54],
  [12, 70, 92, 1, -12, 56], [29, 70, 98, 2, 13, 58], [47, 70, 100, 3, -9, 60], [65, 70, 98, 4, 15, 62], [83, 71, 94, 5, -14, 64],
  [21, 83, 96, 0, 10, 66], [39, 83, 102, 1, -15, 68], [57, 83, 104, 2, 12, 70], [75, 83, 100, 3, -10, 72],
  [32, 94, 98, 4, 13, 74], [50, 94, 104, 5, -14, 76], [68, 94, 98, 0, 10, 78]
];

const starsLayer = document.getElementById("starsLayer");
const overlay = document.getElementById("overlay");
const paperStrip = document.getElementById("paperStrip");
const openedStar = document.getElementById("openedStar");
const noteLabel = document.getElementById("noteLabel");
const noteText = document.getElementById("noteText");
const closeBtn = document.getElementById("closeBtn");

function makeStars() {
  stars.forEach(([x, y, size, typeKey, rotation, z]) => {
    const btn = document.createElement("button");
    const img = document.createElement("img");

    let type;
    let src;

    if (typeKey === "birthday") {
      type = "birthday";
      src = "star-purple-birthday.png";
      btn.className = "star-btn birthday-star";
    } else {
      const info = starTypes[typeKey % starTypes.length];
      type = info.type;
      src = info.img;
      btn.className = "star-btn";
    }

    btn.dataset.type = type;
    btn.dataset.src = src;
    btn.style.left = `${x}%`;
    btn.style.top = `${y}%`;
    btn.style.setProperty("--s", `${size}px`);
    btn.style.setProperty("--r", `${rotation}deg`);
    btn.style.zIndex = String(z);
    btn.setAttribute("aria-label", type === "birthday" ? "birthday lucky star" : "lucky star");

    img.src = `assets/${src}`;
    img.alt = "";

    btn.appendChild(img);
    btn.addEventListener("click", () => openNote(btn));
    starsLayer.appendChild(btn);
  });
}

function openNote(star) {
  const type = star.dataset.type;
  const options = notes[type];
  const selected = options[Math.floor(Math.random() * options.length)];

  noteLabel.textContent = selected.label;
  noteText.textContent = selected.text;
  openedStar.src = `assets/${star.dataset.src}`;

  overlay.classList.remove("hidden");
  paperStrip.classList.remove("paper-strip");
  void paperStrip.offsetWidth;
  paperStrip.classList.add("paper-strip");

  if (type === "birthday") playChime();
}

closeBtn.addEventListener("click", () => overlay.classList.add("hidden"));
overlay.addEventListener("click", (event) => { if (event.target === overlay) overlay.classList.add("hidden"); });

function playChime() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audio = new AudioContext();
  [523.25, 659.25, 783.99].forEach((frequency, index) => {
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0, audio.currentTime + index * 0.12);
    gain.gain.linearRampToValueAtTime(0.075, audio.currentTime + index * 0.12 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + index * 0.12 + 0.5);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start(audio.currentTime + index * 0.12);
    oscillator.stop(audio.currentTime + index * 0.12 + 0.55);
  });
}

makeStars();
