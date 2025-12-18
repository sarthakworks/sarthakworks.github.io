import PdfTools from "../../Tools/pdftools/PdfTools";
import ImageTools from "../../Tools/imagetools/ImageTools";
import AgileTools from "../../Tools/agiletools/AgileTools";

function Right() {
  return (
    <>
      <PdfTools embedded={true} />
      <AgileTools embedded={true} />
      <ImageTools embedded={true} />
    </>
  );
}

export default Right;
