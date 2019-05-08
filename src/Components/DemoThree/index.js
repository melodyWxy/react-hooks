import React,{useEffect,useState} from 'react';

function DemoThree (){
    const [count,setCount] = useState(520);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            console.log('我是一个延时器')
        },7000)
        return ()=>{
            clearTimeout(timer)
        }
    })
    return (
        <div>
            Demo3：
            <div >
                {count}
            </div>
            <div>
                <button onClick={()=>setCount(count+1)}>点击我加一</button>
            </div> 
        </div>
    )
}
export default DemoThree;
