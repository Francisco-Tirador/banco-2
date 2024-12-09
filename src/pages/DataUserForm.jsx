import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import Header from "../components/Header";

import PrevewPDF from "../components/UserForm/PrevewPDF";
import axios from "axios";
import Formulario from "../components/UserForm/Formulario";
import TableUsers from "../components/UserForm/TableUsers";

const DataUserForm = () => {
   const [listar, setListar] = useState(true);
   const [userSearch, setUserSearch] = useState();
   const [users, setUsers] = useState([]);
  

   const { handleSubmit,  } = useForm();

 

   useEffect(() => {
      axios.get("http://localhost:2157/banco/userse").then((res) => {
        setUsers(res.data)
        setUserSearch(res.data[0])
      });
   }, []);

   const handleSubmitData=(data)=>{
    console.log(data);
   }

   const handleToggleListar = () => setListar(!listar);

   return (
      <div className=" w-full min-h-screen flex flex-wrap">
         <Header />

         <form onSubmit={handleSubmit(handleSubmitData)} className="bg-gray-200 w-[80%] overflow-hidden  p-3 flex flex-wrap rounded-lg m-auto h-auto">
            {listar ? (
             <Formulario handleToggleListar={handleToggleListar}  users={users} setUserSearch={setUserSearch} userSearch={userSearch}/>
            ) : (
               <TableUsers handleToggleListar={handleToggleListar} users={users}/>
            )}

            <div className="w-full md:w-1/2 h-auto p-3">
               <div className=" h-auto">
                  <PrevewPDF pdfUrl={`/pdf/${userSearch?.curriculum}`} />
               </div>
            </div>
         </form>
         
         <Footer />
      </div>
   );
};

export default DataUserForm;
