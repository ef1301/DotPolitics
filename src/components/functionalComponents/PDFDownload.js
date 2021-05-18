
import PDF from "./PDF"
import { PDFDownloadLink} from '@react-pdf/renderer';

const dlPDF = (props) => (
  <div className="pdf" >
    <PDFDownloadLink document={< PDF {...props} />} fileName="repByLocation.pdf"><button className="pdfbutton">Download now!
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!' 
      }</button>
    </PDFDownloadLink>
  </div>
);



export default dlPDF;