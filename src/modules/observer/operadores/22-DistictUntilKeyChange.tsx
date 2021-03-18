import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import { fromEvent, interval, from } from 'rxjs';
import { distinct, map, takeUntil, takeWhile, distinctUntilChanged } from 'rxjs/operators';


const MyDistinctUntilChange = () => {
    const [pers, setPers] = useState([]);


    const personajes$ = from(personajes).pipe(
        distinctUntilChanged((anterior, actual) => anterior.nombre === actual.nombre)
    );

    const handleAddPer = (per) => {
        setPers(actual => ([...actual, per]))
    }

    useEffect(() => {
        personajes$.subscribe(handleAddPer)
    }, [])
    useEffect(() => {
        console.log(pers);
    }, [pers])

    return (
        <div className="">
            <h2>Distinct Until <mark>Key</mark> Change -Operator </h2>

            <p>el operador <mark>Distinct Until Key Change</mark> emite solo las emiciones del Observable que sean diferentes a la emicion inmediatamente anterior del Observable
            especializado en comparar propiedades especificas cuando se emite un <mark>Objeto </mark> funciona igual al operador <strong>Distinct until Change</strong>
            </p>


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
        nombre: "Zero",
        element: "Fire"
    },
    {
        nombre: "Zero",
        element: "Fire"
    },
    {
        nombre: "Rockman",
        element: "Energi"
    },
    {
        nombre: "Rockman",
        element: "Energi"
    },
    {
        nombre: "Airman",
        element: "Wind"
    },

]

export default MyDistinctUntilChange;