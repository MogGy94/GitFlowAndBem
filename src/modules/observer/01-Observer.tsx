import * as React from 'react';
import { useState, useEffect } from 'react';
import { Observable, Subject, Observer } from 'rxjs';

//const obs$ = Observable.create();
/* const obs$ = new Observable<string>(subs => {
    subs.next("Hola")
    subs.next("Mundo")
    subs.next("fff")
    subs.next("aaa")
    subs.complete()
    subs.next("aaa")
    subs.next("fff")

});
 */

const obs$ = new Subject();
/**Crear un Observer */

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]', value),
    complete: () => console.info('completatos [obs]'),
    error: () => console.warn('err[obs]'),
}

const ObserverImplement: React.FC = () => {
    const [text, setText] = useState(["Observer"]);

    function appendText(value) {
        const a = [...text, value];
        console.log(a);
        setText([...text, value])
    }


    useEffect(() => {

        obs$.subscribe(console.log)
        obs$.subscribe(observer);
        const obs = obs$.subscribe(appendText)
        return () => obs.unsubscribe();
    }, [])


    useEffect(() => {
        obs$.next("fff")
        /* obs$.complete() */
        obs$.next("aaa")
        obs$.next("fff")
    }, [])

    useEffect(() => {
        console.log("xxxx", text);
    }, [text])


    return (
        <>
            {
                text.map((value, i) => (<h2 key={i}>{value} </h2>))
            }
            <button onClick={() => obs$.next("aaa")} >BOOOOOT </button>
            <button onClick={() => setText([...text, "aaa"])} >BAAAAAM </button>
        </>
    )
}


const List = ({ items = [], loading = false }) => (
    <ul className={loading ? 'loading' : null}>
        {items.map(item => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);

export default ObserverImplement;