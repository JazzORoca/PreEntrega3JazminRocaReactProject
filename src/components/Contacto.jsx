import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contacto = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contacto</h2>
      <div className="text-center">
        <p>Síguenos en nuestras redes sociales:</p>
        <ul className="list-unstyled">
          <li className="mb-3">
            <a href="https://www.instagram.com/divine_dermal/" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
              <FontAwesomeIcon icon={faInstagram} size="3x" className="me-2" />
              Instagram
            </a>
          </li>
          <li className="mb-3">
            <a href="https://www.facebook.com/divinedermal/" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
              <FontAwesomeIcon icon={faFacebook} size="3x" className="me-2" />
              Facebook
            </a>
          </li>
          <li>
            <a href="https://wa.me/tu_numero_de_telefono" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
              <FontAwesomeIcon icon={faWhatsapp} size="3x" className="me-2" />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacto;

