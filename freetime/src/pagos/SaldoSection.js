import React from 'react';
import './SaldoSection.css';

const SaldoSection = ({ saldo, buttons }) => {
  return (
    <div className="section">
      <Header 
        title="Sección de Pagos"
        logoSrc="https://via.placeholder.com/30"
        userImgSrc="https://via.placeholder.com/20"
      />
      <h2>Saldo:</h2>
      <div className="saldo">
        {saldo}
      </div>
      {buttons.map((button, index) => (
        <button key={index} className="button">{button}</button>
      ))}
    </div>
  );
};

export default SaldoSection;
