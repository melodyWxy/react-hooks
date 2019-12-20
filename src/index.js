
import React,{ useState,Profiler,Suspense } from 'react';
import ReactDOM from 'react-dom';
// import DemoOne from './Components/DemoOne';
import ErrorBoundary from  './Components/ErrorBoundary';
import Demo2 from './Components/DemoTwo';
const Content  =  React.lazy(()=>import('./Components/DemoOne'));

function View (){
    const  [showIndex,setIndex] = useState(0);
    const  [a,seta] = useState(0);
    const [b,setb] = useState(0);
    let view; 
    switch(showIndex){
        case 0: 
            view =  <Content a={a}/>;
            break;
        case 1: 
            view = <Demo2 />;
            break;
        default :
            view =  <Content /> 
            break;
    }
    return (
        <div>
            <button onClick={()=>{
                const index = showIndex===0 ?1:0;
                setIndex(index);
            }}>点击切换view</button>
            <button onClick={()=>{
                seta(a+1)
            }}>点击更新props</button>
            <button onClick={()=>{
                setb(b+1)
            }}>点击更新父组件</button>
            {view}
        </div>
    )
}

function Demo (){
    const [count, setcount] = useState(0);
    // setTimeout(()=>{
    //     setcount(10)
    // },10000)
  

    return (
        <>
            <Profiler id='errorBoundary' onRender={()=>{}}>
                <ErrorBoundary>
                    <Suspense fallback = {<div>loading</div>}>
                        <View />
                    </Suspense>
                </ErrorBoundary>
            </Profiler>
        </>
    )


}

const root = document.getElementById('root');
ReactDOM.render(<Demo />,root);