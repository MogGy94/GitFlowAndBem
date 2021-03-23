import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { fromEvent, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, distinctUntilChanged, pluck } from 'rxjs/operators';

import '../operadoresDeTiempo/styles.css'


const url = 'https://api.github.com/users?per_page=5';
const url2 = 'https://httpbin.org/delay/1'

const MyOpAplanamiento = () => {
    const DEBOUNCE = 400;
    const buttonRef = useRef();
    const input$ = new Subject();

    const handleChange = (e) => {
        /**Se envía el valor del change por un Subject */

        const value = e.target.value;
        input$.next(value);
    }

    useEffect(() => {
        const buttonObs$ = fromEvent(buttonRef.current, 'click').pipe(
            debounceTime(DEBOUNCE),/**clickea todo lo que quieras :DDD */
            distinctUntilChanged()
        );
        buttonObs$.subscribe(console.log);


        /** React maneja el evento de key up */
        input$.pipe(
            debounceTime(DEBOUNCE),
            distinctUntilChanged(),
            map(val => ajax.getJSON(`https://api.github.com/search/users?q=${val}`))
        ).subscribe(ajaxResponse => {
            /** See hace una nueva subscripcion al Observable retornado por el metodo Ajax */
            ajaxResponse.pipe(

            ).subscribe(console.log)

        });

    }, [])

    return (
        <>
            <div className="contactUs__contactForm">
                <h2>Motivacion de Transformadores</h2>

                <div className="contactUs__formBox">

                    <div className="contactUs__inputBox w100">
                        <textarea onChange={handleChange} required></textarea>
                        <span>Operadores De Aplanamiento : Son necesarios para manejar Observables cuyas emiciones pueden llegar a ser otro observable</span>
                    </div>

                    <div ref={buttonRef} className="contactUs__inputBox w100" >
                        <input type="submit" value="send" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default MyOpAplanamiento;
