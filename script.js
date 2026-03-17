// Personal Portfolio Website - JavaScript
// Handles navigation, modals, and interactive elements

// ==================== Navigation ====================

document.addEventListener('DOMContentLoaded', function() {
  // Set active navigation link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Initialize modals
  initializeModals();
  
  // Initialize expandable sections
  initializeExpandableSections();
  
  // Initialize mouse tracking (home page only)
  if (currentPage === 'index.html' || currentPage === '') {
    initializeMouseTracking();
  }
});

// ==================== Modal Functionality ====================

function initializeModals() {
  const postits = document.querySelectorAll('.postit');
  const modal = document.getElementById('project-modal');
  const closeButton = document.querySelector('.modal-close');

  if (!modal) return;

  postits.forEach(postit => {
    postit.addEventListener('click', function() {
      const projectData = this.dataset;
      
      // Populate modal with project data
      document.querySelector('.modal-body').innerHTML = `
        <h2>${projectData.name}</h2>
        <div class="modal-gallery">
          ${projectData.images ? projectData.images.split('|').slice(0, 2).map(img => 
            `<img src="${img}" alt="${projectData.name}">`
          ).join('') : ''}
        </div>
        <p>${projectData.description}</p>
        
        ${projectData.technologies ? `
          <div>
            <h3>Technologies</h3>
            <div class="tags">
              ${projectData.technologies.split('|').map(tech => 
                `<span class="tag">${tech}</span>`
              ).join('')}
            </div>
          </div>
        ` : ''}
        
        ${projectData.keywords ? `
          <div>
            <h3>Keywords</h3>
            <div class="tags">
              ${projectData.keywords.split('|').map(kw => 
                `<span class="tag">${kw}</span>`
              ).join('')}
            </div>
          </div>
        ` : ''}
        
        ${projectData.links ? `
          <div class="button-group" style="margin-top: 1.5rem;">
            ${projectData.links.split('|').map(link => {
              const [label, url] = link.split(':');
              return `<a href="${url}" class="btn btn-primary" target="_blank">${label}</a>`;
            }).join('')}
          </div>
        ` : ''}
      `;
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}

// ==================== Expandable Sections ====================

function initializeExpandableSections() {
  const expandButtons = document.querySelectorAll('.expand-button');

  expandButtons.forEach(button => {
    button.addEventListener('click', function() {
      const content = this.closest('.expandable').querySelector('.expandable-content');
      
      // Toggle active state
      this.classList.toggle('active');
      content.classList.toggle('active');
    });
  });
}

// ==================== Mouse Tracking (Home Page) ====================

function initializeMouseTracking() {
  const heroPhoto = document.querySelector('.hero-photo');
  
  if (!heroPhoto) return;

  document.addEventListener('mousemove', function(e) {
    const rect = heroPhoto.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Calculate parallax offset (subtle effect, max 20px movement)
    const parallaxX = (x - 0.5) * 20;
    const parallaxY = (y - 0.5) * 20;

    // Apply transform to background gradient
    const bgElement = heroPhoto.querySelector('div');
    if (bgElement) {
      bgElement.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
    }
  });
}

// ==================== Smooth Scroll ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== Utility Functions ====================

// Close all modals
function closeAllModals() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = 'auto';
}

// Collapse all expandable sections
function collapseAllExpandable() {
  const contents = document.querySelectorAll('.expandable-content');
  const buttons = document.querySelectorAll('.expand-button');
  
  contents.forEach(content => content.classList.remove('active'));
  buttons.forEach(button => button.classList.remove('active'));
}
