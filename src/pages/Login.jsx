import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Countdown from "react-countdown";
import Footer from "../components/Footer";
import "../index.css";

//* ASSETS
import logo from "../assets/images/logo-banco-azteca-letras.jpeg";
import fondo from "../assets/images/fondo.jpg";
import axios from "axios";
import { dispatch } from "../store";

const Login = () => {
   const { register, handleSubmit, errors, reset } = useForm();
   const [intentos, setIntentos] = useState(0);
   const [stateAlert, setStateAlert] = useState(false);
   const timer = 15000; 


   const onSubmit = (data) => {


      axios.post("http://localhost:2157/banco/auth",data)
        .then(res=>{
          console.log(res)
          console.log("Inicio de sesión exitoso", data);
          dispatch({ type: "login", payload: { usuario: "Azteca", password: "1234" } })
          // window.location.href = "/";
        })
        .catch(err=>{
         

         const nuevosIntentos = intentos + 1;
         setIntentos(nuevosIntentos);
         setStateAlert(true);
      
         if (nuevosIntentos >= 3) {
            setTimeout(() => {
               setIntentos(0);
               reset(); 
            }, timer);
         }


         setTimeout(() => setStateAlert(false), 3000);
         if (intentos >= 2) {
          console.log("Límite de intentos alcanzado");
          return;
       }
        })

   };

   return (
      <div className="bg-primary w-full min-h-[100vh] flex justify-center items-center flex-wrap">
         
         <img src={fondo} className="absolute w-[80%] my-auto h-full left-0 top-0 degradado" alt="" />
         
         <form onSubmit={handleSubmit(onSubmit)} className="relative max-w-sm ml-auto mr-[15%] mt-auto flex flex-wrap  bg-white w-[80%] min-h-[400px] duration-300 rounded-md p-[30px]">
            
            <img src={logo} className="w-44 h-6 mx-auto my-4" alt="Banco Azteca" />

            <div className={`bg-red-400 text-red-100 overflow-hidden w-full ${stateAlert ? "p-1 h-14 " : "h-0 p-0"} rounded-md text-center z-10 duration-300`}>
               Las credenciales son incorrectas <br />
               <span className="text-black">Te quedan {3 - intentos} intentos</span>
            </div>

            <div className="w-full h-[50%]">
               <div className="">
                  <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 text-start">
                     Usuario
                  </label>
                  <input type="text" id="user" name="user" ref={register({ required: "El usuario es obligatorio" })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" />
                  {errors.user && <span className="text-red-500 text-sm">{errors.user.message}</span>}
               </div>

               <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                     Contraseña
                  </label>
                  <input type="password" id="password" name="password" ref={register({ required: "La contraseña es obligatoria" })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" />
                  {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
               </div>

               {intentos >= 3 && (
                  <div className="my-3 flex flex-wrap justify-between">
                     Próximo intento en:
                     <Countdown date={Date.now() + timer} />
                  </div>
               )}

            </div>

            <button type="submit" disabled={intentos >= 3} className={`${intentos >= 3 ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-secondary"} text-white  focus:outline-none mx-auto font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 h-10 text-center`}>
               INGRESAR
            </button>
         </form>

         <Footer />
      </div>
   );
};

export default Login;
