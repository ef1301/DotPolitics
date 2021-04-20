
import PDF from "./PDF"
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

const dlPDF = (props) => (
  <div>
    <PDFDownloadLink document={<PDF {...props} />} fileName="repByLocation.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </div>
);



export default dlPDF;