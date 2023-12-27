// src/components/MeetingForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './MeetingForm.css'; 

const MeetingForm = () => {
  const [formData, setFormData] = useState({
    tenant_slug: '',
    project_id: '',
    name: '',
    category: '',
    hosts: [],
    'room[password]': '',
    'schedule[duration_min]': '',
    'schedule[starts_at]': '',
    'schedule[ends_at]': '',
    'experiences[]': '',
  });
  
  const [authorizationToken, setAuthorizationToken] = useState('');

  const handleChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleCreateMeeting = async () => {
    try {
      const apiResponse = await axios.post(
        'https://api.tstvixr.in/v2/wonder/meeting/create',
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
      <label>Tenant Slug:</label>
      <input type="text" onChange={e => handleChange('tenant_slug', e.target.value)} />

      <label>Project ID:</label>
      <input type="text" onChange={e => handleChange('project_id', e.target.value)} />

      <label>Name:</label>
      <input type="text" onChange={e => handleChange('name', e.target.value)} />

      <label>Category:</label>
      <input type="text" onChange={e => handleChange('category', e.target.value)} />

      <label>Host</label>
      <input type='text' onChange={e=> handleChange('hosts', e.target.value)}/>

      <label>Room Password:</label>
      <input
        type="text"
        onChange={e => handleChange('room.password', e.target.value)}
      />

      <label>Schedule Duration (min):</label>
      <input
        type="text"
        onChange={e => handleChange('schedule.duration_min', e.target.value)}
      />

      <label>Schedule Starts At:</label>
      <input
        type="text"
        onChange={e => handleChange('schedule.starts_at', e.target.value)}
      />

      <label>Schedule Ends At:</label>
      <input
        type="text"
        onChange={e => handleChange('schedule.ends_at', e.target.value)}
      />

      <label>Experiences:</label>
      <input
        type="text"
        onChange={e => handleChange('experiences', e.target.value.split(','))}
      />

      <button onClick={handleCreateMeeting}>Submit</button>
       </div>
       
    </div>
  );

  return <div>{renderFormFields()}</div>;
};

export default MeetingForm;
