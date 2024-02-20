import { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  const [isActive, setIsActive] = useState(false);

  const cardStyle = {
    backgroundColor: isActive ? '#ffeeba' : '#f8f9fa',
    border: isActive ? '2px solid #ffc107' : '1px solid #dee2e6',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: isActive ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, border 0.3s, box-shadow 0.3s',
  };

  const titleStyle = {
    textDecoration: 'none',
    color: '#343a40',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
  };

  return (
    <Link
      to={`/detalle/${producto.id}`}
      style={{ textDecoration: 'none' }}
      onClick={() => setIsActive(!isActive)}
    >
      <div key={producto.id} className='container card' style={cardStyle}>
        <img src={producto.imagen} alt={producto.nombre} className='card-img-top' />
        <div className='card-body'>
          <h5 className='card-title' style={titleStyle}>
            {producto.nombre}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Item;


