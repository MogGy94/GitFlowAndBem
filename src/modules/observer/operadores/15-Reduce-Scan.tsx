import * as React from 'react';
import { useState, useEffect } from 'react';

import { interval, from } from 'rxjs';
import { reduce, take, tap, scan, map } from 'rxjs/operators';


const MyFilter = () => {
    const [redu, setRedu] = useState(0);
    const [scn, setScn] = useState(0);
    const takke = 20;
    const ttime = 200;

    /**patron Redux */
    const state$ = from(user).pipe(
        scan<User>((acc, cur) => {
            return { ...acc, ...cur }
        }, { edad: 33 })
    )

    const id$ = state$.pipe(
        map(state => state)
    )


    const reduObs = {
        next: val => setRedu(val),
        complete: () => console.log('Complete Reduce')
    }

    const scnObs = {
        next: val => setScn(val),
        complete: () => console.log("complete Scan")
    }



    const reduceFunc = (acumulado: number, actualVal: number) => {
        return acumulado + actualVal;
    }
    const totalAcumulador = (acc, cur) => acc + cur;


    const intervalRed$ = interval(ttime).pipe(
        take(takke),
        /* tap(console.table), */
        reduce(reduceFunc)
    );

    const intervalScn$ = interval(ttime).pipe(
        take(takke),
        scan(totalAcumulador),

    )

    useEffect(() => {
        intervalRed$.subscribe(reduObs);
        intervalScn$.subscribe(scnObs);
        id$.subscribe(console.log)
    }, [])


    return (
        <>
            <h2>Reduce Opertor</h2>
            <h5>REDUCE: <mark>{`.. ${redu} ..`}</mark></h5>
            <h5>SCAN: <mark>{`.. ${scn} ..`}</mark></h5>

            <p>El Scan Se puede considerar como la base del Patrón <mark>REDUX</mark> </p>
        </>
    )
}

interface User {
    id?: string,
    auth?: boolean,
    token?: string,
    edad?: number,
}

const user: User[] = [
    { id: "Mog", auth: false, token: null },
    { id: "Mog", auth: true, token: "ABC" },
    { id: "Mog", auth: true, token: "ABC123" },
    { id: "Mog", auth: false, token: null },
    { id: "Mog", auth: true, token: null },
    { id: "Mog", auth: true, token: "CCDAF" },
]

//console.table(user);
export default MyFilter;