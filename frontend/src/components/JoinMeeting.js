// src/components/MeetingForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './MeetingForm.css'; 

const JoinMeeting = () => {
  const [formData, setFormData] = useState({
    uuid: '',
    password: '',
    project_id: '',
  });
  
  const [authorizationToken, setAuthorizationToken] = useState('');

  const handleChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleJoinMeeting = async () => {
    try {
      const apiResponse = await axios.post(
        'https://api.tstvixr.in/v2/wonder/meeting/join',
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

      <label>password:</label>
      <input type="text" onChange={e => handleChange('password', e.target.value)} />

      <label>Project ID:</label>
      <input type="text" onChange={e => handleChange('project_id', e.target.value)} />

     

      <button onClick={handleJoinMeeting}>Submit</button>
       </div>
       
    </div>
  );

  return <div>{renderFormFields()}</div>;
};

export default JoinMeeting;
