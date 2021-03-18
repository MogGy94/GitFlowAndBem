import * as React from 'react';
import { useState, useEffect } from 'react';
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log({ value }),
    error: error => console.warn({ error }),
    complete: () => console.info('complete')
}

const rand$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => {
        subs.next(Math.random())
    }, 2000)

    return () => clearInterval(intervalID);
})

const SubUnsub = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        const subject$ = new Subject();
        rand$.subscribe(subject$);


        const sub1 = subject$.subscribe((rnd: number) => {
            console.log({ sub1: rnd })
            setCount(rnd);
        });

        const sub2 = subject$.subscribe((rnd: number) => {
            console.log({ sub2: rnd });
            setCount2(rnd);
        });



        setTimeout(() => {
            subject$.next(10);
            subject$.complete();
            sub1.unsubscribe();
            sub2.unsubscribe
        }, 5000)
        return () => {
            sub1.unsubscribe();
            sub2.unsubscribe();
        }
    }, [])
    return (
        <div>
            <h1>Subscribe Unsubscriber </h1>
            <h3> Count 1 {count}</h3>
            <h3> Count 2 {count2}</h3>
            <button> Unsubscribe</button>
        </div>
    )
}

/**
 * 1-Casteo Multiple (multi subscripcion)
 * 2- También es un Observer
 * 3- Next, error, complete
 */
/* const subject$ = new Subject();
rand$.subscribe(subject$); */
/***Loos Valosres son iguales para ambos observersr */
/* const sub1 = subject$.subscribe(rnd => console.log({ sub1: rnd }))
const sub2 = subject$.subscribe(rnd => console.log({ sub2: rnd })) */

export default SubUnsub;