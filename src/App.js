import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import Footer from './components/shared/Footer'
import PageNotFound from './components/shared/PageNotFound'
import LeftMenu from './components/shared/LeftMenu'
import Zomato from './components/zomato/Zomato'
import Navbar from './components/shared/Navbar'
import Settings from './components/shared/Settings'
import KanbanHome from './components/Kanban/KanbanHome'
// import Javascript from './components/Interview/Javascript'
import Interview from './components/Interview/Interview'
import Javascript from './components/Interview/Javascript'
import Html from './components/Interview/Html'
import React from './components/Interview/React'
import Coding from './components/Interview/Coding'
import Misc from './components/Interview/Misc'
import Random from './components/Random/Random'
// import Search from './components/search/Search'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid">
        <div className="wrapper menuitem-active">
          <LeftMenu />
          <div className="content-page px-0">
            <Routes>
              <Route
                path='/'
                element={
                  <Homepage />}></Route>
              <Route
                path='/zomato'
                element={
                  <Zomato />}></Route>
              <Route
                path="/Kanban"
                element={<KanbanHome />}
              /><Route
                path="/Random"
                element={<Random />}
              />
              <Route
                path="Interview"
                element={<Interview />}
              >
                <Route path="" element={<Javascript />}></Route>
                <Route path="javascript" element={<Javascript />}></Route>
                <Route path="code" element={<Coding />}></Route>
                <Route path="react" element={<React />}></Route>
                <Route path="html" element={<Html />}></Route>
                <Route path="Misc" element={<Misc />}></Route>
              </Route>


              {/* <Route
              path="/search"
              element={<Search />}
            /> */}

              <Route
                path="*"
                element={<PageNotFound />}
              />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
      <Settings />
    </BrowserRouter>
  )
}

export default App
