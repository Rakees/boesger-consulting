// Minimalist Modal Popup for Resume Section
// Handles open/close and content injection

console.log('popup.js loaded'); // Debug: Script geladen

document.addEventListener('DOMContentLoaded', function () {
  // Tailwind-Klassen-Whitelist für PurgeCSS/Tailwind (nicht entfernen!):
  // fixed hidden z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50
  // bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-2xl w-full mx-4 p-6 relative animate-fade-in
  // absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl font-bold
  // text-gray-900 dark:text-gray-100

  let modal = document.getElementById('resume-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'resume-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 hidden modal-backdrop';
    modal.innerHTML = `
      <div class="modal-glass rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] mx-4 relative animate-fade-in overflow-hidden">
        <div class="flex justify-between items-center p-4 border-b border-white/20">
          <div class="flex-1"></div>
          <button id="resume-modal-close" class="close-button w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0">&times;</button>
        </div>
        <div id="resume-modal-content" class="modal-content p-6 overflow-y-auto"></div>
      </div>
    `;
    document.body.appendChild(modal);
  } else {
    // Fallback: Modal immer verstecken beim Laden
    modal.classList.add('hidden');
  }

  let scrollY = 0;
  function openModal(content) {
    document.getElementById('resume-modal-content').innerHTML = content;
    modal.classList.remove('hidden');
    // Scroll-Lock ohne Scrollbar-Ausblendung
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
  }
  function closeModal() {
    modal.classList.add('hidden');
    // Scroll-Lock zurücksetzen
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollY);
  }
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  const closeBtn = document.getElementById('resume-modal-close') || modal.querySelector('#resume-modal-close');
  if (closeBtn) closeBtn.onclick = closeModal;
  window.resumeModal = openModal;

  // Fallback: Modal immer verstecken, falls es sichtbar ist
  modal.classList.add('hidden');
});

// Usage: window.resumeModal('<b>Title</b><br>Details...');
