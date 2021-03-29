import * as React from 'react';
import { useEffect, useState } from 'react';

import { interval, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import '../observer/styles.css'

const capitalizar = (nombre: string) => (
    nombre.replace(/\w\S*/g, (txt) => (
        txt.charAt(0).toUpperCase() + txt.substr(1).toLocaleLowerCase()
    ))
)
const words = ["ini", "miny", "maini", "moo", "de", "tin", "marin", "de", "do", "pingüe"]


const Capitalize = () => {
    const [display, setDsiplay] = useState("");
    const [inpuyDisplay, setInputDsiplay] = useState("");
    const interval$ = interval(500);
    const subject$ = new Subject();

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value);

        subject$.pipe(
            map(capitalizar)
        ).next(value);
    }

    subject$.subscribe(setInputDsiplay)


    useEffect(() => {
        interval$.pipe(
            map(val => val % words.length),
            map(val => words[val]),
            map(capitalizar)
        ).subscribe(setDsiplay);
    }, [])



    return (
        <div className="contactUs">
            <div className="contactUs__contactForm">
                <div className="contactUs__formBox">
                    <h2>Capitalize input</h2>
                    <div className="">{display}</div>
                    <br /> <br /> <br /> <br /><br />

                    <div className="contactUs__inputBox w50">
                        <input
                            onChange={handleChange}
                            type="text"
                            required
                        />
                        <span>Input </span>
                    </div>
                    <div className="contactUs__inputBox w50">
                        <input
                            type="text"
                            value={inpuyDisplay}
                            readOnly
                            required
                        />
                        {/* <span>Out put</span> */}
                    </div>
                    <div className=""> </div>
                </div>
            </div>
        </div>
    )
}

export default Capitalize;
