import * as React from 'react';
import { useEffect, useState } from 'react';

import { of, Subject } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';

import '../observer/styles.css'


const ReduceArray = () => {
    const [newValue, setNewValue] = useState("");
    const [array, setArray] = useState([]);
    const [reduceDisplay, setReduceDisplay] = useState("");
    //const reduce$ = new Subject();
    const input$ = new Subject();


    const handleAddtoArray = () => {
        setArray(old => [...old, newValue]);
        setNewValue("")
    }

    const handleInputChange = (e) => {
        const { value } = e.target;
        if (!isNaN(value)) {
            input$.next(Number(value));
        }
    }
    input$.subscribe(setNewValue)


    useEffect(() => {
        of(...array).pipe(
            //filter(val => !isNaN(val)),
            reduce((acc, curr) => acc + curr)
        ).subscribe(setReduceDisplay)
    }, [array])

    return (
        <div className="contactUs">
            <div className="contactUs__contactForm">
                <div className="contactUs__formBox">

                    <div className="">
                        <h2>Reduce Array input</h2>
                    </div>
                    <h2>Out: <mark>{reduceDisplay}</mark> </h2>
                    <div className="">{
                        array.map((item, i) => <span key={i}>{item} </span>)
                    }</div>
                    <br /> <br /> <br /> <br /><br />

                    <div className="contactUs__inputBox w50">
                        <input
                            onChange={handleInputChange}
                            value={newValue}
                            type="text"
                            required
                        />
                        <span>Input </span>
                    </div>
                    <div className="contactUs__inputBox w100" >
                        <input
                            type="submit"
                            value="send"
                            onClick={handleAddtoArray} />
                    </div>
                    <div className=""> </div>
                </div>
            </div>
        </div>
    )
}

export default ReduceArray;
