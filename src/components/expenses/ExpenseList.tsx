import { useMemo } from "react";
import { useBudget } from "../../hooks/useBudget"
import ExpenseDetail from "./Expensedetail";
import { TExpense } from "../../types";


export default function ExpenseList(){
    const { state } = useBudget();

    const expensesToShow = state.currentCategory === 'Todas' ? 
        state.expenses : 
        state.expenses.filter(
            (expense: TExpense) => expense.category === state.currentCategory
        )
    const isEmpty = useMemo(() => expensesToShow.length === 0, [expensesToShow])

    
    return(
        <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
            {isEmpty ?
                <p className="text-gray-600 text-2xl font-bold">
                    No hay gastos
                </p>
                :
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">
                        Listado de Gastos
                    </p>
                    {expensesToShow.map((expense) => (
                        <ExpenseDetail
                            key={expense.id}
                            expense={expense}
                        />
                    ))}
                </>
            }
        </div>
    )
}