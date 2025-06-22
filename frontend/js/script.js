// Menú móvil
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.querySelector('i').classList.toggle('fa-times');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.querySelector('i').classList.remove('fa-times');
    });
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        const response = await fetch('http://localhost:3000/api/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            // Mostrar mensaje de éxito
            formMessage.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
            formMessage.className = 'success';
            contactForm.reset();
        } else {
            // Mostrar mensaje de error
            formMessage.textContent = result.message || 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
            formMessage.className = 'error';
        }
    } catch (error) {
        formMessage.textContent = 'Error de conexión. Por favor, inténtalo de nuevo más tarde.';
        formMessage.className = 'error';
    }
    
    // Desplazarse al mensaje
    formMessage.scrollIntoView({ behavior: 'smooth' });
    
    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
        formMessage.style.opacity = '0';
        setTimeout(() => {
            formMessage.className = '';
            formMessage.style.opacity = '1';
        }, 500);
    }, 5000);
});

// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});