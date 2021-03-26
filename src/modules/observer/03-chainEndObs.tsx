import * as React from 'react';
import { useState, useEffect } from 'react';
import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log({ value }),
    error: error => console.warn({ error }),
    complete: () => console.info('complete')
}


/**Utilizar el Add para crear subscripciones Hijas
 * 
 */
const intervalo$ = new Observable<number>(subscriber => {
    //crear un contador 1,2,3,4
    let count = 0;
    const interval = setInterval(() => {
        count++
        subscriber.next(count)
    }, 5000)
    return () => {
        clearInterval(interval);
        console.log('Interval Destroy');

    }
})


const SubUnsub = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const subscription = intervalo$.subscribe(num => {
            console.log({ num });
            setCount(num);
        })
        return () => subscription.unsubscribe();
    }, [])
    return (
        <>
            <h1>Subscribe Unsubscriber </h1>
            <h3> Number{count}</h3>
            <button> Unsubscribe</button>
        </>
    )
}
const sub2 = intervalo$.subscribe();;
setTimeout(() => {
    sub2.unsubscribe();
    console.log("Done TimeOut");
}, 4000)

export default SubUnsub;