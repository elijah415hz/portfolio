import React, {useState} from 'react'
import {Document, Page, pdfjs} from 'react-pdf'
import Developer_Resume from '../Developer_Resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (

      <div className="col-sm-11 bg-light about-me">
        <h2>Resume</h2>
        <a href="Developer_Resume.pdf" target="_blank" rel="noreferrer">
          <Document 
          file={Developer_Resume}
          onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </a>
          
        </div>
   
    )
}
