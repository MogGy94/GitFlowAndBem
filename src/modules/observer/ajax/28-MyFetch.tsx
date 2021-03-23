import * as React from 'react';
import { useEffect, useState } from 'react';

const manejaErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

const url = 'https://api.github.com/users?per_page=5';
const wrongURL = 'https://api.github.com/usersXXXXXX?per_page=5'
const fetchPromesa = fetch(wrongURL);
fetchPromesa
    .then(manejaErrores)
    .then(resp => resp.json())
    .then(console.log)
    .catch(err => console.warn('error', err))


const MyFetch = () => {
    return (
        <>
            <h2>My Fetch</h2>
            <p>Las Peticiones Realizadas con el API de <mark>Fetch</mark> regresan en el Cuerpo de la peticion como un <mark>Readable Stream</mark> Alojado en el parametro <mark>body</mark> de la respuesta de la  peticion</p>


        </>
    )
}

export default MyFetch;