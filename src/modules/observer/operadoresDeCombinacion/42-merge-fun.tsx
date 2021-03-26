import * as React from 'react';
import { useEffect, useState } from 'react';

import { interval, concat, fromEvent, merge } from 'rxjs';
import { take, map, pluck } from 'rxjs/operators';


const MyMergeFun = () => {
    const [evenColection, setEventColection] = useState([]);

    const keyup$ = fromEvent(document, 'keyup');
    const click$ = fromEvent(document, 'click');

    const handleAddEvent = (newEvnt) => {
        setEventColection(events => [...events, newEvnt])
    }

    useEffect(() => {
        merge(
            keyup$.pipe(pluck('type')),
            click$.pipe(pluck('type')),
        ).subscribe(handleAddEvent)
    }, [])


    return (
        <div className="">
            <h2>Merge Function</h2>
            <div className="d">

                {
                    evenColection.map((item, i) => (
                        <span key={i}>{item} </span>
                    ))
                }
            </div>
        </div>
    )
}

export default MyMergeFun;