//Variables
const resultado = document.getElementById('resultado');
const year = document.getElementById('year');

const marca = document.getElementById('marca');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');


//Generar objectos con la búsqueda
const datosBusqueda = {

    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};

//Eventos
document.addEventListener('DOMContentLoaded', () => {

    mostrarAutos(autos); //Muestra los automociles
    llenarYear(); //Llena las opciones de años

});
//Listners
marca.addEventListener('change', (e) => {

    datosBusqueda.marca = e.target.value;
    
    //Filtrar auto
    filtrarAuto();

});
year.addEventListener('change', (e) => {

    datosBusqueda.year = e.target.value;
    
    //Filtrar auto
    filtrarAuto();

});
minimo.addEventListener('change', (e) => {

    datosBusqueda.minimo = e.target.value;
    
    //Filtrar auto
    filtrarAuto();

});
maximo.addEventListener('change', (e) => {

    datosBusqueda.maximo = e.target.value;
    
    //Filtrar auto
    filtrarAuto();

});
puertas.addEventListener('change', (e) => {

    datosBusqueda.puertas = e.target.value;
    
    //Filtrar auto
    filtrarAuto();

});
transmision.addEventListener('change', (e) => {

    datosBusqueda.transmision = e.target.value;
    
    //Filtrar auto
    filtrarAuto();

});
color.addEventListener('change', (e) => {

    datosBusqueda.color = e.target.value;
    
    //Filtrar auto
    filtrarAuto();

});

//Muestra los resultados de los autos
function mostrarAutos(autosList) {

    //Limpiar html
    limpiarHTML();

    //Listar autos
    autosList.forEach( auto => {
    
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}---(${year})
        `;
        
        //Insertar en el html
        resultado.appendChild(autoHTML);
    });

    
    

}

function filtrarAuto() {

    //Opción 1
    // const resultado = autos.filter( auto => filtrarMarca(auto) );
    
    //Opción 2
    const resultadoFiltrado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    //MostrarAutos
    if(resultadoFiltrado.length) {

        mostrarAutos(resultadoFiltrado);

    }
    else {

        mostrarError();

    }
    

}
function filtrarMarca(auto) {

    const { marca } = datosBusqueda;
    if (marca) {

        return auto.marca === marca;
    }
    return auto;
}
function filtrarYear(auto) {

    const { year } = datosBusqueda;
    if (year) {

        return auto.year == year;
    }
    return auto;
}
function filtrarMin(auto) {

    const { minimo } = datosBusqueda;
    if (minimo) {

        return auto.precio >= minimo;
    }
    return auto;

}
function filtrarMax(auto) {

    const { maximo } = datosBusqueda;
    if (maximo) {

        return auto.precio <= maximo;
    }
    return auto;

}
function filtrarPuertas(auto) {

    const { puertas } = datosBusqueda;
    if (puertas) {

        return auto.puertas == puertas;
    }
    return auto;

}
function filtrarTransmision(auto) {

    const { transmision } = datosBusqueda;
    if (transmision) {

        return auto.transmision === transmision;

    }
    return auto;
}
function filtrarColor(auto) {

    const { color } = datosBusqueda;
    if (color) {

        return auto.color === color;
    }
    return auto;

}


//Genera los años del select
function llenarYear() {

    const maxYear = new Date().getFullYear();
    const minYear = maxYear - 30;
    
    for( let i = maxYear; i >= minYear; i--) {

        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        
        //Insertar en el html
        year.appendChild(option);
    }
}
function mostrarError() {

    limpiarHTML();
    const mensajeError = document.createElement('div');
    mensajeError.classList.add('alerta','error');
    mensajeError.textContent = `No se ecnontraron resultados`;

    resultado.appendChild(mensajeError);

}
function limpiarHTML() {

    while (resultado.firstChild) {

        resultado.removeChild(resultado.firstChild);

    } 
}