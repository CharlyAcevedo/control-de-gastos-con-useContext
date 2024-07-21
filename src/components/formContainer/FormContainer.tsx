import { useMemo } from "react";
import { useBudget } from "../../hooks/useBudget";
import BudgetForm from "./budgetForm/BudgetForm";
import BudgetTracker from "./budgetTracker/BudgetTracker";
import ExpenseModal from "./expenseModal/ExpenseModal";
import ExpenseList from "../expenses/ExpenseList";
import FilterByCategory from "./filters/FilterByCategory";

export default function FormContainer() {

    const {state} = useBudget()

    const isValidBudget = useMemo(() => state.budget > 0,[state.budget])

    return (
        <>
            <section className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
                {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
            </section>
            {isValidBudget && (
                <main className="max-w-3xl mx-auto py-10">
                    <FilterByCategory />
                    <ExpenseList />
                    <ExpenseModal />
                </main>
            )}
        </>
    )
}