import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import arrow from "../../assets/icons/right-arrow.png";
import zoom from "../../assets/icons/zoom.png";
import Modal from "../Modal";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PrevewPDF = ({ pdfUrl }) => {
   const [pdf, setPdf] = useState(false);
   const [numPages, setNumPages] = useState(null);
   const [currentPage, setCurrentPage] = useState(1);
   const [error, setError] = useState(null);
   const [stateModal, setStateModal] = useState(false);

   useEffect(() => {
      if (pdfUrl) {
         setPdf(pdfUrl);
      }
    
   }, [pdfUrl, stateModal]);

   const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
      setError(null);
   };

   const onDocumentLoadError = (error) => {
      console.error("Error loading PDF:", error);
      setError("Erro al cargar el pdf.");
   };

   const goToPrevPage = () => setCurrentPage(currentPage - 1);
   const goToNextPage = () => setCurrentPage(currentPage + 1);

   return (
      <div className="preview-container relative group">
         {error ? (
            <div className="error-message">{error}</div>
         ) : (
            <>
               <Modal stateModal={stateModal} setStateModel={setStateModal}>
                  <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError} className="pdf-document mx-auto">
                     <Page pageNumber={currentPage} className="pdf-page" />
                  </Document>
               </Modal>

               <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError} className="pdf-document mx-auto">
                  <Page pageNumber={currentPage} className="pdf-page" />
               </Document>
               <div className=" group-hover:opacity-100 flex duration-300 bg-primarey absolute bottom-[60px] right-0 left-0 m-auto justify-center">
                  <span className="bg-primary px-4 py-1 rounded-md flex">
                     <button onClick={goToPrevPage} disabled={currentPage <= 1}>
                        <img src={arrow} className="w-4 rotate-180 mr-2" alt="" />
                     </button>
                     <span>
                        {currentPage} de {numPages}
                     </span>
                     <button onClick={goToNextPage} disabled={currentPage >= numPages}>
                        <img src={arrow} className="w-4  ml-2" alt="" />
                     </button>
                     <button onClick={() => setStateModal(!stateModal)}>
                        <img src={zoom} className="w-4  ml-2 cursor-pointer" alt="" />
                     </button>
                  </span>
               </div>
            </>
         )}
      </div>
   );
};

export default PrevewPDF;
