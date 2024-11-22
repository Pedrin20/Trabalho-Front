import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
function Sobre({onGoToLogin, onGoToCreateAccount, onGoSobre, onGoHome}) {
  return (
    <>
    <Header onGoToLogin={onGoToLogin} onGoToCreateAccount={onGoToCreateAccount} onGoSobre={onGoSobre} onGoHome={onGoHome}/>
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Sobre o TaskManager</h1>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">A sua agenda, do seu jeito</h2>
          <p className="text-gray-700 leading-relaxed">
            Cansado de ferramentas genéricas que não se adaptam à sua rotina? Com o TaskManager, você tem o poder de personalizar cada detalhe da sua organização. Crie listas, defina prioridades, escolha cores e personalize notificações para que sua agenda reflita exatamente o que você precisa. Organizar seu dia a dia nunca foi tão fácil e divertido!
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">Nosso propósito</h2>
          <p className="text-gray-700 leading-relaxed">
            Acreditamos que todo mundo merece ter mais tempo para as coisas que ama. Por isso, criamos o TaskManager, uma ferramenta intuitiva e personalizável que te ajuda a organizar suas tarefas, alcançar seus objetivos e viver uma vida mais equilibrada. Com o TaskManager, você tem o controle total da sua rotina.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Por que escolher o TaskManager?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="curr Color" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-gray-700"><strong className="font-semibold">Flexível e adaptável:</strong> O TaskManager se molda à sua rotina, não o contrário.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-gray-700"><strong className="font-semibold">Intuitivo e fácil de usar:</strong> Comece a usar o TaskManager em poucos minutos.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-gray-700"><strong className="font-semibold">Personalize tudo:</strong> Cores, notificações, listas... você decide!</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-gray-700"><strong className="font-semibold">Aumente sua produtividade:</strong> Conquiste mais em menos tempo.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-gray-700"><strong className="font-semibold">Reduza o estresse:</strong> Tenha mais controle sobre suas tarefas.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Sobre;

