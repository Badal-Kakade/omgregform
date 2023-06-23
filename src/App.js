import { useEffect, useState } from 'react';
import './App.css';
import Form from './form/Form';
import TemplateAnnalect from './form/TemplateAnnalect';

function App() {
  const [page, setPage] = useState('form');
  
    
  const handlePageForm = () =>{
    setPage('form');
  }
  const handlePageTemplate = () =>{
    setPage('templet');
  }
  return (
    <div className="App">
      {page === 'form' && (<Form handlePageTemplate={handlePageTemplate}/>)}
      {page === 'templet' && (<TemplateAnnalect handlePageForm={handlePageForm}/>)}
      {/* <TemplateAnnalect/> */}
    </div>
  );
}

export default App;
