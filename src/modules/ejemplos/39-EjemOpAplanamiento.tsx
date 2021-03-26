import * as React from 'react';
import { useEffect, useState, useRef } from 'react';

import { of, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { catchError, exhaustMap, mergeMap, pluck, switchMap, tap } from 'rxjs/operators';
import { useFormRxjs, useForm } from '../../hooks/useForm';

import '../observer/operadoresDeTiempo/styles.css';

/** Este Codigo Utiliaza Los Hooks de React en convergencia con
 *  las Funcionalidades de RXJS para manejar los streams de Datos
 */

const initialValues = {
    firsName: "",
    LastName: "",
    email: "eve.holt@reqres.in",
    password: "cityslicka",
    Movile: "",
}

const GenericField = ({ name, value, handleFormStateChange }) => {
    return (
        <div className="contactUs__inputBox w50">
            <input
                name={name}
                onChange={handleFormStateChange}
                type="text"
                value={value}
            //required
            />
            <span>{name}</span>
        </div>
    )
}

const TextArea = ({ name, value, handleFormStateChange }) => {
    return (
        <div className="contactUs__inputBox w100">
            <textarea
                name={name}
                onChange={handleFormStateChange}
            //value={value}
            //required
            ></textarea>
            <span>{name}</span>
        </div>
    )
}

const EjemploOperadoresDeAplanamiento = () => {
    const { fields, getInput } = useFormRxjs({ initialValues });
    const formRef = useRef();
    const URL = 'https://reqres.in/api/login?delay=1'
    const peticion$ = ajax.post(URL, {
        email: fields['email'],
        password: fields['password']
    }).pipe(
        pluck('response', 'token'),
        catchError(err => of("xxx"))
    )
    const {
        fields: mesage,
        getInput: getMessage,
    } = useFormRxjs({ initialValues: { message: "" } })

    /** Submit*/


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        console.log(fields);
        peticion$.pipe(

        ).subscribe(console.log)

    }

    useEffect(() => {
        console.log(mesage);
    }, [mesage])

    useEffect(() => {
        console.log(fields);
    }, [fields])

    useEffect(() => {
        const submit$ = fromEvent<Event>(formRef.current, 'submit').pipe(
            tap(ev => ev.preventDefault()),
            //mergeMap(() => peticion$),
            //switchMap(() => peticion$),
            exhaustMap(() => peticion$)
        ).subscribe(console.log);

    }, [])
    return (
        <div className="contactUs">

            <div className="contactUs__contactForm">
                <h2>Operadores de Aplanamiento</h2>
                <div >
                    <form
                        ref={formRef}
                        className="contactUs__formBox"
                        action=""
                    //onSubmit={handleSubmit}
                    >

                        <TextArea {...getMessage('message')} />
                        <TextArea {...getMessage('Cosas')} />

                        {
                            Object.keys(initialValues).map(
                                field => (
                                    <GenericField
                                        key={field}
                                        {...getInput(field)}
                                    />
                                )
                            )
                        }

                        <div className="contactUs__inputBox w100" >
                            <input type="submit" value="send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default EjemploOperadoresDeAplanamiento;