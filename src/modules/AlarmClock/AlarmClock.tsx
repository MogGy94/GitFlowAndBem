/**Observer$ examples */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { of, interval, concat, Subject } from 'rxjs';
import {
    takeWhile,
    takeUntil,
    scan,
    startWith,
    repeatWhen,
    share,
    filter
} from "rxjs/operators"

import './stylesAlarmClock.css';

/**interval emite un nuevo valor cada N (1000) ms*/
const countdown$ = interval(300).pipe(
    startWith(10),
    scan(time => (time - 1)),
    takeWhile(time => time > 0)
).pipe(
    share()
);

const actions$ = new Subject();
const snooze$ = actions$.pipe(filter(action => action == "snooze"));
const dismiss$ = actions$.pipe(filter(action => action == "dismiss"));

actions$.subscribe(console.log)

const snoozeableAlarm$ = concat(countdown$, of('Wake up!')).pipe(
    repeatWhen(() => snooze$)
)
const obersevable$ = concat(
    snoozeableAlarm$.pipe(takeUntil(dismiss$)),
    of("Have a nice Day")
);

const AlarmClock = () => {

    const [state, setState] = useState();
    /**conectar rxjs  con react*/
    useEffect(() => {
        const observer = obersevable$.subscribe(setState);
        return () => observer.unsubscribe();
    }, [])

    return (
        <>
            <h1>Alarm Clock</h1>
            <h2><mark>{state}</mark></h2>
            <button
                onClick={() => actions$.next("snooze")}
            > snooze</button>

            <button
                onClick={() => actions$.next("dismiss")}
            > dissmiss</button>
        </>
    )
}

export default AlarmClock;