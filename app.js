//javascript codes and functionalities

const services = [
  { nameBn: "জাতীয় জরুরি সেবা", nameEn: "National Emergency", number: "999", category: "সার্বজনীন", icon: "assets/emergency.png" },
  { nameBn: "পুলিশ", nameEn: "Police", number: "999", category: "পুলিশ", icon: "assets/police.png" },
  { nameBn: "ফায়ার সার্ভিস", nameEn: "Fire Service", number: "999", category: "দমকল", icon: "assets/fire-service.png" },
  { nameBn: "অ্যাম্বুলেন্স", nameEn: "Ambulance", number: "1994-999999", category: "স্বাস্থ্য", icon: "assets/ambulance.png" },
  { nameBn: "নারী ও শিশু সহায়তা", nameEn: "Women & Child Helpline", number: "109", category: "সামাজিক", icon: "assets/emergency.png" },
  { nameBn: "দুদক", nameEn: "Anti-Corruption", number: "106", category: "সরকারি", icon: "assets/emergency.png" },
  { nameBn: "বিদ্যুৎ বিভ্রাট", nameEn: "Electricity Outage", number: "16216", category: "বিদ্যুৎ", icon: "assets/emergency.png" },
  { nameBn: "ব্র্যাক", nameEn: "Brac", number: "16445", category: "এনজিও", icon: "assets/brac.png" },
  { nameBn: "বাংলাদেশ রেলওয়ে", nameEn: "Bangladesh Railway", number: "163", category: "পরিবহন", icon: "assets/Bangladesh-Railway.png" }
];

// Initial counts

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const cardContainer = document.getElementById("cardContainer");
const historyList = document.getElementById("historyList");

// Render cards
function renderCards() {
  cardContainer.innerHTML = "";
  services.forEach((s, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <img src="${s.icon}" class="w-8 h-8">
        </div>
        <button class="heart-btn">🤍</button>
      </div>
      <div class="my-2">
        <h3>${s.nameBn}</h3>
        <p>${s.nameEn}</p>
        <p class="font-bold">${s.number}</p>
        <span class="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">${s.category}</span>
      </div>
      <div class="flex gap-2 mt-2">
        <button class="copy-btn">📋 Copy</button>
        <button class="call-btn">📞 Call</button>
      </div>
    `;

    // Heart
    card.querySelector(".heart-btn").addEventListener("click", () => {
      heartCount++;
      document.getElementById("heartCount").textContent = heartCount;
    });

    // Copy
    card.querySelector(".copy-btn").addEventListener("click", () => {
      navigator.clipboard.writeText(s.number);
      alert(`Copied: ${s.number}`);
      copyCount++;
      document.getElementById("copyCount").textContent = copyCount;
    });

    // Call
    card.querySelector(".call-btn").addEventListener("click", () => {
      if (coinCount < 20) {
        alert("Not enough coins!");
        return;
      }
      coinCount -= 20;
      document.getElementById("coinCount").textContent = coinCount;
      const time = new Date().toLocaleTimeString();
      alert(`Calling ${s.nameEn} at ${s.number}`);
      const li = document.createElement("li");
      li.textContent = `${s.nameBn} (${s.number}) - ${time}`;
      historyList.prepend(li);
    });

    cardContainer.appendChild(card);
  });
}

renderCards();

// Clear history
document.getElementById("clearHistory").addEventListener("click", () => {
  historyList.innerHTML = "";
});

