import * as React from 'react';
import { useEffect, useState } from 'react';

import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, pluck } from 'rxjs/operators';



const url = 'https://api.github.com/users?per_page=5';
const wrongURL = 'https://api.github.com/usersXXXXXX?per_page=5'
const atrapaError = (err: AjaxError) => {
    console.warn('error en :', err);
    return of([]);
}



const MyCatchError = () => {
    const [state, setState] = useState([]);

    const ajax$ = ajax(url).pipe(
        pluck('response'),
        catchError(atrapaError)/****** */
    )
    const handleSetState = (newState) => {
        console.log(newState);

        setState((oldstate: any) => ([...oldstate, ...newState]));
    }
    useEffect(() => {
        ajax$.subscribe(handleSetState);
    }, [])
    return (
        <>
            <h2>Catch Error Operator</h2>
            <p>eL Api Ajax para manejo de peticiones con Rxjs  permite convertir peticiones a Obersvables y trasformalas como nos sea mas conveniente y atrapar errores usando <mark>Catch Error</mark> </p>
            {
                state.map(({ id, login, node_id }) => (
                    <div className="" key={node_id} >
                        <h1> {id}</h1>
                        <h2>{login}</h2>
                    </div>
                ))
            }


        </>
    )
}

export default MyCatchError;