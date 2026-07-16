// ===== ANIMATION D'APPARITION AU DÉFILEMENT =====
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// ===== GESTION DU FORMULAIRE DE CONTACT =====
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Récupérer les données du formulaire
      const nom = form.querySelector('input[placeholder="Votre nom"]').value;
      const email = form.querySelector('input[placeholder="Votre e-mail"]').value;
      const sujet = form.querySelector('input[placeholder="Sujet de votre demande"]').value;
      const message = form.querySelector('textarea').value;
      
      // Validation simple
      if (!nom || !email || !sujet || !message) {
        alert('❌ Veuillez remplir tous les champs');
        return;
      }
      
      // Message pour WhatsApp
      const whatsappMessage = `Bonjour,\n\nNom: ${nom}\nEmail: ${email}\nSujet: ${sujet}\n\nMessage:\n${message}`;
      
      // URL WhatsApp
      const phoneNumber = '237691806049';
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      // Ouvrir WhatsApp
      window.open(whatsappURL, '_blank');
      
      // Réinitialiser le formulaire
      form.reset();
      
      alert('✅ Redirection vers WhatsApp...');
    });
  }
});

// ===== SMOOTH SCROLL POUR LES LIENS DE NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== EFFET PARALLAXE SUR LE HERO =====
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  }
});

// ===== EFFET DE DÉFILEMENT NAVBAR =====
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    header.style.boxShadow = '0 4px 20px rgba(255, 215, 0, 0.15)';
  } else {
    header.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.1)';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===== ACTIVATION DES LIENS NAV =====
window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// ===== FONCTION POUR PARTAGER SUR LES RÉSEAUX =====
function shareOnSocial(platform) {
  const currentURL = window.location.href;
  const text = "Découvrez Sahirus Deejay Studio - Chansons personnalisées, DJ, Montage vidéo!";
  
  let shareURL = '';
  
  switch(platform) {
    case 'facebook':
      shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`;
      break;
    case 'twitter':
      shareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}&text=${encodeURIComponent(text)}`;
      break;
    case 'whatsapp':
      shareURL = `https://wa.me/?text=${encodeURIComponent(text + " " + currentURL)}`;
      break;
  }
  
  if (shareURL) {
    window.open(shareURL, '_blank');
  }
}

// ===== GESTION RESPONSIVE MENU =====
function toggleMobileMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

// ===== COMPTEUR DE VISITE (localStorage) =====
const trackVisitor = () => {
  let visitCount = localStorage.getItem('visitCount');
  
  if (visitCount === null) {
    visitCount = 1;
  } else {
    visitCount = parseInt(visitCount) + 1;
  }
  
  localStorage.setItem('visitCount', visitCount);
  console.log(`👋 Vous avez visité le site ${visitCount} fois`);
};

// ===== INITIALISATION =====
console.log('✨ Site Sahirus Deejay Studio chargé avec succès!');
console.log('📱 Contactez-nous sur WhatsApp: +237 691 806 049');
console.log('📧 Email: sahirus62@gmail.com');

trackVisitor();

// ===== ANIMATION AU CHARGEMENT =====
window.addEventListener('load', () => {
  console.log('🎤 Bienvenue sur Sahirus Deejay Studio!');
  
  // Ajouter une petite animation au chargement
  document.body.style.opacity = '1';
});
