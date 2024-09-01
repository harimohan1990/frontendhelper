import logo from './logo.svg';
import './App.css';
import Header from './components/common/header/Header';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/homepage/HomePage';
import Htmlpage from './pages/htmlPage/Htmlpage';
import CssPage from './pages/csspage/CssPage';
import Javascriptpage from './pages/javascriptpage/Javascriptpage';
import NextPage from './pages/nextpage/NextPage';
import Reactpage from './pages/reactpage/Reactpage';

import DsaPage from './pages/dsa/DsaPage';
import SystemDesign from './pages/systemdesign/SystemDesign';
import Machinecode from './pages/machinecoding/Machinecode';
import Footer from './components/common/footer/Footer';
import TypeScriptPage from './pages/typescriptpage/TypeScriptPage';



function App() {
  
  return (
   <BrowserRouter>
    <div className="App">
     <Header/>
     <Routes>
           <Route path="/" element={< Home/>} />
           <Route path="/HtmlInterview" element={< Htmlpage/>} />
           <Route path="/CssInterview" element={< CssPage/>} />
           <Route path="/JavaScriptInterview" element={< Javascriptpage/>} />
           <Route path="/TypeScriptInterview" element={<TypeScriptPage />} />
           <Route path='/ReactInterview' element={<Reactpage/>}/>
           <Route path="/NextInterview" element={< NextPage/>} />
           <Route path="/DSAInterview" element={< DsaPage/>} />
           <Route path="/SystemDesign" element={<SystemDesign />} />
           <Route path="/Machinecode" element={<Machinecode />} />
          
         </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
