"use client"

import { Document, Page as PdfPage } from "react-pdf"
import { pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function PdfViewer() {
  return (
    <Document file="/cv.pdf">
      <PdfPage pageNumber={1} />
    </Document>
  )
}