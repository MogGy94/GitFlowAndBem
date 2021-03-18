import * as React from 'react';
import { useEffect, useState } from 'react';
import { range, of, interval } from 'rxjs';
import { tap } from 'rxjs/operators';

/** Tap 
 * el operador Tap es utilizado para disparar efectos secundarios durante
 * la ejecucion de el pipe de operadores de un Observable
 * 
 * enviar valores de retorno en un Tap No afecta en nada el Flujo de datos del pipeline
*/
const MyTap = () => {
    const [arr, setArr] = useState([]);
    const taco$ = of("send Me some Tacos");
    const intv$ = interval(1000);

    const handleCosa = (val) => {
        console.log("tap ", val);
        setArr(oldArr => [...oldArr, val])
    }
    const handleTaco = () => {
        const sendTaco = taco$.subscribe(handleCosa);
        sendTaco.unsubscribe();
    }

    useEffect(() => {
        const ran$ = range(1, 5).pipe(
            tap(handleCosa)
        );
        ran$.subscribe(console.log);
    }, [])

    useEffect(() => {
        //intv$.subscribe(handleCosa);
    }, [])

    useEffect(() => {
        console.log(arr);
    }, [arr])
    return (
        <>
            <h2>Tap Operator</h2>
            <button onClick={handleTaco}> Send Me someTacos</button>
            {
                arr.map((item, i) => (<h1 key={i}>Tap output {item} </h1>))
            }
        </>
    )
}


export default MyTap;


