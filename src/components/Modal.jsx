import React from "react";
import ReactModal from "react-modal";
import close from '../assets/icons/cancel.png'

const Modal = ({ children, className, stateModal,setStateModel }) => {

   const customStyles = {
      content: {
         width: "70%",
         height: "70%",
         margin: "auto",
         padding: "0",
         backgroundColor: "#3f3f3f",
         color: "#000000",
        //  position: "relative",
         ...className,
      },
   };

   return (
      <ReactModal isOpen={stateModal}  style={customStyles} >
         <img onClick={()=>setStateModel(false)}  src={close} className="absolute  top-6 right-0 w-6 m-6 cursor-pointer" alt="" />
         <div className="h-[100px] w-full flex px-3 flex-wrap justify-center" >{children}</div>
         
      </ReactModal>
   );
};

export default Modal;
