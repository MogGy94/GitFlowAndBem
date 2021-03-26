import * as React from 'react';
import Observer from './01-Observer';
import SubUnsub from './02-subsUnsubs';
import Subject from './04-Subject';
import OF from './05-of';
import FromEvent from './06-fromEvent';
import Range from './07-range';
import Intervarl from './08-interval-Timer'
import AsynSchedule from './09-asynScheduler';
import FromOF from './10-fromYOF';
/**Operadores */
import ToMap from './operadores/11-Map-pluck-mapTo';
import MyFilter from './operadores/12-Filter';
import MyTap from './operadores/13-tap';
import MyReduce from './operadores/15-Reduce-Scan';
import MyTake from './operadores/16-take';
import MyFirst from './operadores/17-first';
import MyTakeWhile from './operadores/18-takeWhile'
import MyTakeUntil from './operadores/19-takeUntil-Skip';
import MyDistinct from './operadores/20-Distict';
import MyDistinctUntilChange from './operadores/21-DistictUntilChange';
import MyDistinctUntilKeyChange from './operadores/22-DistictUntilKeyChange';

/**Operadores de Tiempo */
import MyDebounceTime from './operadoresDeTiempo/23-debounceTime';
import MyThrottleTime from './operadoresDeTiempo/24-throttleTime';
import MySampleTime from './operadoresDeTiempo/25-SampleTime';
import MySample from './operadoresDeTiempo/26-Sample';
import MyAuditTime from './operadoresDeTiempo/27-AuditTime';

/**Peticiones Ajaxs */
import MyFetch from './ajax/28-MyFetch';
import MyCatchError from './ajax/29-catchError';
import MyGetJson from './ajax/30-getJson';
import MyPostPutDel from './ajax/31-Post_Put_del'
import MyOpAplanamiento from './ajax/33-OpAplanamiento';
import MyMergeAll from './operadoresDeTransformacion/34-MergeAll';
import MyMergeMap from './operadoresDeTransformacion/35-MergeMap';
import MyMergeMapXamples from './operadoresDeTransformacion/36-SwitchMap';
import MyConcatMap from './operadoresDeTransformacion/37-concatMap';
import MyExhaustMap from './operadoresDeTransformacion/38-ExhaustMap';
import EjemploOperadoresDeAplanamiento from '../ejemplos/39-EjemOpAplanamiento';

/** Operadores y métodos de Combinacion */
import MyStartEndWith from './operadoresDeCombinacion/40-startEnd-With';
import MyConcat from './operadoresDeCombinacion/41-concat-fun';
import MyMergeFun from './operadoresDeCombinacion/42-merge-fun';

const Index = () => (
    <>
        <div className="">
            <MyMergeFun></MyMergeFun>
            {/*
            <MyConcat></MyConcat>
            <MyStartEndWith></MyStartEndWith>
            
            */}
        </div>
        <div className="Peticiones Ajax">
            {/**
            <EjemploOperadoresDeAplanamiento></EjemploOperadoresDeAplanamiento>
            <MyExhaustMap></MyExhaustMap>
            <MyConcatMap></MyConcatMap>
            <MyMergeMapXamples></MyMergeMapXamples>
            <MyMergeMap></MyMergeMap>
            <MyMergeAll></MyMergeAll>
            <MyOpAplanamiento></MyOpAplanamiento>
            <MyPostPutDel></MyPostPutDel>
            <MyGetJson></MyGetJson>
            <MyCatchError></MyCatchError>
            <MyFetch></MyFetch>
             
             * 
             */}
        </div>
        <div className="OperadoresDeTiempo">
            {/* 
            <MyAuditTime></MyAuditTime>
            <MySample></MySample>
            <MySampleTime></MySampleTime>
            <MyThrottleTime></MyThrottleTime>
            <MyDebounceTime></MyDebounceTime>
            
            */}
        </div>
        <div className="Operadores">
            {/*     
            <MyDistinctUntilKeyChange></MyDistinctUntilKeyChange>
            <MyDistinctUntilChange></MyDistinctUntilChange>
            <MyDistinct></MyDistinct>
            <MyTakeUntil></MyTakeUntil>
            <MyTakeWhile></MyTakeWhile>
            <MyFirst></MyFirst>
            <MyTake></MyTake>
            <MyReduce></MyReduce>
            <MyTap></MyTap>
            <MyFilter></MyFilter>
            <ToMap></ToMap>
            */}

        </div>

        {/* 
        <FromOF></FromOF>
        <AsynSchedule></AsynSchedule>
        <Intervarl></Intervarl>
        <Range></Range>
        <FromEvent></FromEvent>
        <OF></OF>
        <Subject></Subject>
        <SubUnsub></SubUnsub>
        <Observer></Observer>
         */}
    </>
)

export default Index;