import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DbAxios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const response = await axios.get(
            'https://oneomnicom-my.sharepoint.com/personal/badal_kakade_annalect_com/Lists/JD_Automation/AllItems.aspx',
            {
              headers: {
                Accept: 'application/json;odata=verbose',
              },
            }
          );

      const items = response.data.d.results;
      setData(items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>SharePoint Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.Id}>{item.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DbAxios;