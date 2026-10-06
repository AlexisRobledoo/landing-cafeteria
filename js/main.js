// =========================================================
// Café del Río — comportamiento de la página
// =========================================================

// 1) MENÚ HAMBURGUESA (celular)
// Al tocar el botón, abrimos o cerramos el menú.
const boton = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

boton.addEventListener("click", () => {
  const abierto = nav.classList.toggle("abierto");
  boton.setAttribute("aria-expanded", abierto);
});

// Si el usuario toca un link del menú, lo cerramos
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("abierto");
    boton.setAttribute("aria-expanded", "false");
  });
});

// 2) CARTEL "ABIERTO AHORA / CERRADO"
// Horarios del local. Día: 0 = domingo, 1 = lunes, ... 6 = sábado.
// Cada día tiene [hora de apertura, hora de cierre] en formato 24 h.
// null = cerrado ese día.
const HORARIOS = {
  0: null,      // domingo
  1: [7, 20],   // lunes
  2: [7, 20],
  3: [7, 20],
  4: [7, 20],
  5: [7, 20],   // viernes
  6: [8, 14],   // sábado
};

function horaEnRosario() {
  // Usamos la hora de Argentina, aunque el visitante esté en otro país
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Argentina/Buenos_Aires",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());

  const dias = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const valor = (tipo) => partes.find((p) => p.type === tipo).value;

  return {
    dia: dias[valor("weekday")],
    hora: Number(valor("hour")) % 24 + Number(valor("minute")) / 60,
  };
}

function actualizarEstado() {
  const cartel = document.getElementById("estado");
  const { dia, hora } = horaEnRosario();
  const horario = HORARIOS[dia];

  if (horario && hora >= horario[0] && hora < horario[1]) {
    cartel.textContent = `Abierto ahora · cierra a las ${horario[1]}:00`;
    cartel.className = "status abierto";
  } else {
    cartel.textContent = "Cerrado ahora · pedí por WhatsApp para mañana";
    cartel.className = "status cerrado";
  }
}

actualizarEstado();

// 3) AÑO DEL FOOTER: se pone solo, así no hay que cambiarlo cada año
document.getElementById("anio").textContent = new Date().getFullYear();
