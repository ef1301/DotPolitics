
import PDF from "./PDF"
import { PDFDownloadLink} from '@react-pdf/renderer';

const dlPDF = (props) => (
  <div className="pdf" >
    <PDFDownloadLink document={< PDF {...props} />} fileName="repByLocation.pdf"><button className="pdfbutton">Download Results as PDF!
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download results as PDF' 
      }</button>
    </PDFDownloadLink>
  </div>
);



export default dlPDF;