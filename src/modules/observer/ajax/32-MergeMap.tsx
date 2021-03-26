import * as React from 'react';
import { useEffect, useState } from 'react';
import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';
const url2 = 'https://httpbin.org/delay/1'
const wrongURL = 'https://api.github.com/usersXXXXXX?per_page=5'



const MyGetJson = () => {
    const obs$ = ajax({
        url: url2,
        method: 'DELETE',
        headers: {
            'mi-token': 'ABC1234'
        },
        body: {
            id: 1,
            nombre: "MiNombre"
        }

    })

    useEffect(() => {
        obs$.subscribe(console.log);
    }, [])
    return (
        <>
            <h2>POST PUT DELETE</h2>

        </>
    )
}

export default MyGetJson;