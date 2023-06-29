import { useState } from 'react';
import './App.css';
import Form from './form/Form';
import TemplateAnnalect from './form/TemplateAnnalect';
import { StateProvider } from './Context';
import TemplateOmni from './form/TemplateOmni';

function App() {
  const [page, setPage] = useState('form');
  
    
  const handlePageForm = () =>{
    setPage('form');
  }
  const handlePageTemplate = () =>{
    setPage('annatemplet');
  }
  return (
    <StateProvider>
      <div className="App">
        {page === 'form' && (<Form handlePageTemplate={handlePageTemplate}/>)}
        {page === 'annatemplet' && (<TemplateAnnalect handlePageForm={handlePageForm}/>)}
        {page === 'omnitemplet' && (<TemplateOmni handlePageForm={handlePageForm}/>)}
        {/* <TemplateAnnalect/> */}
      </div>
    </StateProvider>
  );
}

export default App;