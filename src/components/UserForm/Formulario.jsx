import React, { useEffect, useMemo, useState } from "react";

const Formulario = ({ handleToggleListar, users, setUserSearch, userSearch }) => {
   const [isFocused, setIsFocused] = useState(false);
   const [filter, setFilter] = useState("");

   const optionsFilter = useMemo(() => {
      if (filter === "") return [];
      return users.filter((u) => u.id.includes(filter.toUpperCase()));
   }, [filter]);

   useEffect(() => {
      setFilter(users[0]?.id);
   }, [users]);

   const handleSearhUser = () => {
      const user = users.find((u) => u.id.includes(filter.toUpperCase()));
      if (user) {
         setUserSearch(user);
      }
   };

   const handleSelectId = (id) => {
      setFilter(id);
      setIsFocused(false);
   };

   return (
      <div className="max-w-sm mx-auto w-full md:w-1/2 my-auto px-3">
         <button onClick={handleToggleListar} className="bg-primary px-2 py-1 mb-3 rounded-md text-white">
            Listar Usuarios
         </button>

         <div className="relative">
            <button onClick={handleSearhUser} className="bg-primary px-2 py-1 rounded-md text-white absolute right-0 m-1">
               Buscar
            </button>
            <input value={filter} onInput={(e) => setFilter(e.target.value)} placeholder="ID usuario" type="text" className="mb-5 bg-gray-100 border pr-28 border-gray-100 text-gray-900 text-sm rounded-lg block w-full p-2.5" onFocus={() => setIsFocused(true)} onBlur={() => setTimeout(() => setIsFocused(false), 200)} />
            {isFocused && (
               <div className="absolute bg-white w-full top-11 rounded-b-md">
                  <ul className="px-3">
                     {optionsFilter.map((o, index) => (
                        <li key={index} className="px-2 hover:bg-green-300 cursor-pointer" onClick={() => handleSelectId(o.id)}>
                           {o.id} - {o.nombre}
                        </li>
                     ))}
                  </ul>
               </div>
            )}
         </div>

         <input type="text" className="mb-5 bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" value={userSearch?.nombre || ""} disabled />
         <input type="text" className="mb-5 bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" value={userSearch?.apellidoPaterno || ""} disabled />
         <input type="text" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" value={userSearch?.apellidoMaterno || ""} disabled />
      </div>
   );
};

export default Formulario;
