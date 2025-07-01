const LOGIN_URL = "https://tubackend.com/api/login"; // cambia esta URL

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch(LOGIN_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem("token", data.token);
                    window.location.href = "dashboard.html";
                } else {
                    document.getElementById("error-msg").textContent = data.message || "Login incorrecto";
                }
            } catch (err) {
                document.getElementById("error-msg").textContent = "Error de conexión con el servidor.";
            }
        });
    }
});
