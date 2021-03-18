import * as React from 'react';
import { useState, useEffect } from 'react';
import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';




const ToMap = () => {
    useEffect(() => {
        range(1, 10).pipe(
            map<number, number>(val => val * 10)
        ).subscribe(console.log)

        const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
        const keyUpCode$ = keyUp$.pipe(
            map(({ code, keyCode, key }) => ({ code, keyCode, key }))
        )

        const keyUpPluck$ = keyUp$.pipe(
            pluck("target", "baseURI")
            //pluck("code")
        );

        const keyUpMapTo$ = keyUp$.pipe(
            mapTo('key Pressed')
        )

        keyUpCode$.subscribe(data => console.log(`Map:`, data));
        keyUpPluck$.subscribe(data => console.log(`Pluck:`, data));
        keyUpMapTo$.subscribe(data => console.log("mapTo:", data));

    }, [])

    return (
        <>
            <h1>Map Operator</h1>
        </>
    )
}

export default ToMap;
