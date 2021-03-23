import * as React from 'react';
import { useEffect, useState } from 'react';

import { fromEvent, interval } from 'rxjs';
import { take, concatMap, switchMap } from 'rxjs/operators';


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
        ).subscribe(handleAddInList)
        click$.pipe(
            switchMap(() => interval$)
        ).subscribe(val => console.log({ switchMap: val }))
    }, [])

    return (
        <div className="">
            <h2>Concat Map -Operator</h2>
            <p>Los Observables que entran son encolados Y resueltos en secuencia </p>
            <ol>
                {
                    list.map((item, i) => (<li key={i}>{item}</li>))
                }
            </ol>
        </div>
    )
}

export default MyConcatMap