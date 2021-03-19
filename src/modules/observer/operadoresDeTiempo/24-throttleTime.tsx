import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { fromEvent, Subject, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

import './styles.css'
const MyDebounceTime = () => {
    const DEBOUNCE = 1000;
    const buttonRef = useRef();
    const textAreaReft = useRef();
    const sub$ = new Subject();
    const handleChange = (e) => {
        /**Se envía el valor del change por un Subject */
        const value = e.target.value;
        sub$.next(value);
        //console.log({ react: e.target.value });
    }

    useEffect(() => {
        const buttonObs$ = fromEvent(buttonRef.current, 'click').pipe(
            throttleTime(DEBOUNCE, asyncScheduler, {
                leading: true, /**Emite el primer valor */
                trailing: true /**Emite el ultimo valor */
            }),/**clickea todo lo que quieras :DDD */
            distinctUntilChanged()
        );
        buttonObs$.subscribe(console.log);

        /* Rxjs maneja el evento de key up  */
        const textArObs$ = fromEvent(textAreaReft.current, 'keyup')
            .pipe(
                pluck('target', 'value'),
                throttleTime(DEBOUNCE, asyncScheduler, {
                    leading: true,
                    trailing: true
                }),
                distinctUntilChanged()
            );
        textArObs$.subscribe(val => console.log(`FromEvent: ${val}`));

        /** React maneja el evento de key up */
        sub$.pipe(
            throttleTime(DEBOUNCE, asyncScheduler, {
                leading: true,
                trailing: true
            }),
            distinctUntilChanged()
        ).subscribe(val => console.log(`Subject: ${val}`));


    }, [])

    return (
        <>
            <div className="contactUs__contactForm">
                <h2>ThrottleTime-- Operator</h2>
                <p>
                    Emite el Valor y luego espera <mark>N(ms)</mark> cantidad de tiempo,emiten valores que sean producidos despues del tiempo
                </p>
                <div className="contactUs__formBox">

                    <div className="contactUs__inputBox w100">
                        <textarea ref={textAreaReft} onChange={handleChange} required></textarea>
                        <span>write your messaje</span>
                    </div>

                    <div ref={buttonRef} className="contactUs__inputBox w100" >
                        <input type="submit" value="send" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default MyDebounceTime;
