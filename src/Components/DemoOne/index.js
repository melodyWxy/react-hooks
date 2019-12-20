import React,{useState,useEffect,useRef,useMemo} from 'react';

function DemoOne ({a}){
    const [count,setCount] = useState(520);
    const constructorRef = useRef(0);
    if(constructorRef.current === 0) {
        console.log('constructor');
        console.log('componentWillMount');
    }
    useMemo(()=>{
        if(constructorRef.current!==0){
            console.log('componentWillReciverProps');
        }
    },[a])

    useMemo(()=>{
        if(constructorRef.current!==0){
            console.log('shouldComponentUpdate');
            console.log('componentWillUpdate');
        }
        return  count
    },[a,count])
    useEffect(()=>{
        if(constructorRef.current!==0){
            console.log('componentDidUpdate');
        }
    },[a,count])
    useEffect(()=>{
        constructorRef.current = 1;
        console.log('componentDidmount');
        return ()=>{
            console.log('componentWillUnmount');
        }
    },[])
    console.log('===render')
    return (    
            <div>
                Demo1：
                <div>
                    <button onClick={()=>setCount(count+1)} >{a}点击我更新state{count}</button>
                </div>
            </div>
    )
}
export default DemoOne;
