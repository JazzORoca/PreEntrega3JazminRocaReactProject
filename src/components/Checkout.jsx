import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../firebase/config';

// Importa el archivo CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = () => {
    // INFORMACIÓN DEL CONTEXT
    const { cart, totalCarrito, cantidadCarrito, vaciarCarrito } = useContext(CartContext);

    // DATOS DEL COMPONENT
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');

    // SUBMIT
    const manejadorFormulario = (event) => {
        // EVITAMOS QUE SE EJECUTE EL EVENTO POR DEFECTO DEL SUBMIT
        event.preventDefault();

        // ALGUNOS MANEJOS DE ERRORES
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('Completar los campos requeridos');
            return;
        }

        if (email !== emailConfirmacion) {
            setError('Los campos del email no coinciden');
            return;
        }

        // GENERAMOS EL OBJETO DE LA ORDEN DE COMPRA
        const orden = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),
            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        // GENERAMOS LA LÓGICA PARA LA ÓRDEN Y REDUCCIÓN DEL STOCK
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, 'item', productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                });
            })
        )
            .then(() => {
                addDoc(collection(db, 'ordenes'), orden)
                    .then((docRef) => {
                        setError('');
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.log(error);
                        setError('Se produjo un error al crear la orden');
                    });
            })
            .catch((error) => {
                console.log(error);
                setError('No se puede actualizar el stock');
            });
    };

    return (
        <div className="container mt-4">
            <h1>Ingresa tus datos</h1>

            <form onSubmit={manejadorFormulario}>
                {/* MAPEO DE PRODUCTOS */}
                {cart.map((producto) => (
                    <div key={producto.producto.id}>
                        <p>
                            {''}
                            {producto.producto.nombre} x {producto.cantidad}
                        </p>
                        <hr />
                    </div>
                ))}

                {/* CAMPOS DEL FORMULARIO */}
                <div>
                    <div className="mb-3">
                        <label htmlFor="Nombre" className="form-label">
                            Nombre
                        </label>
                        <input name="Nombre" type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Apellido" className="form-label">
                            Apellido
                        </label>
                        <input name="Apellido" type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Teléfono" className="form-label">
                            Teléfono
                        </label>
                        <input name="Teléfono" type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input name="Email" type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="EmailConfirmacion" className="form-label">
                            Email Confirmacion
                        </label>
                        <input name="EmailConfirmacion" type="email" className="form-control" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary mb-2">
                        Completar compra
                    </button>
<br></br>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {ordenId && (
                        <strong className='mx-2'>
                            ¡Gracias por tu compra {nombre} !
                            <br></br>
                             Tu número de orden es: {ordenId}
                        </strong>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Checkout;
