import { useMemo, useState } from "react"
import { useBudget } from "../../../hooks/useBudget"

export default function BudgetForm(){

    const {state, dispatch} = useBudget()

    const [budget, setBudget] = useState(state.budget)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }

    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault()
        dispatch({ type: 'add-budget', payload: { budget } })
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    },[budget])

    return(
        <>
            <form className="space-y-5">
                <div className="flex flex-col space-y-5">
                    <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                        Definir Presupuesto
                    </label>
                    <input 
                        id="budget"
                        type="number"
                        className="w-full bg-white border border-gray-200 p-2"
                        placeholder="Define tu presupuesto $..."
                        name="budget"
                        value={budget}
                        onChange={handleChange}
                    />
                </div>
                <input 
                    type="submit"
                    value="Definir Presupuesto"
                    className="bg-blue-600 hover:bg-blue-800 cursor-pointer p-2 w-full text-white font-black uppercase disabled:opacity-40"
                    disabled={isValid}
                    onClick={handleClick}
                />
            </form>
        </>
    )
}