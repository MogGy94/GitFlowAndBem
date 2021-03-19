import * as React from 'react';
import { useEffect, useState } from 'react';

import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';


const MySampleTime = () => {
    const [clicks, setClicks] = useState({});
    const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
        sampleTime(1000),
        map(({ x, y }) => ({ x, y }))
    );

    useEffect(() => {
        click$.subscribe(setClicks);
    }, [])

    return (
        <div className="">
            <h2> SampleTime -- Operator</h2>
            <p>Permite Obtener la última emicion de un obscervable que halla ocurrido en un intervalo de tiempo especifico</p>
            {
                Object.keys(clicks).map((key) => (
                    <h3 {...{ key }}><mark>{key}</mark>__ {clicks[key]} </h3>
                ))
            }
        </div>
    )
}

export default MySampleTime;
