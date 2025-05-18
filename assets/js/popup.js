// Minimalist Modal Popup for Resume Section
// Handles open/close and content injection

(function () {
  function initResumeModal() {
    if (document.getElementById('resume-modal')) return; // Doppelte Initialisierung verhindern
    const modal = document.createElement('div');
    modal.id = 'resume-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden';
    modal.innerHTML = `
      <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-2xl w-full mx-4 p-6 relative animate-fade-in">
        <button id="resume-modal-close" class="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl font-bold">&times;</button>
        <div id="resume-modal-content" class="text-gray-900 dark:text-gray-100"></div>
      </div>
    `;
    document.body.appendChild(modal);

    function openModal(content) {
      document.getElementById('resume-modal-content').innerHTML = content;
      // Verhindere Layout-Shift beim Ausblenden der Scrollbar
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = scrollBarWidth + 'px';
      }
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
    function closeModal() {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      document.body.style.paddingRight = '';
    }
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.getElementById('resume-modal-close').onclick = closeModal;
    window.resumeModal = openModal;
  }

  // iOS/Safari: Fallback auf window.onload, falls DOMContentLoaded zu früh feuert
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initResumeModal);
    window.addEventListener('load', function () {
      setTimeout(initResumeModal, 100); // Fallback, falls Modal noch nicht da
    });
  } else {
    initResumeModal();
  }
})();

// Usage: window.resumeModal('<b>Title</b><br>Details...');
