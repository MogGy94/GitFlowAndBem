import * as React from 'react';
import { useState, useEffect } from 'react';
import { of, Observer, interval } from 'rxjs';

const values = ["adf", 2, 3, 4, 6, "fofof"]
const obs$ = of<any>(...values);



const OF = () => {
    const [ofval, setOfval] = useState("OF");

    const observer: Observer<any> = {
        next: value => {
            console.log('siguiente [next]', value);
            setOfval(value)
        },
        complete: () => console.info('completatos [obs]'),
        error: () => console.warn('err[obs]'),
    }

    useEffect(() => {
        const subs = obs$.subscribe(observer);

        return subs.unsubscribe();
    }, [])
    return (
        <div className="">

            <h2>{ofval}</h2>
        </div>
    )
}

export default OF;