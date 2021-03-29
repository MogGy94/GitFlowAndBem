import * as React from 'react';
import { useEffect, useState } from 'react';

import { Subject, combineLatest } from 'rxjs';
import { take, map, pluck } from 'rxjs/operators';

import '../styles.css';

const MyMergeFun = () => {
    const [evenColection, setEventColection] = useState([]);

    const email$ = new Subject();
    const pass$ = new Subject();

    const handleChange = (e, sub: Subject) => {
        sub.next(e.target.value)
    }

    combineLatest([email$, pass$]
    ).subscribe(setEventColection)


    return (
        <div className="">
            <h2>Combine Lastest  Function</h2>
            <p>La funcion <mark>CombineLatest</mark> recibe uno o más <mark>Observables</mark> como parametro y permite combinar sus emiciones para emitirlas simultaneamente </p>
            <br></br><br></br><br></br>

            <div className="d">
                <GenericField {...{
                    name: "Email",
                    //value: "",
                    handleFormStateChange: (e) => handleChange(e, email$)
                }}></GenericField>
                <GenericField {...{
                    name: "Password",
                    //value: "",
                    handleFormStateChange: (e) => handleChange(e, pass$)
                }}></GenericField>
            </div>

            <div className="">
                {
                    evenColection.map((item, i) => (

                        <span key={i} > {item} </span>
                    ))
                }
            </div>
        </div>
    )
}



const GenericField = ({ name, handleFormStateChange }) => {
    return (
        <div className="contactUs__inputBox w50">
            <input
                name={name}
                onChange={handleFormStateChange}
                type="text"
                //value={value}
                required
            />
            <span>{name}</span>
        </div>
    )
}
export default MyMergeFun;