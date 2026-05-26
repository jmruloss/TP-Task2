const contenedor = document.getElementById("contenedor");

const eventosFuturos = data.evento.filter(evento => evento.dato > data.currentDate);

function crearCard(evento){
    return `
    <div class="col-md-4">
    <div class="card h-100">
        <img src="${evento.imagen}" class="card-img-top" alt="${evento.nombre}">
        <div class="card-body">
            <h5 class="card-title">${evento.nombre}</h5>
            <p class="card-text">${evento.descripcion}</p>
            <p><strong>Fecha:</strong> ${evento.dato}</p>
            <p><strong>Precio:</strong> $${evento.precio}</p>
        </div>
    </div>
</div>
`;
}

contenedor.innerHTML = eventosFuturos.map(crearCard).join("");
