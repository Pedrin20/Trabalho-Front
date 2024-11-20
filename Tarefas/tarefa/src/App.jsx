import React, { useState } from 'react';
import Login from './components/Screens/Login';
import FormularioTarefa from './components/Screens/FormularioTarefa';
import GerenciadorTarefa from './components/Screens/GerenciadorTarefas';
import CreateAccount from './components/Screens/CreateAccount.';

function App() {
  const [telaAtual, setTelaAtual] = useState("Login");

  const handleCreateAccount = () => {
    setTelaAtual("CriarConta");
  }

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
        return <Login  onCreateAccount={handleCreateAccount} onLogin={handleLogin} />;
      case "TaskManage":
        return <GerenciadorTarefa onAdd={handleAdd} />;
      case "FormularioTarefa":
        return <FormularioTarefa onVoltarLista={handleVoltarLista}/>;
        case "CriarConta":
          return <CreateAccount onLogin={handleLogin}/>;
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