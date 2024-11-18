import { useState } from "react";
import TaskManage from "./components/Screens/TaskManage";
import Login from "./components/Screens/Login"; // Corrigido para importação padrão

function App() {
  const [telaAtual, setTelaAtual] = useState("Login");

  const handleLogin = () => {
   //Verificao usuario
    setTelaAtual("TaskManage");
  };

  const renderScreen = () => {
    switch (telaAtual) {
      case "Login":
        return <Login onLogin={handleLogin} />;
      case "TaskManage":
        return <TaskManage />;
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