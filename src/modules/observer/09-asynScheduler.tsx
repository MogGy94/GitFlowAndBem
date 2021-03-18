import * as React from 'react';
import { useState, useEffect } from 'react';

import { asyncScheduler } from 'rxjs';
/***
 * el asyncScheduler : permite realizar operaciones como 
 * setTimeout(()) y el setInterval()
 */





const Range = () => {
    const [state, setState] = useState();
    const [state2, setState2] = useState();

    const [state3, setState3] = useState([]);

    const saludar = () => {
        console.log('Saludar Hola Mundo');
        setState("Hola Mundo");
    };

    const saludar2 = (name) => {
        console.log(`Saludar Hola Mundo ${name}`);
        setState2(`Hola Mundo ${name}`);
    };
    const observer = {
        next: val => console.log({ val }),
        complete: () => console.log({ complete: "Complete" })
    }
    /**AsincScheduler as timer *//* 
    useEffect(() => {
        asyncScheduler.schedule(saludar, 2000);
        asyncScheduler.schedule(saludar2, 2000, "moggy");
    }, []) */

    /**AsyncScheduler as Interval */
    useEffect(() => {
        /**debe ser funcion pura */
        const subs = asyncScheduler.schedule(function (cont) {

            const content = `cont ${cont}`
            const elemetn = <h5 key={cont}> {content}</h5>
            console.log(content);
            console.log(this);

            this.schedule(cont + 1, 1000)

            setState3([...state3, elemetn]);
        }, 1000, 0)

        asyncScheduler.schedule(() => subs.unsubscribe(), 10000)

    }, [])

    useEffect(() => {
        console.log(state3);

    }, [state3])
    return (
        <div className="">
            <h2>{state || "Interval"}  </h2>
            <h2>{state2 || "State2"}  </h2>
            <div>{state3 || "State3"}  </div>
        </div>
    )
}

export default Range;