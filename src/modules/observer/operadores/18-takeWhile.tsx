import * as React from 'react';
import { useState, useEffect } from 'react';

import { fromEvent, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const MyTakeWhile = () => {
    const [obj, setObj] = useState({});
    const click$ = fromEvent<MouseEvent>(document, 'click');
    const clicks3$ = click$.pipe(
        map(({ x, y }) => ({ x, y })),
        takeWhile(({ y }) => y <= 500, true)
    )
    const obs = {
        next: val => setObj(val),
        complete: () => console.log("complete")
    }

    useEffect(() => {
        clicks3$.subscribe(obs)
    }, [])

    return (
        <div className="">
            <h2>TakeWhile -Operator</h2>
            <p>Emite los valores del <mark>Observable</mark> hasta que se cumpla la condicion especificada en la funcion , Es posible Mandar un segundo parametro en el operador <mark>TakeWhile</mark> como un <strong>booleano</strong> para que se incluya la ultima emicion del Obseervable</p>

            {
                Object.keys(obj).map((key) => (
                    <h2 key={key}>{key} <mark>..{obj[key]}.. </mark></h2>
                ))
            }
        </div>
    )
}

export default MyTakeWhile;