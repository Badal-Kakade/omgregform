import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DbAxios = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Prepare the data to be sent to the SharePoint list
      const itemData = {
        name: name,
      };

      // Make a POST request to create a new item in the SharePoint list
      await axios.post(
        'https://oneomnicom-my.sharepoint.com/personal/badal_kakade_annalect_com/Lists/JD_Automation/AllItems.aspx?env=WebViewList',
        itemData
      );

      // Clear the form and indicate successful creation
      setName('');
      alert('Item created successfully!');
    } catch (error) {
      console.error('Error creating item:', error);
      alert('Error creating item. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>SharePoint List</h1>
      <form onSubmit={handleCreate}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit" disabled={loading}>
          Create Item
        </button>
      </form>
    </div>
  );
};
export default DbAxios;