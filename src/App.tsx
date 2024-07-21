import { useEffect } from "react";
import FormContainer from "./components/formContainer/FormContainer"
import Header from "./components/header/Header"
import { useBudget } from "./hooks/useBudget"


function App() {
  const {state} = useBudget();

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state])

  return (
    <>
      <Header />
      <FormContainer />
    </>
  )
}

export default App
