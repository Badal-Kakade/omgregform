import { useEffect, useState } from 'react';
import './App.css';
import Form from './form/Form';
import TemplateAnnalect from './form/TemplateAnnalect';
import { StateProvider } from './Context';
import TemplateOmni from './form/TemplateOmni';
import DbAxios from './dbconnection/DbAxios'
import { sp } from '@pnp/sp';

function App() {
  const [page, setPage] = useState('form');
  const getCurrentUser = async () => {
    try {
      const currentUser = await sp.web.currentUser.get();
      console.log('currentUser', currentUser);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    sp.setup({
      sp: {
        headers: {
          Accept: 'application/json;odata=verbose',
        },
        baseUrl: 'http://localhost:3000/',
      },
    });
    getCurrentUser();
  }, []);

  
    
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
        {/* <DbAxios /> */}
      </div>
    </StateProvider>
  );
}

export default App;