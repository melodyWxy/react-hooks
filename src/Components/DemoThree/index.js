import React,{useEffect,useState} from 'react';
import {constructor,componentDidMount,componentWillUnmount,componentWillReceiveProps} from './../../hookUtils/lifeHooks';


function DemoThree (props){
    // constructor 
    const {
        state,
        setState
    } = constructor([{stateKey:'count',setStateName:'setCount',initState:0}])


    //componentDidMount 
    componentDidMount(()=>{
        console.log('componentDidMount-demo3');
    })

    //componentWillReceiveProps
    componentWillReceiveProps((preProps,nextProps,)=>{
        console.log('componentWillReceiveProps',preProps,nextProps);
    },props)

    //componentWillUnmount
    componentWillUnmount(()=>{
        console.log('componentWillUnmount-demo3');
    })

    //render 
    const {count} = state;
    const {setCount} = setState;
    console.log('===render-demo3===');
    return (
        <div>
            Demo3：
             <div>
                    <button onClick={()=>setCount(count+1)} >{props.a}点击我更新state{count}</button>
                </div>
        </div>
    )
}
export default DemoThree;
