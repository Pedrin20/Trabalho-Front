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
            return <Home onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome}/>;

      case "Login":
        return <Login  onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome} />;

      case "TaskManage":
        return <GerenciadorTarefa onAdd={handleAdd} />;

      case "FormularioTarefa":
        return <FormularioTarefa onVoltarLista={handleVoltarLista}/>;

      case "CriarConta":
        return <CreateAccount onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome}/>;

        case "Sobre":
        return <Sobre onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome}/>;

      default:
        return <Home onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome}/>;
    } 
  };

  return (
    <>
      {renderScreen()}
    </>
  );
}

export default App;