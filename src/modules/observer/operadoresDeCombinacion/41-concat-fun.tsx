import * as React from 'react';
import { useEffect, useState } from 'react';

import { interval, concat } from 'rxjs';
import { take, map } from 'rxjs/operators';

const emojis = ["😍", "😴", "😞", "😖", "🤖", "👽", "😽", "👻", "☠"];
const words = ["ini", "miny", "maini", "moo", "de", "tin", "marin", "de", "do", "pingüe"]

const MyConcat = () => {
    const [display, setDisplay] = useState("🍒");
    const inter$ = interval(500);


    useEffect(() => {
        concat(
            inter$.pipe(take(3)),
            inter$.pipe(
                take(emojis.length),
                map(item => emojis[item])
            ),
            inter$.pipe(
                take(words.length),
                map(item => words[item])
            )
        ).subscribe(setDisplay)

    }, [])

    return (
        <div className="">
            <h2>Concat - Function</h2>
            <p>La funcion Concat recibe iterables o Obserbables como parametro y su retorno es un Observable con las emiciones secuenciales de el total de los Obserbables o iterables pasados como parametro</p>
            <h1>{display}</h1>
        </div>
    )
}

export default MyConcat