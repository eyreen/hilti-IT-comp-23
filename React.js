import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EquipmentList = () => {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    axios.get('/equipment')
      .then(res => {
        setEquipment(res.data);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Usage</th>
          <th>Maintenance</th>
        </tr>
      </thead>
      <tbody>
        {equipment.map(item => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.usage}</td>
            <td>{item.maintenance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EquipmentList;
