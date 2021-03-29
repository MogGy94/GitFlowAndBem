import * as React from 'react';
import { useEffect, useState } from 'react';

import { of, Subject, interval } from 'rxjs';
import { filter, map, reduce, take } from 'rxjs/operators';

import '../observer/styles.css'


const ReduceArray = () => {
    const [relojDisplay, setRelojDisplay] = useState();
    const [obs1Display, setObs1Display] = useState();
    const [obs2Display, setObs2Display] = useState();
    const emmiter$ = new Subject();

    const reloj$ = interval(1000).pipe(
        take(5),
        map(val => Math.round(Math.random() * 100))
    );

    reloj$.subscribe(emmiter$);
    useEffect(() => {
        emmiter$.subscribe(setRelojDisplay)
        emmiter$.subscribe(setObs1Display)
        emmiter$.subscribe(setObs2Display)
    }, [])

    return (
        <div className="contactUs">
            <div className="contactUs__contactForm">
                <div className="contactUs__formBox">

                    <div className="">
                        <h2>Random Number Syncro</h2>
                    </div>

                    <div className="">
                        <h2>Reloj**{relojDisplay} </h2>
                    </div>
                    <h1>(1) Oberser{obs1Display}</h1>
                    <h1>(2) Oberser{obs2Display}</h1>
                </div>
            </div>
        </div>
    )
}

export default ReduceArray;

