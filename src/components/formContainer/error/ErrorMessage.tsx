import { PropsWithChildren, ReactNode } from "react"

type TErrorMessageProps = {
    children: ReactNode
}

// Solo por ejemplo uso los dos tipos de props, para poder tener ejemplificadas ambas formas
export default function ErrorMessage({children}: PropsWithChildren | TErrorMessageProps){
    return(
        <>
            <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
                {children}
            </p>
        </>
    )
}