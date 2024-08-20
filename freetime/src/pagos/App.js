import React from 'react';
import SaldoSection from './components/SaldoSection/SaldoSection';
import AccountSection from './components/AccountSection/AccountSection';
import RechargeSection from './components/RechargeSection/RechargeSection';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
      <SaldoSection saldo="$100.000" buttons={["Registrar Cuenta", "Ver Cuentas", "Retirar", "Historial"]} />
      <SaldoSection saldo="$100.000" buttons={["Registrar Cuenta", "Ver Cuentas", "Retirar", "Recargar", "Historial"]} />
      <AccountSection />
      <RechargeSection />
    </div>
  );
};

export default App;
