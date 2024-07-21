import { formatCurrency } from "../../../helpers"

type TAmountDisplayProps = {
    label?: string
    amount: number
}

export function AmountDisplay({label, amount}: TAmountDisplayProps){

    return (
        <>
            <p className="text-2xl text-blue-600 font-bold">
                {label && `${label}: `}
                <span className="font-black text-black">{formatCurrency(amount)}</span>
            </p>
        </>
    )
}