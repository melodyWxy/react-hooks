import React,{useState,useEffect,useMemo,useRef} from 'react';
const lg = console.log;

function DemoTwo (props){
    const constructRef = useRef(0);
    const [count,setCount] = useState(520);
    const propRef =  useRef(props);
    const stateRef =  useRef({
        count
    });
    if(constructRef.current===0){
        lg('constructor2');
        lg('componentWillMount2');
    }
    useEffect(()=>{
        if(constructRef.current!==0){
            lg('componentDidUpdate');
        }
    })
    useMemo(()=>{
        if(constructRef.current!==0){
            lg(`
                componentWillReciveProps2 \t
                ===props===  \t
            `);
            lg(propRef.current);
            lg('=====nextprops===');
            lg(props);
        }
    },[...Object.values(props)])
    useMemo(()=>{
        if(constructRef.current!==0){
            lg('====shouldComponentUpdate====');
            lg("preprops:",propRef.current);
            lg("nextprops:",props);
            lg("state:",stateRef.current);
            lg("nextstate:",{count});
            lg('componentWillUpdate');
        }
        propRef.current = props;
        stateRef.current = {
            count
        }
    },[...Object.values(props),count])
    useEffect(()=>{
        constructRef.current = 1;
        lg('componentDidMount2');
        return ()=>{
            lg('componentWillUnmount2');
        }
    },[])

    const {a} = props;
    console.log('===render===');
    return (
        <div>
            Demo2：
             <div>
                    <button onClick={()=>setCount(count+1)} >{a}点击我更新state{count}</button>
                </div>
        </div>
    )
}
export default DemoTwo;
