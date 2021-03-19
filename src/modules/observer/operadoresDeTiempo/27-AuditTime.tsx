import *as React from 'react';
import { useEffect, useState } from 'react';
import { fromEvent } from 'rxjs';
import { map, auditTime, tap } from 'rxjs/operators';


const MyAuditTime = () => {
    const TIME = 5000;
    const clicks$ = fromEvent<MouseEvent>(document, 'click');
    const observer = {
        next: (val) => {
            console.log({ auditTime: val })
        }
    }
    useEffect(() => {
        clicks$.pipe(
            map(({ x }) => x),
            tap(console.log),
            auditTime(TIME)
        ).subscribe(observer)

    }, [])
    return (
        <div className="">
            <h2>Audit Time -- Operator</h2>
            <p>Audit Time emite el ultimo valor emitido despues de un periodo de tiempo especificado , es muy util para controlar observaables que emiten mucho Spam</p>
        </div>
    )
}

export default MyAuditTime;