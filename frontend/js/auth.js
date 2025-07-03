document.addEventListener("DOMContentLoaded", () => {
    // Usuario temporal (solo para demostración)
    const TEMP_USER = {
        email: "cliente@creativastudio.com",
        password: "Creativa123",
        name: "Cliente Demo"
    };

    // Redirige si ya está logueado (excepto en login)
    if (localStorage.getItem("user") && window.location.pathname.includes("login.html")) {
        window.location.href = "dashboard.html";
    }

    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const errorMsg = document.getElementById("error-msg");
            errorMsg.textContent = "";

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Validación
            if (!email || !password) {
                errorMsg.textContent = "Todos los campos son requeridos";
                return;
            }

            // Simulación de autenticación
            if (email === TEMP_USER.email && password === TEMP_USER.password) {
                // Guarda los datos del usuario en localStorage
                localStorage.setItem("user", JSON.stringify({
                    email: TEMP_USER.email,
                    name: TEMP_USER.name,
                    loggedIn: true
                }));
                
                // Redirige al dashboard después de 1 segundo (para simular carga)
                errorMsg.textContent = "¡Acceso correcto! Redirigiendo...";
                errorMsg.style.color = "green";
                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 1000);
            } else {
                errorMsg.textContent = "Credenciales incorrectas.";
                errorMsg.style.color = "red";
            }
        });
    }
});