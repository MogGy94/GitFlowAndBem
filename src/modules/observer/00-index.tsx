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

const Index = () => (
    <>
        <div className="Operadores">
            <MyDistinctUntilKeyChange></MyDistinctUntilKeyChange>
            {/*     
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