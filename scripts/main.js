const row_cards = document.getElementById('row_cards');
const button_todo = document.getElementById('button_todo');
const button_global = document.getElementById('button_global');
const button_america = document.getElementById('button_america');
const button_africa = document.getElementById('button_africa');
const button_oceania = document.getElementById('button_oceania');
const button_europa = document.getElementById('button_europa');
const button_asia = document.getElementById('button_asia');
const loader_zone = document.getElementById('loader_zone');
const input_search = document.getElementById('input_search');
const submit_search = document.getElementById('submit_search');
const search_form = document.getElementById('search_form')
const error_busqueda = document.getElementById("error");
async function getData(){
    return fetch('https://covid-api.mmediagroup.fr/v1/cases')
        .then(response => response.json())
}
class CovidData {
    constructor(key, casosConfirmados, muertes, poblacion){
        this.key = key;
        this.casosConfirmados = casosConfirmados;
        this.muertes = muertes;
        this.poblacion = poblacion;
    }
    paintData(){
        row_cards.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" id="card">
                <div class="card text-white bg-primary mb-3 w-100 p-2">
                    <div class="card-header"><h5>${this.key}</h5></div>
                        <div class="card-body">
                            <p class="card-text">Confirmados: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(this.casosConfirmados)}</p>
                            <p class="card-text">Muertes: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(this.muertes)}</p>
                            <p class="card-text">Población: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(this.poblacion)}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
    }
}
async function showData(mostrar){
    row_cards.innerHTML = ``;
    const Datos = await getData();
    const DatosKey = Object.keys(Datos);
    const DatosValues = Object.values(Datos);
    if(mostrar == "todo"){
        for(let i = 0; i < DatosKey.length; i++){
            let valor = new CovidData(DatosKey[i], DatosValues[i].All.confirmed, DatosValues[i].All.deaths, DatosValues[i].All.population)
            valor.paintData();
        }
    }else if(mostrar == "global"){
        for(let i = 0; i < DatosKey.length; i++){
            if(DatosKey[i] == "Global"){
                let valor = new CovidData(DatosKey[i], DatosValues[i].All.confirmed, DatosValues[i].All.deaths, DatosValues[i].All.population)
                valor.paintData();
            }
        }
    }else if(mostrar == "america"){
        for(let i = 0; i < DatosKey.length; i++){
            const continente = DatosValues[i].All.continent;
            if(continente == "South America" || continente == "North America"){
                let valor = new CovidData(DatosKey[i], DatosValues[i].All.confirmed, DatosValues[i].All.deaths, DatosValues[i].All.population)
                valor.paintData();
            }
        }
    }else if(mostrar == "africa"){
        for(let i = 0; i < DatosKey.length; i++){
            const continente = DatosValues[i].All.continent;
            if(continente == "Africa"){
                let valor = new CovidData(DatosKey[i], DatosValues[i].All.confirmed, DatosValues[i].All.deaths, DatosValues[i].All.population)
                valor.paintData();
            }
        }
    }else if(mostrar == "europa"){
        for(let i = 0; i < DatosKey.length; i++){
            const continente = DatosValues[i].All.continent;
            if(continente == "Europe"){
                let valor = new CovidData(DatosKey[i], DatosValues[i].All.confirmed, DatosValues[i].All.deaths, DatosValues[i].All.population)
                valor.paintData();
            }
        }
    }else if(mostrar == "oceania"){
        for(let i = 0; i < DatosKey.length; i++){
            const continente = DatosValues[i].All.continent;
            if(continente == "Oceania"){
                let valor = new CovidData(DatosKey[i], DatosValues[i].All.confirmed, DatosValues[i].All.deaths, DatosValues[i].All.population)
                valor.paintData();
            }
        }
    }else if(mostrar == "asia"){
        for(let i = 0; i < DatosKey.length; i++){
            const continente = DatosValues[i].All.continent;
            if(continente == "Asia"){
                let valor = new CovidData(DatosKey[i], DatosValues[i].All.confirmed, DatosValues[i].All.deaths, DatosValues[i].All.population)
                valor.paintData();
            }
        }
    }else{
        for(let i = 0; i < DatosKey.length; i++){
            if(DatosKey[i].toLocaleLowerCase() == mostrar.toLowerCase()){
                let valor = new CovidData(DatosKey[i], DatosValues[i].All.confirmed, DatosValues[i].All.deaths, DatosValues[i].All.population)
                valor.paintData();
            }
        }
    }
    if(row_cards.childElementCount < 1){
        resNull()
    }else{
        resNotNull()
    }
    clouseLoader();
}

