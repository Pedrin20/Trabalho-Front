import React from "react";
import Header from "../Header";
export default function Home ({ onGoToLogin, onGoToCreateAccount, onGoSobre, onGoHome }) {
  return (
    <>
      <Header onGoToLogin={onGoToLogin} onGoToCreateAccount={onGoToCreateAccount} onGoSobre={onGoSobre} onGoHome={onGoHome}/>
    <div style={{ fontFamily: "'Verdana', sans-serif", backgroundColor: "#f7f9fc", minHeight: "100vh", color: "#1a1a1a" }}>
      {/* Home Section */}
      <main style={mainStyle}>
        {/* Hero Section */}
        <section style={heroSectionStyle}>
          <div style={heroContentStyle}>
            <h2 style={{ fontSize: "2rem", margin: "0 0 1rem", color: "#003c8f", fontWeight:"bold" }}>Gerencie suas tarefas com facilidade!</h2>
            <p style={{ marginBottom: "1.5rem", color: "#4a4a4a", fontSize: "1.2rem" }}>
              O <strong>TaskManager</strong> é a ferramenta ideal para organizar sua vida. Com um design intuitivo e funcionalidades poderosas, 
              você nunca mais perderá uma tarefa importante!
            </p>
            <button onClick={onGoToCreateAccount} className="block bg-blue-500 hover:bg-blue-600 px-11 py-4 text-white rounded transition-colors ">Comece agora!</button>
            <p>Já tem uma conta?
            <a href="#" style={{ color: "#0056b3", textDecoration: "none", marginLeft: "0.2rem" }} onClick={onGoToLogin}>Entrar</a>
            </p>
          </div>
          <div style={heroImageStyle}>
            <img
              src="https://setting.com.br/wp-content/uploads/2019/06/como-organizar-tarefas-diarias.jpg"
              alt="Gestão de tarefas"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={sectionStyle}>
          <h2 style={{ color: "#003c8f" }}>Funcionalidades</h2>
          <ul style={featuresListStyle}>
            <li>📅 Planejamento diário e semanal.</li>
            <li>🔔 Notificações e lembretes automáticos.</li>
            <li>📊 Visualização detalhada do progresso.</li>
            <li>💡 Categorize e priorize tarefas.</li>
          </ul>
        </section>
      </main>
    </div>
      {/* Footer Section */}
    <footer style={footerStyle}>
        <div style={footerContent}>
          <h3 style={{ margin: "0 0 1rem", color: "#ffff" }}>TaskManager</h3>
          <p style={{color:"white"}}>© 2024 TaskManager. Todos os direitos reservados.</p>
          <nav style={footerNavStyle}>
            
          </nav>
        </div>
      </footer>
    </>
  );
};

// Estilos
const headerStyle = {
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  padding: "1rem 2rem",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const headerContent = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const navStyle = {
  display: "flex",
  gap: "1.5rem",
};

const navLinkStyle = {
  textDecoration: "none",
  color: "#0056b3",
  fontWeight: "500",
  fontSize: "1rem",
  transition: "color 0.3s ease",
};

const mainStyle = {
  padding: "2rem",
};

const heroSectionStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "3rem",
  gap: "2rem",
};

const heroContentStyle = {
  flex: 1,
};

const heroImageStyle = {
  flex: 1,
};

const sectionStyle = {
  marginTop: "2rem",
  padding: "1.5rem",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const featuresListStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  lineHeight: "1.8",
};

const footerStyle = {
  backgroundColor: "#1f2937",
  padding: "2rem",
  textAlign: "center",
  marginTop: "2rem",
};

const footerContent = {
  maxWidth: "600px",
  margin: "0 auto",
};

const footerNavStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  marginTop: "1rem",
};

const footerLinkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: "500",
};
