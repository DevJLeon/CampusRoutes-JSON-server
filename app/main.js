const $createRouteForm = document.querySelector(".createRouteForm");
const $addPointBtn = document.querySelector(".addPointBtn");
const $createRouteInputs = document.querySelector(".createRouteInputs");
const $closeModalBtn1 = document.querySelector(".close-modal-btn1");
const $closeModalBtn2 = document.querySelector(".close-modal-btn2");

$createRouteForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    nombreRuta = $createRouteForm.routeName.value

    $createRouteForm.reset();
})

$addPointBtn.addEventListener("click", ()=>{
    const newPoint = document.createElement("div");

    newPoint.setAttribute("class","form-floating")
    newPoint.innerHTML = `
    <div class="form-floating">
        <input type="text" name="pointName" class="form-control" id="pointName" placeholder="Punto" required>
        <label for="floatingPassword">Punto</label>
    </div>
    `;

    $createRouteInputs.appendChild(newPoint);
});

$closeModalBtn1.addEventListener("click", () => {
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
});

$closeModalBtn2.addEventListener("click", () => {
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
});