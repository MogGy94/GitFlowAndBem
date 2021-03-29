import * as React from 'react';
import { useEffect, useState } from 'react';

import { forkJoin, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { sampleTime, distinctUntilChanged } from 'rxjs/operators';

import '../styles.css'

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'moggy94';


const MyForkJoin = () => {
    const [userName, setUserName] = useState("");
    const input$ = new Subject();

    const ajaxHelper = (path: string = "") => (
        ajax.getJSON(`${GITHUB_API_URL}/${userName}${path}`)
    )

    const info$ = forkJoin({
        usuario: ajaxHelper(),
        repos: ajaxHelper('/repos'),
        gists: ajaxHelper('/gists'),
    })

    const handleSubmit = () => {
        info$.subscribe(console.log)
    }

    const handleUserNameChange = (e) => {
        input$.next(e.target.value)
    }

    input$.pipe(
        sampleTime(400),
        distinctUntilChanged()
    ).subscribe(setUserName)



    return (

        <div className="contactUs">
            <div className="contactUs__contactForm">
                <div className="">

                    <p>la Función ForkJoin Permite recibir varios Observables como parametro y emitir un valor consolidado de las últimas emiciones de los Observables Internos, cuando todos estos se hallan completado</p>

                </div>
                <h2>ForkJoin - Function</h2>
                <div className="contactUs__formBox">
                    <div className="contactUs__inputBox w50">
                        <input type="text" required onChange={handleUserNameChange} />
                        <span>User Name</span>
                    </div>

                    <div className="contactUs__inputBox w50" onClick={handleSubmit} >
                        <input type="submit" value="send" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyForkJoin;