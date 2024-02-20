import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contacto</h5>
            <p>Email: info@divinedermal.com</p>
            <p>Teléfono: +1 234 567 890</p>
          </div>
          <div className="col-md-6">
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/terminos">Términos y condiciones</a>
              </li>
              <li>
                <a href="/privacidad">Política de privacidad</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p>&copy; 2024 Divine Dermal. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
