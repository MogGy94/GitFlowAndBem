import * as React from 'react';
import { useState, useEffect } from 'react';

import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const MySample = () => {
    const TIME = 1000;
    const [emitedValue, setEmitedValue] = useState();
    const interval$ = interval(TIME);
    const click$ = fromEvent(document, 'click');

    useEffect(() => {
        interval$.pipe(
            sample(click$)
        ).subscribe(setEmitedValue);
    }, [])

    return (
        <div className="">
            <h2>Sample --Operator</h2>
            <p>
                El primer Observable Emite un Valor cuando el Segundo Observable Emite un valor
            </p>
            <h3>Click SomeWhere Val :_ <mark>{emitedValue}</mark></h3>
        </div>
    )
}

export default MySample;