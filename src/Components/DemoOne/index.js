import React,{useState,useEffect} from 'react';

function DemoOne (){
    const [count,setCount] = useState(520);
    function double(){
        const res =  count*2;
        setCount(res)
    }
    return (    
        <div>
            Demo1：
            <div >
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
