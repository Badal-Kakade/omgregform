import { useEffect, useState } from 'react';
import './App.css';
import Form from './form/Form';
import TemplateAnnalect from './form/TemplateAnnalect';
import { StateProvider } from './Context';
import TemplateOmni from './form/TemplateOmni';
import DbAxios from './dbconnection/DbAxios'
import { sp } from '@pnp/sp';
import Template from './form/Template';

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
        baseUrl: 'https://oneomnicom-my.sharepoint.com/personal/badal_kakade_annalect_com/Lists/JD_Automation/AllItems.aspx',
      },
    });
    getCurrentUser();
    readItems();
  }, []);

  const readItems = async () => {
    try {
      const list = sp.web.lists.getByTitle('JD_Automation');
      const items = await list.items.get();
      console.log('Retrieved items:', items);
    } catch (error) {
      console.error('Error retrieving items:', error);
    }
  };

  
    
  const handlePageForm = () =>{
    setPage('form');
  }
  const handlePageTemplate = () =>{
    setPage('template');
  }
  return (
    <StateProvider>
      <div className="App">
        {page === 'form' && (<Form handlePageTemplate={handlePageTemplate}/>)}
        {page === 'template' && (<Template handlePageForm={handlePageForm}/>)}
        {/* <DbAxios /> */}
      </div>
    </StateProvider>
  );
}

export default App;