import * as React from 'react';
import { useEffect, useState } from 'react';

import { fromEvent, interval, of } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

const MyMergeMap = () => {
    const letras$ = of(...['a', 'b', 'c']);
    const [mouseDisplay, setMouseDisplay] = useState();

    const mousedown$ = fromEvent(document, 'mousedown');
    const mouseup$ = fromEvent(document, 'mouseup');
    const interval$ = interval();


    const handleEmmit = (next) => {
        console.log({ next })
    }
    useEffect(() => {
        letras$.pipe(
            mergeMap((letra) => interval(1000).pipe(
                map(i => i + letra),
                take(3)
            ))
        ).subscribe(handleEmmit);

        mousedown$.pipe(
            mergeMap(() => interval$.pipe(
                takeUntil(mouseup$)
            ))
        ).subscribe(setMouseDisplay);

    }, [])
    return (
        <div className="">
            <h2>Merge Map Operator</h2>
            <h2>Mouse Down ___<mark>{mouseDisplay}ms?</mark></h2>
            <p>El Merge Map es capaz de emitir nuevos Observables que se Suscriben inmediatamente al Observable Principal el cual No se completa hasta que sean completas todas sus suscripciones Internas</p>
            <br></br>
            <p>
                MergeMap no emite un Observable como salida sino los resultados emitidos por los Observables internos del Mergemap
            </p>
        </div>
    )
}

export default MyMergeMap;