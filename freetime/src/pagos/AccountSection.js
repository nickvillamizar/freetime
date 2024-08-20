import React from 'react';
import './AccountSection.css';

const AccountSection = () => {
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
      <h2>Cuentas:</h2>
      <div className="input-container">
        <input type="radio" name="account" id="account1" value="3214879568" />
        <label htmlFor="account1">3214879568</label>
      </div>
      <div className="input-container">
        <input type="radio" name="account" id="account2" value="3152698741" />
        <label htmlFor="account2">3152698741</label>
      </div>
    </div>
  );
};

export default AccountSection;
