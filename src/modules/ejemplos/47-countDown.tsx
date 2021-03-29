import * as React from 'react';
import { useEffect, useState } from 'react';

import { of, Subject, interval, concat } from 'rxjs';
import { scan, startWith, share, takeWhile, filter, repeatWhen } from 'rxjs/operators';

import '../observer/styles.css'

const input$ = new Subject();
const actions$ = new Subject();
const reiniciar$ = actions$.pipe(filter(action => action == "reiniciar"));

const countdown$ = (desde) => (interval(100).pipe(
    startWith(desde),
    scan(time => (time - 1)),
    takeWhile(time => time >= 0)
).pipe(
    share()
));

const reiniciarConteo$ = (desde) => (concat(
    countdown$(desde),
    of('Wake up!')).pipe(repeatWhen(() => actions$)))

const CountDown = () => {
    const [relojDisplay, setRelojDisplay] = useState();
    const [desde, setDesde] = useState(30);

    const handleInputChange = (e) => {
        const { value } = e.target;
        if (!isNaN(value)) {
            input$.next(Number(value));
        }

    }

    const handlePutCountdown = () => {
        actions$.next('reiniciar')
    }
    input$.subscribe(setDesde)

    useEffect(() => {
        const observer = reiniciarConteo$(desde).subscribe(setRelojDisplay);
        return () => observer.unsubscribe();
    }, [desde])

    return (
        <div className="contactUs">
            <div className="contactUs__contactForm">
                <div className="contactUs__formBox">

                    <div className="">
                        <h2>Cuenta Regresiva</h2>
                    </div>
                    <div className="contactUs__inputBox w50">
                        <input
                            type="text"
                            onChange={handleInputChange}
                            required
                            value={desde}
                        />
                        <span>Empesar desde</span>
                    </div>
                    <div className="contactUs__inputBox w50" >
                        <input
                            type="submit"
                            value="send"
                            onClick={handlePutCountdown}
                        />
                    </div>
                    <div className="">
                        <h2>Countdown**{relojDisplay} </h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CountDown;

