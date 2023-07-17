import {addRoute,cargarRutas,addPointInput,resetPointsForm} from "../app/functions.js";
import {  $createRouteForm,
    $routesContainer,
    $fragment,
    $routeTemplate,
    $addPointBtn,
    $createRouteInputs,
    $closeModalBtn1,
    $closeModalBtn2,
    URL,} from "../app/domVars.js"


$createRouteForm.addEventListener("submit",addRoute)

$addPointBtn.addEventListener("click", addPointInput);

$closeModalBtn1.addEventListener("click", resetPointsForm);

$closeModalBtn2.addEventListener("click", resetPointsForm);

// API FETCH

document.addEventListener("DOMContentLoaded",cargarRutas)