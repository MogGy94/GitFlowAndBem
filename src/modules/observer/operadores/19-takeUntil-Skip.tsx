import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import { fromEvent, interval } from 'rxjs';
import { map, takeUntil, takeWhile, skip } from 'rxjs/operators';

const MyTakeWhile = () => {
    const buttonRef = useRef()
    const [int, setInt] = useState(0);


    const intObsd = {
        next: val => setInt(val),
        complete: () => console.log("complete")
    }

    useEffect(() => {
        const clickBtn$ = fromEvent(buttonRef.current, 'click').pipe(
            skip(2)
        );
        const int$ = interval(700).pipe(
            takeUntil(clickBtn$)
        );
        int$.subscribe(intObsd);

    }, [])
    return (
        <div className="">
            <h2>takeUntil -Operator </h2>
            <p><mark>TakeUntil</mark> permite que un observable emita valores <strong>hasta</strong> que otro <mark>Observable</mark> emita valores</p>
            <br />
            <p><mark>Skip</mark> permite que un observable ignore los primeros N valores que <strong>hasta</strong> que otro <mark>Observable</mark> emita valores</p>
            <h3>Interval <mark>..{int}.. </mark></h3>
            <button ref={buttonRef}> STOP THE INTERVAL</button>
        </div>
    )
}

export default MyTakeWhile;