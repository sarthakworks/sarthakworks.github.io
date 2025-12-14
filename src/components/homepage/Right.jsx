import PdfTools from "../../Tools/pdftools/PdfTools";
import ImageTools from "../../Tools/imagetools/ImageTools";

function Right() {
  return (
    <>
      <PdfTools embedded={true} />
      <ImageTools embedded={true} />
    </>
  );
}

export default Right;
