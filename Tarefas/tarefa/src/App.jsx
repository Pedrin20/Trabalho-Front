import React, { useState } from 'react';
import Login from './components/Screens/Login';
import FormularioTarefa from './components/Screens/FormularioTarefa';
import GerenciadorTarefa from './components/Screens/GerenciadorTarefas';

function App() {
  const [telaAtual, setTelaAtual] = useState("Login");

  const handleLogin = () => {
    setTelaAtual("TaskManage");
  };

  const handleVoltarLista = ()=> {
    setTelaAtual("TaskManage");
  }

  const handleAdd = () => {
    setTelaAtual("FormularioTarefa");
  };

  const renderScreen = () => {
    switch (telaAtual) {
      case "Login":
        return <Login onLogin={handleLogin} />;
      case "TaskManage":
        return <GerenciadorTarefa onAdd={handleAdd} />;
      case "FormularioTarefa":
        return <FormularioTarefa onVoltarLista={handleVoltarLista}/>;
      default:
        return <Login onLogin={handleLogin} />;
    }
  };

  return (
    <>
      {renderScreen()}
    </>
  );
}

export default App;