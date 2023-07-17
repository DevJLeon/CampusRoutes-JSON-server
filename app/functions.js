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
    
        console.log(jsonRutas);
        console.log(jsonPuntos);



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
                <input type="submit" data-accion="Eliminar" value="Eliminar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2">
                <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificar"  data-accion="Actualizar" value="Actualizar" class="btn-guardar bg-warning border-0 rounded bg-secondary px-2">
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

export function addRoute(e) {
    e.preventDefault();

    let nombreRuta = $createRouteForm.routeName.value;

    console.log(nombreRuta);

    $createRouteForm.reset();
}
