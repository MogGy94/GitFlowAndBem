import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { fromEvent, of, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, distinctUntilChanged, pluck, mergeAll } from 'rxjs/operators';

import '../operadoresDeTiempo/styles.css'


const url = 'https://api.github.com/users?per_page=5';
const url2 = 'https://httpbin.org/delay/1'

const MyMergeAll
    = () => {
        const DEBOUNCE = 400;
        const buttonRef = useRef();
        const input$ = new Subject();

        const [users, setUsers] = useState([]);

        const handleChange = (e) => {
            /**Se envía el valor del change por un Subject */

            const value = e.target.value;
            input$.next(value);

        }


        useEffect(() => {
            const buttonObs$ = fromEvent(buttonRef.current, 'click').pipe(
                debounceTime(DEBOUNCE),/**clickea todo lo que quieras :DDD */
                distinctUntilChanged()
            );
            buttonObs$.subscribe(console.log);


            /** React maneja el evento de key up */
            input$.pipe(
                debounceTime<any[]>(DEBOUNCE),
                distinctUntilChanged(),
                map(val => ajax.getJSON(`https://api.github.com/search/users?q=${val}`)),
                mergeAll(),
                pluck('items'),

                map((val: any[]) => {
                    console.log(val);

                    const arra = val.map(({ login, id, node_id, score }) => ({ login, id, node_id, score }));
                    return arra;
                })

            ).subscribe(setUsers);

        }, [])

        return (
            <>
                <div className="contactUs__contactForm">
                    <h2>Merge All Operator</h2>

                    <div className="contactUs__formBox">

                        <div className="contactUs__inputBox w100">
                            <textarea onChange={handleChange} required></textarea>
                            <span>Se subscribe automaticamente a los Observables emitidos por el Observable prinscipal y emite todos sus valores</span>
                        </div>

                        <div ref={buttonRef} className="contactUs__inputBox w100" >
                            <input type="submit" value="send" />
                        </div>
                    </div>

                    <table>
                        <thead>

                            <tr>
                                {
                                    ["login", "id", "node_id", "score"].map(key => (
                                        <th {...key} name={key}> {key}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, i) => (
                                    <tr key={i}>
                                        {
                                            Object.keys(user).map((item, i) => (
                                                <td key={item + i}>{user[item]}</td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>


                </div>

            </>
        )
    }

export default MyMergeAll
    ;
