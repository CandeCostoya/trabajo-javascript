
// DEFINO EL VALOR DEL TICKET

const valorticket = 200;

//DEFINO PORCENTAJES

let descuentoEstudiante = 0.2
let descuentoTrainee = 0.5
let descuentoJunior = 0.85

//TOMO LOS VALORES

const cantidad = document.getElementById("cantidad");
const categoria = document.getElementById("categoriaSelect");
const botonCalcular = document.getElementById("btnCalcular");
const botonReset = document.getElementById("btnBorrar");
const p = document.getElementById("p");

//HAGO LA FUNCION TOTALPAGAR


function totalPagar(){
  let totalValor = (cantidad.value) * valorticket
  if (categoria.value == 0){
      totalValor = totalValor * descuentoEstudiante;

  } else if (categoria.value == 1){
      totalValor = totalValor * descuentoTrainee;

  } else if (categoria.value == 2){
      totalValor = totalValor * descuentoJunior;
  } else {
      totalValor = totalValor
  }


  p.innerHTML = `Total a Pagar $ ${totalValor}`;
}

//boton calcular

botonCalcular.addEventListener ('click', totalPagar);

//boton de reset

 botonReset.addEventListener('click', ()=>{
  p.innerHTML = 'Total a Pagar $'
}); 


function myFunction() {
  document.getElementById("compraEntradas").reset();
}


// VALIDACION BOOTSTRAP
(() => {
  'use strict'

  
  const forms = document.querySelectorAll('.needs-validation')


  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



















