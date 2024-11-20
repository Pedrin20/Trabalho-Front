import React, { useState } from 'react';
import Login from './components/Screens/Login';
import FormularioTarefa from './components/Screens/FormularioTarefa';
import GerenciadorTarefa from './components/Screens/GerenciadorTarefas';
import CreateAccount from './components/Screens/CreateAccount.';
import Home from './components/Screens/Home';
import Header from './components/Header';
function App() {
  const [telaAtual, setTelaAtual] = useState("Home");
  const [isLogged, setIsLogged] = useState(false);
  


  const loggedRender = () => {
    if (isLogged === false) {
      return <Header onGoHome={handleGoHome} onCreateAccount={handleCreateAccount}/>;
    } else if (telaAtual === "TaskManage" || telaAtual === "FormularioTarefa") {
      return;
    }
  }


  const handleGoHome = () => {
    setTelaAtual("Home");
  }

  const handleCreateAccount = () => {
    setTelaAtual("CriarConta");
  }

  const handleGoToLogin = () =>{
    setTelaAtual("Login");
  }

  const handleLogin = () => {
    setTelaAtual("TaskManage");
    setIsLogged(true);
  };

  const handleVoltarLista = ()=> {
    setTelaAtual("TaskManage");
  }

  const handleAdd = () => {
    setTelaAtual("FormularioTarefa");
  };

  
  const renderScreen = () => {
    switch (telaAtual) {
      case "Home":
            return <Home onCreateAccount={handleCreateAccount} onGoToLogin={handleGoToLogin}/>;

      case "Login":
        return <Login  onCreateAccount={handleCreateAccount} onLogin={handleLogin} />;

      case "TaskManage":
        return <GerenciadorTarefa onAdd={handleAdd} />;

      case "FormularioTarefa":
        return <FormularioTarefa onVoltarLista={handleVoltarLista}/>;

      case "CriarConta":
        return <CreateAccount onLogin={handleLogin}/>;

      default:
        return <Home onCreateAccount={handleCreateAccount} onGoToLogin={handleGoToLogin}/>;
    } 
  };

  return (
    <>
      {loggedRender()}
      {renderScreen()}
    </>
  );
}

export default App;