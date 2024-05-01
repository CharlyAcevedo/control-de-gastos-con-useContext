import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { TBudgetActions, TBudgetState, budgetReducer, initialState } from "../reducers/budget-reducer";

type TBudgetContextProps = {
    state: TBudgetState
    dispatch: Dispatch<TBudgetActions>
}

type TBudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<TBudgetContextProps>(null!)

export const BudgetProvider = ({children}: TBudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}