import * as React from 'react';
import { useEffect, useState } from 'react';

import { fromEvent, interval } from 'rxjs';
import { take, concatMap, switchMap, exhaustMap } from 'rxjs/operators';


const MyConcatMap = () => {
    const [list, setList] = useState([]);
    const interval$ = interval(500).pipe(take(3));
    const click$ = fromEvent(document, 'click');

    const handleAddInList = (val) => {
        setList(oldList => ([...oldList, val]))
    }

    useEffect(() => {
        click$.pipe(
            concatMap(() => interval$)
        ).subscribe(val => console.log({ concatMap: val }))
        click$.pipe(
            switchMap(() => interval$)
        ).subscribe(val => console.log({ switchMap: val }))

        click$.pipe(
            exhaustMap(() => interval$)
        ).subscribe(handleAddInList)
    }, [])

    return (
        <div className="">
            <h2>Exhaust Map -Operator</h2>
            <p>Solo puede mantener Una suscripcion Interna Activa y cuando esta se comppleta puede recibir una nueva suscripcion interna </p>
            <ol>
                {
                    list.map((item, i) => (<li key={i}>{item}</li>))
                }
            </ol>
        </div>
    )
}

export default MyConcatMap