import * as React from 'react';
import { useState, useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { take, first, tap, map } from 'rxjs/operators';


const MyFirst = () => {
    const [obj, setObj] = useState({})
    const Yoffset = 300;
    const click$ = fromEvent(document, 'click');
    const click2$ = click$.pipe(
        map(({ clientX, clientY }) => ({ clientX, clientY })),
        first(({ clientY }) => clientY >= Yoffset),
        tap(console.log),
    )
    const observer = {
        next: val => setObj(val),
        complete: () => console.log("complete")
    }
    useEffect(() => {
        click2$.subscribe(observer);
    }, [])
    useEffect(() => {
        console.log({ obj });

    }, [obj])

    return (
        <div className="">
            <h2>First Operator </h2>
            <p>Clickear por ensima de {Yoffset} en Y coloca las coordenadas del cursor Solo una vez</p>
            {
                Object.keys(obj).map((key) => (
                    <h2 key={key}>{key} <mark>..{obj[key]}.. </mark></h2>
                ))
            }
        </div>
    )
}

export default MyFirst;

