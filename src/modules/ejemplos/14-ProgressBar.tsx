import * as React from 'react';
import { useState, useEffect } from 'react';

import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import './stylesProgress.css'


const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const array = Array.from(Array(10).keys());
    const scroll$ = fromEvent(document, 'scroll');

    const calcularPorcentajeScrioll = (event) => {
        const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
        const porcentaje = (scrollTop / (scrollHeight - clientHeight)) * 100

        return porcentaje;
    }

    const progress$ = scroll$.pipe(
        map(calcularPorcentajeScrioll),
        //tap(console.log)
    );
    useEffect(() => {
        console.log(array);
        //scroll$.subscribe(console.log)
        progress$.subscribe<Dispatch>(setProgress)
    }, []);


    return (
        <>
            <div className="progress-bar" style={{ "--p": `${progress}%` }}>

            </div>
            <div className="text__content" >
                {
                    array.map(item => (
                        <TextDummy key={item}></TextDummy>
                    ))
                }
            </div>
            <h1>Progress Bar</h1>
        </>
    )
}

const TextDummy = () => (
    <>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo inventore quo dolore deserunt officiis suscipit dolorum, veniam hic! Veritatis dolor enim rerum debitis facere distinctio facilis autem soluta quo commodi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo inventore quo dolore deserunt officiis suscipit dolorum, veniam hic! Veritatis dolor enim rerum debitis facere distinctio facilis autem soluta quo commodi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo inventore quo dolore deserunt officiis suscipit dolorum, veniam hic! Veritatis dolor enim rerum debitis facere distinctio facilis autem soluta quo commodi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo inventore quo dolore deserunt officiis suscipit dolorum, veniam hic! Veritatis dolor enim rerum debitis facere distinctio facilis autem soluta quo commodi.
        <br />
    </>
)

export default ProgressBar;