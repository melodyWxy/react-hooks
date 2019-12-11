import React,{useState,useEffect,useRef,useLayoutEffect,useReducer,useContext} from 'react';
console.log(useState);

function DemoOne (props){
    const [count,setCount] = useState(520);
    const refs = useRef();
    // const refs = {
    //     current:null
    // }
    function double(){
        const res = count*2;
        setCount(res);
    }

    // setTimeout(()=>{
    //     throw new Error('这是一个错误');
    // },5000)
    useEffect(()=>{
        console.log('xxx');
        console.log(refs);
    })
    // useLaz
    return (    
            <div>
                Demo1:
                <div  ref={refs}>
                    {count}
                </div>
                <div>
                    <button onClick={()=>setCount(count+1)}>点击我加一</button>
                </div> 
                <div>
                    <button onClick={double}>点击我翻倍哟</button>
                </div>
            </div>
    )
}
export default DemoOne;
