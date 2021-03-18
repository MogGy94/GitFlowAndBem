import * as React from 'react';
import { useState, useEffect } from 'react';
import { of, from } from 'rxjs';
/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 * 
 */
const myGenerator = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}


const FromOF = () => {

    const observer = {
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    }

    useEffect(() => {
        //const sources$ = from([1, 2, 3, 4, 5]);
        //const sources$ = of(...[1, 2, 3, 4, 5]);
        //const sources$ = from('Freljord');


        /***Utilizar Fetch para obtener Datos */
        /**
         * 
         const sources$ = from(fetch('https://api.github.com/users/moggy94'));
         sources$.subscribe(async (resp) => {
             console.log(resp);
             
             const dataResp = await resp.json();
             console.log(dataResp);
             
            })
            
        */
        //sources$.subscribe(observer);
        const myIterable = myGenerator();

        from(myIterable).subscribe(observer);

    }, [])
    return (
        <h2>From Of</h2>
    )
}


export default FromOF;