const putActive = (boton)=>{
    switch(boton){
        case "todo":
            button_america.classList.remove("active");
            button_asia.classList.remove("active");
            button_europa.classList.remove("active");
            button_africa.classList.remove("active");
            button_global.classList.remove("active");
            button_oceania.classList.remove("active");
            button_todo.classList.add("active");
            break;
        case "america":
            button_todo.classList.remove("active");
            button_asia.classList.remove("active");
            button_europa.classList.remove("active");
            button_africa.classList.remove("active");
            button_global.classList.remove("active");
            button_oceania.classList.remove("active");
            button_america.classList.add("active");
            break;
        case "global":
            button_todo.classList.remove("active");
            button_america.classList.remove("active");
            button_europa.classList.remove("active");
            button_asia.classList.remove("active");
            button_africa.classList.remove("active");
            button_oceania.classList.remove("active");
            button_global.classList.add("active");
            break;
        case "africa":
            button_todo.classList.remove("active");
            button_america.classList.remove("active");
            button_europa.classList.remove("active");
            button_asia.classList.remove("active");
            button_global.classList.remove("active");
            button_oceania.classList.remove("active");
            button_africa.classList.add("active");
            break;
        case "europa":
            button_todo.classList.remove("active");
            button_america.classList.remove("active");
            button_africa.classList.remove("active");
            button_asia.classList.remove("active");
            button_global.classList.remove("active");
            button_oceania.classList.remove("active");
            button_europa.classList.add("active");
            break;
        case "asia":
            button_todo.classList.remove("active");
            button_america.classList.remove("active");
            button_europa.classList.remove("active");
            button_africa.classList.remove("active");
            button_global.classList.remove("active");
            button_oceania.classList.remove("active");
            button_asia.classList.add("active");
            break;
        case "oceania":
            button_todo.classList.remove("active");
            button_america.classList.remove("active");
            button_europa.classList.remove("active");
            button_asia.classList.remove("active");
            button_global.classList.remove("active");
            button_africa.classList.remove("active");
            button_oceania.classList.add("active");
            break;
    }
}
window.addEventListener("load",()=>{
    showData('todo')
})
button_todo.addEventListener("click", ()=>{
    showData('todo');
    putActive('todo')
})
button_america.addEventListener("click", ()=>{
    showData('america');
    putActive('america')
})
button_asia.addEventListener("click", ()=>{
    showData('asia');
    putActive('asia')
})
button_africa.addEventListener("click", ()=>{
    showData('africa');
    putActive('africa')
})
button_europa.addEventListener("click", ()=>{
    showData('europa');
    putActive('europa')
})
button_oceania.addEventListener("click", ()=>{
    showData('oceania');
    putActive('oceania')
})
button_global.addEventListener("click", ()=>{
    showData('global');
    putActive('global')
})

function clouseLoader(){
    loader_zone.classList.add('clouseLoader')
}
function openLoader(){
    loader_zone.classList.remove('clouseLoader')
}
search_form.addEventListener('submit', (e)=>{
    e.preventDefault();
    showData(e.target[0].value)
})

const resNull = ()=>{
    error_busqueda.classList.remove("error-ocultar");
}
const resNotNull = ()=>{
    error_busqueda.classList.add("error-ocultar")
}