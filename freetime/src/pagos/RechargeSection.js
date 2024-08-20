import React from 'react';
import './RechargeSection.css';

const RechargeSection = () => {
  return (
    <div className="section">
      <Header 
        title="Sección de Pagos"
        logoSrc="https://via.placeholder.com/30"
        userImgSrc="https://via.placeholder.com/20"
      />
      <h2>Saldo:</h2>
      <div className="saldo">
        $100.000
      </div>
      <h2>¿Cuánto desea recargar?</h2>
      <div className="input-container">
        <input type="text" placeholder="Ingrese la cantidad" />
      </div>
      <button className="button">Recargar</button>
    </div>
  );
};

export default RechargeSection;
