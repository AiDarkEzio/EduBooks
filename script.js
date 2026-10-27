document.addEventListener('DOMContentLoaded', () => {
  // 1. REAL-TIME SEARCH & FILTER FOR BOOK CARDS
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const bookCards = document.querySelectorAll('.book-card');
  const noResultsMsg = document.getElementById('noResults');

  function filterBooks() {
    const query = searchInput.value.toLowerCase().trim();
    let matchesCount = 0;

    bookCards.forEach(card => {
      const title = card.getAttribute('data-title').toLowerCase();
      const category = card.getAttribute('data-category').toLowerCase();

      if (title.includes(query) || category.includes(query)) {
        card.style.display = 'flex';
        matchesCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (matchesCount === 0) {
      noResultsMsg.style.display = 'block';
    } else {
      noResultsMsg.style.display = 'none';
    }
  }

  searchInput.addEventListener('input', filterBooks);
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    filterBooks();
    document.getElementById('books').scrollIntoView({ behavior: 'smooth' });
  });

  const viewAllBtn = document.getElementById('viewAllBtn');
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', (e) => {
      e.preventDefault();
      searchInput.value = '';
      filterBooks();
      document.getElementById('books').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 2. NEWSLETTER FORM VALIDATION (Without server submission)
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterMessage = document.getElementById('newsletterMessage');

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = newsletterEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
      showMessage('Please enter an email address before subscribing.', 'error');
      newsletterEmail.focus();
    } else if (!emailRegex.test(emailValue)) {
      showMessage('Please enter a valid email address (e.g. user@example.com).', 'error');
      newsletterEmail.focus();
    } else {
      showMessage('Thank you for subscribing! Welcome to our learning community.', 'success');
      newsletterForm.reset();

      setTimeout(() => {
        newsletterMessage.textContent = '';
        newsletterMessage.className = 'feedback-msg';
      }, 5000);
    }
  });

  function showMessage(text, type) {
    newsletterMessage.textContent = text;
    newsletterMessage.className = `feedback-msg ${type}`;
  }


  // 3. BOOK DETAILS MODAL INTERACTION (DOM Manipulation)
  const modal = document.getElementById('bookModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalAuthor = document.getElementById('modalAuthor');
  const modalIsbn = document.getElementById('modalIsbn');
  const modalDesc = document.getElementById('modalDesc');
  const modalConfirmBtn = document.getElementById('modalConfirmBtn');
  const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

  viewDetailsButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.book-card');
      
      modalTitle.textContent = card.getAttribute('data-title');
      modalCategory.textContent = card.getAttribute('data-category');
      modalAuthor.textContent = card.getAttribute('data-author');
      modalIsbn.textContent = card.getAttribute('data-isbn');
      modalDesc.textContent = card.getAttribute('data-desc');

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  modalCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  modalConfirmBtn.addEventListener('click', () => {
    alert(`Success! You have added "${modalTitle.textContent}" to your reading shelf.`);
    closeModal();
  });

  // 4. MOBILE NAVIGATION TOGGLE & ACTIVE STATE
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      navMenu.classList.remove('show');
    });
  });
});