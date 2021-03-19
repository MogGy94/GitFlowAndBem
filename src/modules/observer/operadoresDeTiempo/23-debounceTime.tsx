import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

import './styles.css'
const MyDebounceTime = () => {
    const DEBOUNCE = 400;
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
            debounceTime(DEBOUNCE),/**clickea todo lo que quieras :DDD */
            distinctUntilChanged()
        );
        buttonObs$.subscribe(console.log);

        /* Rxjs maneja el evento de key up  */
        const textArObs$ = fromEvent(textAreaReft.current, 'keyup')
            .pipe(
                pluck('target', 'value'),
                debounceTime(DEBOUNCE),
                distinctUntilChanged()
            );
        textArObs$.subscribe(val => console.log(`FromEvent: ${val}`));

        /** React maneja el evento de key up */
        sub$.pipe(
            debounceTime(DEBOUNCE),
            distinctUntilChanged()
        ).subscribe(val => console.log(`Subject: ${val}`));


    }, [])

    return (
        <>
            <div className="contactUs__contactForm">
                <h2>DebounceTime-- Operator</h2>
                <p>
                    Restrinje la cantidad de emiciones producidas por un Observable , entregando el último valor emitido despues de N cantidad de tiempo
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
