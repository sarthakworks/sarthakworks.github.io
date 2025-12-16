import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import LeftMenu from "./components/shared/LeftMenu";
import SettingToggle from "./components/shared/SettingToggle";
import Loading from "./components/shared/Loading";

// Lazy load components
const Homepage = lazy(() => import("./components/homepage/Homepage"));
const PageNotFound = lazy(() => import("./components/shared/PageNotFound"));
const Interview = lazy(() => import("./components/Interview/Interview"));
const Javascript = lazy(() => import("./components/Interview/Javascript"));
const Html = lazy(() => import("./components/Interview/Html"));
const ReactComp = lazy(() => import("./components/Interview/React"));
const Coding = lazy(() => import("./components/Interview/Coding"));
const Misc = lazy(() => import("./components/Interview/Misc"));
const Random = lazy(() => import("./components/Random/Random"));
const ImageBase64 = lazy(() =>
  import("./Tools/imagetools/ImageBase64/ImageBase64")
);
const CompressImage = lazy(() =>
  import("./Tools/imagetools/CompressImage/CompressImage")
);
const ImageTools = lazy(() => import("./Tools/imagetools/ImageTools"));
const BlurImage = lazy(() => import("./Tools/imagetools/BlurImage/BlurImage"));
const AesTool = lazy(() => import("./Tools/aes-encrypt-decrypt/AesTool"));

const PdfTools = lazy(() => import("./Tools/pdftools/PdfTools"));
const MergePdf = lazy(() => import("./Tools/pdftools/MergePdf/MergePdf"));
const SplitPdf = lazy(() => import("./Tools/pdftools/SplitPdf/SplitPdf"));
const PdfToImage = lazy(() => import("./Tools/pdftools/PdfToImage/PdfToImage"));
const RemovePdfPassword = lazy(() =>
  import("./Tools/pdftools/RemovePdfPassword/RemovePdfPassword")
);

function App() {
  return (
    <BrowserRouter>
      <SettingToggle />
      <div className="container-fluid gutter">
        <div className="wrapper menuitem-active">
          <LeftMenu />
          <div className="content-page px-0">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="image-tools" element={<ImageTools />} />
                <Route path="image-tools/base64" element={<ImageBase64 />} />
                <Route
                  path="image-tools/compress"
                  element={<CompressImage />}
                />
                <Route path="image-tools/blur" element={<BlurImage />} />
                <Route path="pdf-tools" element={<PdfTools />} />
                <Route path="pdf-tools/merge" element={<MergePdf />} />
                <Route path="pdf-tools/split" element={<SplitPdf />} />
                <Route path="pdf-tools/to-image" element={<PdfToImage />} />
                <Route
                  path="pdf-tools/unlock"
                  element={<RemovePdfPassword />}
                />
                <Route path="aes-tool" element={<AesTool />} />
                <Route path="/Random" element={<Random />} />
                <Route path="Interview" element={<Interview />}>
                  <Route path="" element={<Javascript />}></Route>
                  <Route path="javascript" element={<Javascript />}></Route>
                  <Route path="code" element={<Coding />}></Route>
                  <Route path="react" element={<ReactComp />}></Route>
                  <Route path="html" element={<Html />}></Route>
                  <Route path="Misc" element={<Misc />}></Route>
                </Route>

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
