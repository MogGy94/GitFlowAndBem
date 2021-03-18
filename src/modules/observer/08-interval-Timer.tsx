import * as React from 'react';
import { useState, useEffect } from 'react';
import { interval, timer } from 'rxjs';
/***
 * interval : emite valores cada cierta can
 * timer : emite un valor despues de el periodo que se le especifique
 */
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const Range = () => {

    const observer = {
        next: val => console.log({ val }),
        complete: () => console.log({ complete: "Complete" })
    }

    useEffect(() => {
        const interval$ = interval(1000);
        const timer$ = timer(hoyEn5);
        /* interval$.subscribe(observer); */
        timer$.subscribe(observer);
    }, [])
    return (
        <div className="">
            <h2>Innterval</h2>
        </div>
    )
}

export default Range;