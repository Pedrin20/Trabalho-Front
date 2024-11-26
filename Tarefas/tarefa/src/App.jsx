import React, { useState } from 'react';
import Login from './components/Screens/Login';
import FormularioTarefa from './components/Screens/FormularioTarefa';
import GerenciadorTarefa from './components/Screens/GerenciadorTarefas';
import CreateAccount from './components/Screens/CreateAccount.';
import Home from './components/Screens/Home';
import Header from './components/Header';
import Sobre from './components/Screens/Sobre';
import Configuracoes from './components/Screens/Configuracoes';
import Perfil from './components/Screens/Perfil';

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

  const handleLogout = () => {
    setTelaAtual("Login");
    setIsLogged(false);
  };

  const handleVoltarLista = ()=> {
    setTelaAtual("TaskManage");
  }

  const handleAdd = () => {
    setTelaAtual("FormularioTarefa");
  };

  {/* handle menu logado */}
  const handleGoToConfiguracoes = () => {
    setTelaAtual("Configuracoes");
  }
  const handleGoToPerfil = () => {
    setTelaAtual("Perfil");
  }
  const handleGoToTarefas = () => {
    setTelaAtual("TaskManage");
  }
  
  
  const renderScreen = () => {
    switch (telaAtual) {
      case "Home":
            return <Home OnGoToLogin={handleGoToLogin} onLogin={handleLogin} onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome}/>;

      case "Login":
        return <Login OnGoToLogin={handleGoToLogin} onLogin={handleLogin} onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome} />;

      case "TaskManage":
        return <GerenciadorTarefa onGoToPerfil={handleGoToPerfil} onGoToConfiguracoes={handleGoToConfiguracoes} onAdd={handleAdd} OnGoToLogin={handleGoToLogin}  onLogout={handleLogout}/>;

      case "FormularioTarefa":
        return <FormularioTarefa onGoToTarefas={handleGoToTarefas} onGoToConfiguracoes={handleGoToConfiguracoes} OnGoToLogin={handleGoToLogin} onLogout={handleLogout} onVoltarLista={handleVoltarLista}/>;

      case "CriarConta":
        return <CreateAccount OnGoToLogin={handleGoToLogin} onLogin={handleLogin} onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome}/>;

        case "Sobre":
        return <Sobre OnGoToLogin={handleGoToLogin} onLogin={handleLogin} onGoToCreateAccount={handleGoToCreateAccount} onGoToLogin={handleGoToLogin} onGoSobre={handleGoToSobre} onGoToHome={handleGoToHome}/>;

        case "Configuracoes":
          return <Configuracoes onGoToConfiguracoes={handleGoToConfiguracoes} onLogout={handleLogout} onGoToPerfil={handleGoToPerfil} onGoToTarefas={handleGoToTarefas}/>

        case "Perfil":
          return <Perfil onLogout={handleLogout} onGoToConfiguracoes={handleGoToConfiguracoes} onGoToPerfil={handleGoToPerfil} onGoToTarefas={handleGoToTarefas}/>


      
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