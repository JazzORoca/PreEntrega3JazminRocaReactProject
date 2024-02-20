import Item from "./Item";

const ItemList = ({ productos }) => {
    return (
        <div className="container">
        <div className="row">
          {Array.isArray(productos) ? (
            productos.map((producto) => (
              <div key={producto.id} className="col-md-4 mb-4">
                <Item producto={producto} />
              </div>
            ))
          ) : (
            <p>Error: Productos no es un array.</p>
          )}
        </div>
      </div>
    );
  };
  
 
export default ItemList;