import React from 'React';

class EquipmentList extends React.Component {
  state = {
    equipment: [],
  };

  componentDidMount() {
    fetch('/api/equipment')
      .then(response => response.json())
      .then(data => {
        this.setState({ equipment: data });
      });
  }

  render() {
    return (
      <ul>
        {this.state.equipment.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}

export default EquipmentList;
