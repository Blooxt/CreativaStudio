const API_URL = "https://tubackend.com/api/leads"; // cambia por tu ruta real

async function fetchLeads() {
    const token = localStorage.getItem("token");
    if (!token) return window.location.href = "login.html";

    const response = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        alert("No autorizado o error al cargar los leads");
        localStorage.removeItem("token");
        return window.location.href = "login.html";
    }

    const leads = await response.json();
    const tbody = document.getElementById("leadsBody");
    tbody.innerHTML = "";

    leads.forEach(lead => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${lead.nombre}</td>
      <td>${lead.email}</td>
      <td>${lead.telefono}</td>
      <td>${lead.mensaje}</td>
      <td>${new Date(lead.fecha).toLocaleDateString()}</td>
      <td>${lead.estado}</td>
      <td>
        <select onchange="cambiarEstado('${lead.id}', this.value)">
          <option value="nuevo" ${lead.estado === "nuevo" ? "selected" : ""}>Nuevo</option>
          <option value="contactado" ${lead.estado === "contactado" ? "selected" : ""}>Contactado</option>
          <option value="descartado" ${lead.estado === "descartado" ? "selected" : ""}>Descartado</option>
        </select>
      </td>
    `;
        tbody.appendChild(row);
    });
}

async function cambiarEstado(id, nuevoEstado) {
    const token = localStorage.getItem("token");

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ estado: nuevoEstado })
    });

    fetchLeads(); // recargar
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", fetchLeads);
