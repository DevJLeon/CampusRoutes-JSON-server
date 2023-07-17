import {
  $createRouteForm,
  $routesContainer,
  $fragment,
  $routeTemplate,
  $addPointBtn,
  $createRouteInputs,
  $closeModalBtn1,
  $closeModalBtn2,
  URL,
} from "../app/domVars.js";

export function addPointInput(){
        const newPoint = document.createElement("div");
    
        newPoint.setAttribute("class","form-floating")
        newPoint.innerHTML = `
        <div class="form-floating">
            <input type="text" name="pointName" class="form-control" id="pointName" placeholder="Punto" required>
            <label for="floatingPassword">Punto</label>
        </div>
        `;
    
        $createRouteInputs.appendChild(newPoint);
};

export function resetPointsForm(){
    $createRouteInputs.innerHTML = `
    <div class="form-floating mb-3">
        <input type="text" name="routeName" class="form-control" id="routeName floatingInput-Route" placeholder="Ruta del Sol" required>
        <label for="floatingInput">Nombre ruta</label>
    </div>
    <div class="form-floating">
        <input type="text" name="pointName" class="form-control" id="pointName" placeholder="Punto" required>
        <label for="floatingPassword">Punto</label>
    </div>
    `
};

export async function cargarRutas(){
    console.log("Está cargando la funcion")
    try{
        const resRutas = fetch(`${URL}/Rutas`);
        const resPuntos = fetch(`${URL}/Puntos`);
    
        const [responseRutas, responsePuntos] = await Promise.all([resRutas, resPuntos]);
    
        const jsonRutas = await responseRutas.json();
        const jsonPuntos = await responsePuntos.json();
    
        const rutas = jsonRutas;
        const puntos = jsonPuntos;

        rutas.forEach(ruta => {
            let $clone = document.createElement("div"),
            $routeNodes = document.createElement("div"),
            $nodesTag = document.createElement("div"),
            $pointsUl = document.createElement("ul"),
            $botones = document.createElement("div");

            $clone.setAttribute("class","row-xl route");
            $routeNodes.setAttribute("class","route-nodes");
            $nodesTag.setAttribute("class","nodes-tag");
            $nodesTag.innerHTML="puntos:";
            $pointsUl.setAttribute("class","points-list")
            $botones.setAttribute("class","botones")

            $routeNodes.appendChild($nodesTag)

            $clone.innerHTML=`
            <img class="route-icon" src="../assets/img/routes.png" alt="">
            <div class="container route-info justify-content-center">
                <span class="route-title bold">Ruta:</span><br>
                <div class="route-name">${ruta.nombre}</div>
            </div>
            `

            puntos.forEach(punto =>{
                if (punto.rutaId == ruta.id){
                    let nomPunto = punto.nomPunto,
                    puntoLista = document.createElement("li");
                    puntoLista.innerHTML = nomPunto
                    $pointsUl.appendChild(puntoLista);
                }
            }) 

            $botones.innerHTML=`
                <input type="button" data-id="${ruta.id}" data-name="${ruta.nombre}" data-accion="Eliminar" value="Eliminar" class="delete btn-guardar bg-danger border-0 rounded bg-secondary px-2">
                <input type="button" data-id="${ruta.id}" data-bs-toggle="modal" data-bs-target="#modalModificar"  data-accion="Actualizar" value="Actualizar" class="edit btn-guardar bg-warning border-0 rounded bg-secondary px-2">
            `

            $routeNodes.appendChild($pointsUl)
            $clone.appendChild($routeNodes)
            $clone.appendChild($botones)


            
            
            $fragment.appendChild($clone);
        });
        $routesContainer.appendChild($fragment);
    } catch(err){
        alert(err)
        console.log(err)
    }

};

export async function addRoute(e) {
    e.preventDefault();

    let nombreRuta = $createRouteForm.routeName.value,
    nombrePunto = $createRouteForm.pointName.value;

    try{
        let optionsRuta = {
            method:"POST",
            headers:{
                "Content-type":"application/json; chatset=utf-8"
            },
            body:JSON.stringify({
                nombre:nombreRuta
            })
        };
        const resRutas = fetch(`${URL}/Rutas`,optionsRuta);
        const resPuntos = fetch(`${URL}/Puntos`);
    
        const [responseRutas, responsePuntos] = await Promise.all([resRutas, resPuntos]);
    
        const jsonRutas = await responseRutas.json();
        const jsonPuntos = await responsePuntos.json();
    
        const rutas = jsonRutas;
        const puntos = jsonPuntos;
    }catch(error){
        console.log("Error del modal formulario: "+error)
    }

    $createRouteForm.reset();
}
