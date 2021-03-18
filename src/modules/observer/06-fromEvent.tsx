import * as React from 'react';
import { useState, useEffect } from 'react';
import { fromEvent } from 'rxjs';



const FromEvent = () => {

    const observer = {
        next: val => console.log({ val })
    }

    useEffect(() => {
        const src$1 = fromEvent(document, 'click');
        const src$2 = fromEvent<KeyboardEvent>(document, 'keyup');

        src$1.subscribe(console.log);
        src$2.subscribe(({ key }) => {
            console.log(key)
        });
    }, [])
    return (
        <div className="">
            <h2>From Event</h2>
        </div>
    )
}

export default FromEvent;