import * as React from 'react';
import { useState, useEffect } from 'react';

import { interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const MyTake = () => {
    const vals: number = 10;
    const [emited, setEmited] = useState();
    const interval$ = interval(1200).pipe(
        tap(console.log),
        take(vals)
    );
    const obs = {
        next: val => setEmited(val),
        complete: () => setEmited("Complete"),
    }

    useEffect(() => {
        interval$.subscribe(obs)
    }, [])


    return (
        <div className="">
            <h2>Take Operator take_<mark>.{vals}..</mark> .Emited:<mark>{emited}</mark></h2>
            <p> El Operador <mark>Take</mark> limita la cantidad de emiciones entregadas por un
                <mark>Observable</mark> ;; <mark>Take</mark> Cancela la ejecucion del Observable
            </p>

        </div>
    )
}

export default MyTake;