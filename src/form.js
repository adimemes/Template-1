document.getElementById("formUcapan").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("inputNama").value;
  const ucapan = document.getElementById("inputUcapan").value;
  const kehadiran = document.querySelector(
    'input[name="kehadiran"]:checked'
  ).value;

  const messageHTML = `
        <div class="bg-black/60 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white mb-4">
            <div class="font-semibold text-[#FFE2B9]">${nama}</div>
            <div class="mt-1">${ucapan}</div>
            <div class="mt-2 text-sm text-white/70">
                <span class="inline-block px-2 py-1 bg-[#FFE2B9]/10 rounded-full">${kehadiran}</span>
                <span class="ml-2">${new Date().toLocaleString()}</span>
            </div>
        </div>
    `;

  document
    .getElementById("listUcapan")
    .insertAdjacentHTML("afterbegin", messageHTML);
  this.reset();
});

// Save to localStorage
function saveMessages() {
    localStorage.setItem('messages', JSON.stringify(messages));
}

// Load from localStorage
function loadMessages() {
    const saved = localStorage.getItem('messages');
    if (saved) {
        messages = JSON.parse(saved);
        messages.forEach(message => displayMessage(message));
    }
}

// Call loadMessages on page load
document.addEventListener('DOMContentLoaded', loadMessages);

// Add saveMessages() after messages.push() in form submit handler