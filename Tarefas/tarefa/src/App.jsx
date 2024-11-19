import React, { useState } from 'react';
import TaskManage from './components/Screens/TaskManage';
import Login from './components/Screens/Login';
import FormularioTarefa from './components/Screens/FormularioTarefa';

function App() {
  const [telaAtual, setTelaAtual] = useState("Login");

  const handleLogin = () => {
    setTelaAtual("TaskManage");
  };

  const handleAdd = () => {
    setTelaAtual("FormularioTarefa");
  };

  const renderScreen = () => {
    switch (telaAtual) {
      case "Login":
        return <Login onLogin={handleLogin} />;
      case "TaskManage":
        return <TaskManage handleAdd={handleAdd} />;
      case "FormularioTarefa":
        return <FormularioTarefa />;
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