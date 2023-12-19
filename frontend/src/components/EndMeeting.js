// src/components/MeetingForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './MeetingForm.css'; 

const EndMeeting = () => {
  const [formData, setFormData] = useState({
    uuid: '',
    tenant_slug: '',
    project_id: '',
  });
  
  const [authorizationToken, setAuthorizationToken] = useState('');

  const handleChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleEndMeeting = async () => {
    try {
      const apiResponse = await axios.post(
        'https://api.tstvixr.in/v2/wonder/meeting/end',
        formData,
        {
          headers:{
            Authorization:`Bearer:${authorizationToken}`,
          },
        }
      );

      console.log('API Response:', apiResponse.data);
      // You can handle the response as needed
    } catch (error) {
      console.error('Error creating meeting:', error);
    }
  };

  const renderFormFields = () => (
    <div>
       
       <div className='main'>
       <label>Authorization Token:</label>
      <textarea
        type="text"
        value={authorizationToken}
        onChange={e => setAuthorizationToken(e.target.value)}
      />    

      <label>Meeting ID:</label>
      <input type="text" onChange={e => handleChange('uuid', e.target.value)} />

      <label>Tenant Slug:</label>
      <input type="text" onChange={e => handleChange('tenant_slug', e.target.value)} />

      <label>Project ID:</label>
      <input type="text" onChange={e => handleChange('project_id', e.target.value)} />

     

      <button onClick={handleEndMeeting}>Submit</button>
       </div>
       
    </div>
  );

  return <div>{renderFormFields()}</div>;
};

export default EndMeeting;
