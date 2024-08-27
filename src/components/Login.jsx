import { useState } from "react";
function Login(){
   
   
    const  [correo, setCorreo] = useState("")
    const  [contraseña, setContraseña] = useState("")

    const validaFormulario = () => {
        const pattern = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
        const esValido = pattern.test(correo)
        if(!esValido){
            alert("Tu correo no es valido")
        } else { alert("Tu correo se ingresado correctamente")

        }
    
        const patt = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
        const esVal = patt.test(contraseña)
        if(!esVal){
            alert("Tu contraseña no es valido")
   
        }   
    
    
    }

return(
<section class="container-fluid pt-0 mt-4 bg-green">
    <div class="container py-4">
      <h2 class="text-center my-3 text-white form-text fs-5">
        Login
      </h2>
      
       
        <div class="form-group mb-3">
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={correo} onInput={(e) => setCorreo(e.target.value)}
            placeholder="Correo Electrónico" />
            
        </div>
        <div class="form-group mb-3">
          <input type="password" class="form-control" id="password" placeholder="Contraseña"  value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>
        </div>

        <div class="text-center">
          <button onClick={validaFormulario} class="btn btn-light btn-lg px-4 fs-6 ">
            Enviar
          </button>
        </div>
     
    </div>
  </section>
)

}
export default Login;
