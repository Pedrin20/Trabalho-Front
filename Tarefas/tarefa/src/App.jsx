import React, { useState } from 'react';
import Login from './components/Screens/Login';
import FormularioTarefa from './components/Screens/FormularioTarefa';
import GerenciadorTarefa from './components/Screens/GerenciadorTarefas';
import CreateAccount from './components/Screens/CreateAccount.';
import Home from './components/Screens/Home';
import Header from './components/Header';
import Sobre from './components/Screens/Sobre';

function App() {
  const [telaAtual, setTelaAtual] = useState("Home");
  const [isLogged, setIsLogged] = useState(false);
  

  const handleGoToSobre = () => {
    setTelaAtual("Sobre");
  }


  const handleGoToHome = () => {
    setTelaAtual("Home");
  }

  const handleGoToCreateAccount = () => {
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
            return <Home OnGoToLogin={handleGoToLogin} onLogin={handleLogin} onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome}/>;

      case "Login":
        return <Login OnGoToLogin={handleGoToLogin} onLogin={handleLogin} onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome} />;

      case "TaskManage":
        return <GerenciadorTarefa onAdd={handleAdd} OnGoToLogin={handleGoToLogin}/>;

      case "FormularioTarefa":
        return <FormularioTarefa OnGoToLogin={handleGoToLogin} onVoltarLista={handleVoltarLista}/>;

      case "CriarConta":
        return <CreateAccount OnGoToLogin={handleGoToLogin} onLogin={handleLogin} onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome}/>;

        case "Sobre":
        return <Sobre OnGoToLogin={handleGoToLogin} onLogin={handleLogin} onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome}/>;

      default:
        return <Home OnGoToLogin={handleGoToLogin} onLogin={handleLogin} onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome}/>;
    } 
  };

  return (
    <>
      {renderScreen()}
    </>
  );
}

export default App;