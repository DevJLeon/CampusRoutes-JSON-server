import {addRoute,editRoute,deleteRoute,cargarRutas,addPointInput,resetPointsForm} from "../app/functions.js";
import {  $createRouteForm,
    $routesContainer,
    $fragment,
    $routeTemplate,
    $addPointBtn,
    $createRouteInputs,
    $closeModalBtn1,
    $closeModalBtn2,
    URL,} from "../app/domVars.js"


$addPointBtn.addEventListener("click", addPointInput);

$closeModalBtn1.addEventListener("click", resetPointsForm);

$closeModalBtn2.addEventListener("click", resetPointsForm);

// API FETCH (GET)

document.addEventListener("DOMContentLoaded",cargarRutas)

//Create Route (POST)

$createRouteForm.addEventListener("submit",addRoute)

//Edit Route (PUT)

document.addEventListener("click",editRoute)

//Delete Route (DELETE)

document.addEventListener("click",deleteRoute)