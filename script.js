let coins = 0;
let luck = 1;
let multiplier = 1;

const rarities = [
  {name: "Common", chance: 45, reward: 5},
  {name: "Uncommon", chance: 25, reward: 15},
  {name: "Rare", chance: 15, reward: 50},
  {name: "Epic", chance: 8, reward: 150},
  {name: "Legendary", chance: 5, reward: 500},
  {name: "Mythic", chance: 1.5, reward: 1500},
  {name: "Divine", chance: 0.5, reward: 5000}
];

const elements = ["🔥 Fire", "💧 Water", "🌿 Nature", "⚡ Lightning", "🌑 Shadow"];

function rollDice() {
  let roll = Math.random() * 100;
  let cumulative = 0;
  let result;
  for (let r of rarities) {
    cumulative += r.chance + luck;
    if (roll <= cumulative) {
      result = r;
      break;
    }
  }

  // Random element flavor
  let element = elements[Math.floor(Math.random() * elements.length)];

  let earned = result.reward * multiplier;
  coins += earned;
  document.getElementById("coins").innerText = coins;
  log(`Rolled ${result.name} (${element})! Earned ${earned} coins.`);
}

function buyUpgrade(type) {
  if (type === "luck" && coins >= 50) {
    coins -= 50;
    luck += 0.5;
    log("Upgraded Luck!");
  } else if (type === "multiplier" && coins >= 100) {
    coins -= 100;
    multiplier += 0.5;
    log("Upgraded Multiplier!");
  } else {
    log("Not enough coins!");
  }
  document.getElementById("coins").innerText = coins;
}

function log(message) {
  const logDiv = document.getElementById("log");
  logDiv.innerHTML = `<p>${message}</p>` + logDiv.innerHTML;
}
