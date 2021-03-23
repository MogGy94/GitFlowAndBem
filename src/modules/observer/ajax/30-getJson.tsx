import * as React from 'react';
import { useEffect, useState } from 'react';
import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';
const url2 = 'https://httpbin.org/delay/1'
const wrongURL = 'https://api.github.com/usersXXXXXX?per_page=5'


const MyGetJson = () => {
    const manejaError = (resp: AjaxError) => {
        console.warn('error:', resp.message);
        return of({
            ok: false,
            usuarios: []
        })
    }

    const obs$ = ajax.getJSON(wrongURL).pipe(
        catchError(manejaError)
    );
    const obs2$ = ajax(wrongURL).pipe(
        catchError(manejaError)
    )



    useEffect(() => {
        obs$.subscribe(data => console.log('GetJson', data));
        obs2$.subscribe(data => console.log('ajax:', data))

    }, [])
    return (
        <>
            <h2>GetJson  Vs  Ajax Method de Rxjs</h2>
            <p>El catchError tiene Mayor Prioridad que la funcion error del Observer</p>
        </>
    )
}

export default MyGetJson;