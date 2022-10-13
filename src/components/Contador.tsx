import { Alert, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(10);
    const [contadorAux, setContadorAux] = useState(false);
    const [mensagem, setMensagem] = useState("");

    const aumentaMes = () => {
        setContador(contador + 1);
    };

    const diminuiMes = () => {
        setContador(contador - 1);
    };
    
    const multiMes = () => {
        setContador(contador * 2);
    };

    const divideMes = () => {
        setContador(contador / 2);
    };

    const zerarMes = () => {
        setContador(0);
    };

    useEffect(() => {
        if (contador > 12) {
          setContadorAux(true);
          setMensagem("O ano possui apenas 12 meses");
        } else {
            setContadorAux(false);
        }
    }, [contador]);


    return(
        <div>
            <h1>Primeiro componente</h1>
            <div>Meu mês de aniversário é: {contador}</div>
            {contadorAux &&
                <Alert severity="error">{mensagem}</Alert>
            } 
            <Button onClick={aumentaMes}>Adicionar mês</Button>
            <Button onClick={diminuiMes}>Diminuir mês</Button>
            <Button onClick={multiMes}>Multiplicar mês</Button>
            <Button onClick={divideMes}>Dividir mês</Button>
            <Button onClick={zerarMes}>Zerar meses</Button>
        </div>
    );
};

export default Contador;