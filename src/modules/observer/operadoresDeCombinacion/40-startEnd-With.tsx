import * as React from 'react';
import { useEffect, useState } from 'react';

import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { startWith, endWith, tap } from 'rxjs/operators';




const array = Array.from(Array(10).keys());
const URL = 'https://reqres.in/api/users/2?delay=3';

const MyStartEndWith = () => {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false)
    const obs$ = of(...array).pipe(
        startWith("START", "GO"),
        endWith("LETS", "FINISH")
    );

    const handleChange = (val) => {
        setState(old => [...old, val])
    }

    const handleClick = () => {
        console.log("ajax Call");
        ajax.getJSON(URL).pipe(
            startWith(true)

        ).subscribe(res => {
            if (res === true) {
                setLoading(res);
            } else {
                setLoading(false);
                setData(res.data);

            }
            console.log(res);

        });
    }

    useEffect(() => {
        obs$
            .pipe(
                tap(console.log)
            )
            .subscribe(handleChange)
    }, [])



    return (
        <div className="">
            <div className="">
                <h2>StartWith -Operator</h2>
                <p>Agrega la primera Emicion del Observable como el valor que se le pase al operador</p>
            </div>
            <div className="">
                <h2>EndWith -Operator</h2>
                <p>Agrega la última Emicions del Observable como el valor que se le pase al Operador</p>
            </div>
            <div className="">
                {
                    state.map(item => (
                        <span key={item}> {item} </span>
                    ))
                }
            </div>


            <button onClick={handleClick}>
                CALL THE USER
            </button>
            {
                loading &&
                <div className="" >
                    <h1>LOADINNG COMPONENT</h1>
                </div>
            }
            {
                data &&
                <div className="" >
                    <img src={data.avatar} alt="" />
                    <ul>
                        <li>{data.id} </li>
                        <li>{data.first_name} {data.last_name} </li>
                        <li>{data.email} </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default MyStartEndWith;
