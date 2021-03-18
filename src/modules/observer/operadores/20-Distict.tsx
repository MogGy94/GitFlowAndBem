import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import { fromEvent, interval, from } from 'rxjs';
import { distinct, map, takeUntil, takeWhile } from 'rxjs/operators';


const MyDistinct = () => {
    const [numeros, setNumeros] = useState([]);
    const [pers, setPers] = useState([]);

    const numeros$ = from([1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 1]).pipe(
        distinct()
    );

    const personajes$ = from(personajes).pipe(
        distinct((({ nombre }) => (nombre)))
    );
    const handleAddNumber = (num) => {
        setNumeros(actual => ([...actual, num]))
    }
    const handleAddPer = (per) => {
        setPers(actual => ([...actual, per]))
    }
    useEffect(() => {
        numeros$.subscribe(handleAddNumber)
        personajes$.subscribe(handleAddPer)
    }, [])
    useEffect(() => {
        console.log(pers);

    }, [pers])
    return (
        <div className="">
            <h2>Distinct -Operator </h2>
            <p>el operador <mark>Distinct</mark> emite solo las emiciones del Observable que no hallansido emitidas previamente por el Observable ; se puede pasar una funcion como parametro que busque sobre la propiedad especifica de un Objeto</p>
            <ul>
                {
                    numeros.map((num, i) => (
                        <li key={i}> {num}</li>
                    ))
                }
            </ul>

            {
                pers.map((per, i) => (
                    <div key={`${per.nombre}${i}`}>
                        <h3><mark>{per.nombre}</mark></h3>
                        <h5><mark>{per.element}</mark></h5>
                    </div>
                ))
            }

        </div>
    )
}

interface Personaje {
    nombre: string,
    element: string,
}

const personajes: Personaje[] = [
    {
        nombre: "Megaman",
        element: "Ice"
    },
    {
        nombre: "CutMan",
        element: "Iron"
    },
    {
        nombre: "Airman",
        element: "Wind"
    },
    {
        nombre: "Rockman",
        element: "Energi"
    },
    {
        nombre: "Zero",
        element: "Fire"
    },
    {
        nombre: "Megaman",
        element: "Ice"
    },
    {
        nombre: "Rockman",
        element: "Energi"
    },
    {
        nombre: "Zero",
        element: "Fire"
    },
]

export default MyDistinct;