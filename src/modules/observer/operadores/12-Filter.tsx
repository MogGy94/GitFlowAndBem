import * as React from 'react';
import { useState, useEffect } from 'react';
import { range, of, fromEvent } from 'rxjs';
import { filter, pluck, map } from 'rxjs/operators';
interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: "heroe",
        nombre: "bonbon"
    },
    {
        tipo: "heroe",
        nombre: "burbuja"
    },
    {
        tipo: "heroe",
        nombre: "vellota"
    },
    {
        tipo: "villano",
        nombre: "mojohoho"
    },
    {
        tipo: "villano",
        nombre: "él"
    },
    {
        tipo: "villano",
        nombre: "Mounstro Generico "
    },
]

const MyFilter = () => {
    const [key, setKey] = useState();
    useEffect(() => {
        const range$ = range(20, 30).pipe(
            filter((val, i) => {
                //console.log({ index: i });
                return val % 2 === 1;
            })
        )
        range$.subscribe(console.log);
        const personajes$ = of(...personajes).pipe(
            ///pluck('tipo'),
            filter(per => {
                return per.tipo === "heroe";
            })
        )
        personajes$.subscribe(console.log);

        /** Encadenamiento de Operadores */
        const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
            map(event => event.code),
            // filter(key => key === 'Enter')
        );

        keyup$.subscribe<Dispatch>(setKey)


    }, [])
    return (
        <>
            <h2>{key || "Filter Operator"}</h2>
        </>
    )
}

export default MyFilter;

