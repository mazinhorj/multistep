import UserForm from './components/UserForm';
import Thanks from './components/Thanks';
import ReviewForm from './components/ReviewForm';
import Steps from './components/Steps';

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import './App.css';

// hooks
import { useForm } from './hooks/useForm';
import { useState } from 'react';

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};


function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value};
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h1>Deixe sua avaliação</h1>
        <p>Gostei da sua visita. Utilize o formulário abaixo para deixar suas sujestões e/ou críticas sobre meus projetos.</p>
      </div>
      <div className="form_container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs_container">
            {currentComponent}
          </div>
          <div className="actions">
            {!isFirstStep ? (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            ) : ("")}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
