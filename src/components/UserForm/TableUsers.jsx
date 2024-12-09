import React from "react";

const TableUsers = ({handleToggleListar,users}) => {





   return (
      <div className="md:w-1/2  ">
         <button onClick={handleToggleListar} className="bg-primary px-2 py-1 mb-3 rounded-md text-white">
            Buscar Individual
         </button>

         <div className="max-h-[500px] overflow-y-auto">
            <table className="relative min-w-full bg-white border border-gray-200 shadow-md rounded-lg max-h-[300px]">
               <thead className="sticky top-0 bg-primary text-white uppercase text-sm leading-normal">
                  <tr>
                     <th className="py-3 px-6 text-left">ID</th>
                     <th className="py-3 px-6 text-left">Nombre</th>
                     <th className="py-3 px-6 text-left">Apellido Paterno</th>
                     <th className="py-3 px-6 text-left">Apellido Materno</th>
                  </tr>
               </thead>
               <tbody className="text-gray-700  bg-gray-200 border text-sm font-light ">
                  {users?.map((row) => (
                     <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-100">
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
   );
};

export default TableUsers;
