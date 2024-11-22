import { ReactNode } from "react";

interface Props{
    children: ReactNode;
    onClick: () => void;
}

const Boton = ({children, onClick}:Props) => {
    return(
        <button type="button" className="btn btn-outline-primary" onClick={onClick}>
            {children}
        </button>
    );
}

export default Boton;