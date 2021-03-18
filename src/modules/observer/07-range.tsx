import * as React from 'react';
import { useState, useEffect } from 'react';
import { fromEvent, range, asyncScheduler } from 'rxjs';
/***
 * asyncScheduler : perimite convertir funciones sincronas en asyncronas
 * 
 */


const Range = () => {

    const observer = {
        next: val => console.log({ val })
    }

    useEffect(() => {
        console.log("start");
        const obs$ = range(1, 5, asyncScheduler);
        console.log("end");
        obs$.subscribe(observer);
    }, [])
    return (
        <div className="">
            <h2>Range</h2>
        </div>
    )
}

export default Range;