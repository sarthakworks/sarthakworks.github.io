import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/shared/Footer";
import PageNotFound from "./components/shared/PageNotFound";
import LeftMenu from "./components/shared/LeftMenu";
import Settings from "./components/shared/Settings";
import Interview from "./components/Interview/Interview";
import Javascript from "./components/Interview/Javascript";
import Html from "./components/Interview/Html";
import React from "./components/Interview/React";
import Coding from "./components/Interview/Coding";
import Misc from "./components/Interview/Misc";
import Random from "./components/Random/Random";
import ImageBase64 from "./Tools/imagetools/ImageBase64/ImageBase64";
import CompressImage from "./Tools/imagetools/CompressImage/CompressImage";
import ImageTools from "./Tools/imagetools/ImageTools";
import BlurImage from "./Tools/imagetools/BlurImage/BlurImage";
import AesTool from "./Tools/aes-encrypt-decrypt/AesTool";

import PdfTools from "./Tools/pdftools/PdfTools";
import MergePdf from "./Tools/pdftools/MergePdf/MergePdf";
import SplitPdf from "./Tools/pdftools/SplitPdf/SplitPdf";
import PdfToImage from "./Tools/pdftools/PdfToImage/PdfToImage";
import RemovePdfPassword from "./Tools/pdftools/RemovePdfPassword/RemovePdfPassword";
import SettingToggle from "./components/shared/SettingToggle";

function App() {
  return (
    <BrowserRouter>
      <SettingToggle />
      <div className="container-fluid">
        <div className="wrapper menuitem-active">
          <LeftMenu />
          <div className="content-page px-0">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="image-tools" element={<ImageTools />} />
              <Route path="image-tools/base64" element={<ImageBase64 />} />
              <Route path="image-tools/compress" element={<CompressImage />} />
              <Route path="image-tools/blur" element={<BlurImage />} />
              <Route path="pdf-tools" element={<PdfTools />} />
              <Route path="pdf-tools/merge" element={<MergePdf />} />
              <Route path="pdf-tools/split" element={<SplitPdf />} />
              <Route path="pdf-tools/to-image" element={<PdfToImage />} />
              <Route path="pdf-tools/unlock" element={<RemovePdfPassword />} />
              <Route path="aes-tool" element={<AesTool />} />
              <Route path="/Random" element={<Random />} />
              <Route path="Interview" element={<Interview />}>
                <Route path="" element={<Javascript />}></Route>
                <Route path="javascript" element={<Javascript />}></Route>
                <Route path="code" element={<Coding />}></Route>
                <Route path="react" element={<React />}></Route>
                <Route path="html" element={<Html />}></Route>
                <Route path="Misc" element={<Misc />}></Route>
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
      <Settings />
    </BrowserRouter>
  );
}

export default App;
