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

async function getData(){
    return fetch('https://covid-api.mmediagroup.fr/v1/cases')
        .then(response => response.json())
}

async function showData(mostrar){
    const Datos = await getData();
    const DatosKey = Object.keys(Datos);
    const DatosValues = Object.values(Datos);
    if(mostrar == 'todo'){
        row_cards.innerHTML = ``;
        for(let i = 0; i <= DatosKey.length - 1; i++){
            row_cards.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" id="card">
                <div class="card text-white bg-primary mb-3 w-100 p-2">
                    <div class="card-header"><h5>${DatosKey[i]}</h5></div>
                        <div class="card-body">
                            <p class="card-text">Confirmados: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.confirmed)}</p>
                            <p class="card-text">Muertes: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.deaths)}</p>
                            <p class="card-text">Población: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.population)}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
        if(row_cards.childElementCount > 1){
            clouseLoader();
        }
    }else if(mostrar == "america"){
        row_cards.innerHTML = ``;
        for(let i = 0; i <= DatosKey.length - 1; i++){
            const continent = DatosValues[i].All.continent;
            if(continent == "South America" || continent == "North America")
            row_cards.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" id="card">
                <div class="card text-white bg-primary mb-3 w-100 p-2">
                    <div class="card-header"><h5>${DatosKey[i]}</h5></div>
                        <div class="card-body">
                            <p class="card-text">Confirmados: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.confirmed)}</p>
                            <p class="card-text">Muertes: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.deaths)}</p>
                            <p class="card-text">Población: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.population)}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
    else if(mostrar == "asia"){
        row_cards.innerHTML = ``;
        for(let i = 0; i <= DatosKey.length - 1; i++){
            const continent = DatosValues[i].All.continent;
            if(continent == "Asia")
            row_cards.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" id="card">
                <div class="card text-white bg-primary mb-3 w-100 p-2">
                    <div class="card-header"><h5>${DatosKey[i]}</h5></div>
                        <div class="card-body">
                            <p class="card-text">Confirmados: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.confirmed)}</p>
                            <p class="card-text">Muertes: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.deaths)}</p>
                            <p class="card-text">Población: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.population)}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
    else if(mostrar == "africa"){
        row_cards.innerHTML = ``;
        for(let i = 0; i <= DatosKey.length - 1; i++){
            const continent = DatosValues[i].All.continent;
            if(continent == "Africa")
            row_cards.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" id="card">
                <div class="card text-white bg-primary mb-3 w-100 p-2">
                    <div class="card-header"><h5>${DatosKey[i]}</h5></div>
                        <div class="card-body">
                            <p class="card-text">Confirmados: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.confirmed)}</p>
                            <p class="card-text">Muertes: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.deaths)}</p>
                            <p class="card-text">Población: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.population)}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }else if(mostrar == "europa"){
        row_cards.innerHTML = ``;
        for(let i = 0; i <= DatosKey.length - 1; i++){
            const continent = DatosValues[i].All.continent;
            if(continent == "Europe")
            row_cards.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" id="card">
                <div class="card text-white bg-primary mb-3 w-100 p-2">
                    <div class="card-header"><h5>${DatosKey[i]}</h5></div>
                        <div class="card-body">
                            <p class="card-text">Confirmados: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.confirmed)}</p>
                            <p class="card-text">Muertes: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.deaths)}</p>
                            <p class="card-text">Población: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.population)}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }else if(mostrar == "oceania"){
        row_cards.innerHTML = ``;
        for(let i = 0; i <= DatosKey.length - 1; i++){
            const continent = DatosValues[i].All.continent;
            if(continent == "Oceania")
            row_cards.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" id="card">
                <div class="card text-white bg-primary mb-3 w-100 p-2">
                    <div class="card-header"><h5>${DatosKey[i]}</h5></div>
                        <div class="card-body">
                            <p class="card-text">Confirmados: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.confirmed)}</p>
                            <p class="card-text">Muertes: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.deaths)}</p>
                            <p class="card-text">Población: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.population)}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }else if(mostrar == "global"){
        row_cards.innerHTML = ``;
        for(let i = 0; i <= DatosKey.length - 1; i++){
            if(DatosKey[i] == "Global"){
                row_cards.innerHTML += `
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" id="card">
                    <div class="card text-white bg-primary mb-3 w-100 p-2">
                        <div class="card-header"><h5>${DatosKey[i]}</h5></div>
                            <div class="card-body">
                                <p class="card-text">Confirmados: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.confirmed)}</p>
                                <p class="card-text">Muertes: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.deaths)}</p>
                                <p class="card-text">Población: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.population)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
        }
    }else{
        row_cards.innerHTML = ``;
        for(let i = 0; i <= DatosKey.length - 1; i++){
            if(DatosKey[i].toLowerCase() == mostrar.toLowerCase()){
                row_cards.innerHTML += `
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" id="card">
                    <div class="card text-white bg-primary mb-3 w-100 p-2">
                        <div class="card-header"><h5>${DatosKey[i]}</h5></div>
                            <div class="card-body">
                                <p class="card-text">Confirmados: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.confirmed)}</p>
                                <p class="card-text">Muertes: ${DatosValues[i].All.deaths}</p>
                                <p class="card-text">Población: ${new Intl.NumberFormat('es-PY', { style: "decimal" }).format(DatosValues[i].All.population)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
        }
    }
    
}
button_todo.addEventListener("click", ()=>{
    showData('todo');
    button_america.classList.remove("active");
    button_asia.classList.remove("active");
    button_europa.classList.remove("active");
    button_africa.classList.remove("active");
    button_global.classList.remove("active");
    button_oceania.classList.remove("active");
    button_todo.classList.add("active")
})
button_todo.click()

button_america.addEventListener("click", ()=>{
    showData('america');
    button_todo.classList.remove("active");
    button_asia.classList.remove("active");
    button_europa.classList.remove("active");
    button_africa.classList.remove("active");
    button_global.classList.remove("active");
    button_oceania.classList.remove("active");
    button_america.classList.add("active")
})
button_asia.addEventListener("click", ()=>{
    showData('asia');
    button_todo.classList.remove("active");
    button_america.classList.remove("active");
    button_europa.classList.remove("active");
    button_africa.classList.remove("active");
    button_global.classList.remove("active");
    button_oceania.classList.remove("active");
    button_asia.classList.add("active")
})
button_africa.addEventListener("click", ()=>{
    showData('africa');
    button_todo.classList.remove("active");
    button_america.classList.remove("active");
    button_europa.classList.remove("active");
    button_asia.classList.remove("active");
    button_global.classList.remove("active");
    button_oceania.classList.remove("active");
    button_africa.classList.add("active")
})
button_europa.addEventListener("click", ()=>{
    showData('europa');
    button_todo.classList.remove("active");
    button_america.classList.remove("active");
    button_africa.classList.remove("active");
    button_asia.classList.remove("active");
    button_global.classList.remove("active");
    button_oceania.classList.remove("active");
    button_europa.classList.add("active")
})
button_oceania.addEventListener("click", ()=>{
    showData('oceania');
    button_todo.classList.remove("active");
    button_america.classList.remove("active");
    button_europa.classList.remove("active");
    button_asia.classList.remove("active");
    button_global.classList.remove("active");
    button_africa.classList.remove("active");
    button_oceania.classList.add("active")
})
button_global.addEventListener("click", ()=>{
    showData('global');
    button_todo.classList.remove("active");
    button_america.classList.remove("active");
    button_europa.classList.remove("active");
    button_asia.classList.remove("active");
    button_africa.classList.remove("active");
    button_oceania.classList.remove("active");
    button_global.classList.add("active")
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