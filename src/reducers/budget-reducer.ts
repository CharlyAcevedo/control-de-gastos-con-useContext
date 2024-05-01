
export type TBudgetActions = 
    { type: 'add-budget', payload: { budget: number } }

export type TBudgetState = {
    budget: number
}

export const initialState: TBudgetState = {
    budget: 0
}

export const budgetReducer = (
    state: TBudgetState = initialState,
    action: TBudgetActions
) => {
    
    if(action.type === 'add-budget'){
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    return state
}