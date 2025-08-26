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
  services.forEach((s) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <!-- Top Section -->
      <div class="flex justify-between items-start">
        <div class="flex items-center gap-2">
          <img src="${s.icon}" alt="${s.nameEn}" class="w-8 h-8">
        </div>
        <button class="heart-btn text-xl">♡</button>
      </div>

      <!-- Middle Section -->
      <div class="mt-3 mb-4">
        <h3>${s.nameBn}</h3>
        <p>${s.nameEn}</p>
        <p class="text-lg font-bold text-gray-900">${s.number}</p>
        <span class="inline-block mt-1 bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">${s.category}</span>
      </div>

      <!-- Bottom Buttons -->
      <div class="flex gap-3">
        <button class="copy-btn flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-1.5 rounded-md text-sm font-medium">⧉ Copy</button>
        <button class="call-btn flex-1 bg-green-600 hover:bg-green-700 text-white py-1.5 rounded-md text-sm font-medium">📞 Call</button>
      </div>
    `;

    // Heart Button
    card.querySelector(".heart-btn").addEventListener("click", () => {
      heartCount++;
      document.getElementById("heartCount").textContent = heartCount;
    });

    // Copy Button
    card.querySelector(".copy-btn").addEventListener("click", () => {
      navigator.clipboard.writeText(s.number);
      copyCount++;
      document.getElementById("copyCount").textContent = copyCount;
    });

    // Call Button
    card.querySelector(".call-btn").addEventListener("click", () => {
      if (coinCount < 20) {
        alert("Not enough coins!");
        return;
      }
      coinCount -= 20;
      document.getElementById("coinCount").textContent = coinCount;

      const time = new Date().toLocaleTimeString();
      const li = document.createElement("li");
      li.className = "history-item";
      li.innerHTML = `
        <span>${s.nameBn}</span>
        <span class="number">${s.number}</span>
        <span class="time">${time}</span>
      `;
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
