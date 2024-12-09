import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import Header from "../components/Header";

import PrevewPDF from "../components/UserForm/PrevewPDF";
import axios from "axios";

const DataUserForm = () => {
  const [listar,setListar]=useState(true)
  const [users,setUsers]=useState([])
  const [filter,setFilter]=useState("")

   const { handleSubmit, register, watch } = useForm();
  
   const handleSubmitFile = (data) => {
      if (data.file_ine?.[0]) {
         setStateModal(true);
      }
   };

   useEffect(() => {
      axios.get("http://localhost:2157/banco/userse")
        .then(res=>setUsers(res.data))
   }, [])
   

   const optionsFilter=useMemo(()=>{
      
        if(filter=="")return []
        return users.filter(u=>u.id.includes(filter.toUpperCase()))
   },[filter])

   const handleToggleListar=()=>setListar(!listar)

   return (
      <div className=" w-full min-h-screen flex flex-wrap">
         <Header />

         <form onSubmit={handleSubmit(handleSubmitFile)} className="bg-gray-200 w-[80%]  p-3 flex flex-wrap rounded-lg m-auto h-auto">
            {
              listar?
              <div className="max-w-sm mx-auto w-full md:w-1/2 my-auto px-3">
             
            <button onClick={handleToggleListar} className="bg-primary px-2 py-1 mb-3 rounded-md text-white">Listar Usuarios</button>
             
               <div className="relative ">
                  <button className="bg-primary px-2 py-1 rounded-md text-white absolute right-0 m-1  ">Buscar</button>
                  <input onInput={(e)=>setFilter(e.target.value)} placeholder="ID usuario" type="text" className="mb-5 bg-gray-100 border pr-28 border-gray-100 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={users[0]?.id}  {...register("id")}/>
                <div className="absolute bg-white w-full top-11 rounded-b-md">
                  <ul className="px-3">
                    {
                      optionsFilter.map(o=>(
                      <li className="px-2 hover:bg-green-300">
                        {o.id} - {o.nombre}  
                      </li>
                      ))
                    }
                  </ul>

                </div>

               </div>

               <input type="text" className="mb-5 bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" defaultValue="Nombre" disabled />
               <input type="text" className="mb-5 bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" defaultValue="Apellido Materno" disabled />
               <input type="text" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" defaultValue="Apellido Paterno" disabled />
            </div>
            :
            <div className="md:w-1/2 bg-red-300">
               <button onClick={handleToggleListar} className="bg-primary px-2 py-1 mb-3 rounded-md text-white">Buscar Individual</button>
             
              <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-primary text-white uppercase text-sm leading-normal">
          <tr>
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Nombre</th>
            <th className="py-3 px-6 text-left">Apellido Paterno</th>
            <th className="py-3 px-6 text-left">Apellido Materno</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {users?.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{row.id}</td>
              <td className="py-3 px-6 text-left">{row.nombre}</td>
              <td className="py-3 px-6 text-left">{row.apellidoPaterno}</td>
              <td className="py-3 px-6 text-left">{row.apellidoMaterno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

            </div>
            }
            <div className="w-full md:w-1/2 p-3">
               <div className=" h-auto">
                  <PrevewPDF pdfUrl={"/pdf/currsiculum1.pdf"} />
               </div>
            </div>
         </form>
         <Footer />
      </div>
   );
};

export default DataUserForm;
