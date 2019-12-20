
import React,{ useState,Profiler,Suspense } from 'react';
import ReactDOM from 'react-dom';
// import DemoOne from './Components/DemoOne';
import ErrorBoundary from  './Components/ErrorBoundary';
import Demo2 from './Components/DemoTwo';
import Demo3 from './Components/DemoThree';
const Content  =  React.lazy(()=>import('./Components/DemoOne'));

function View (){
    const  [showIndex,setIndex] = useState(2);
    const  [a,seta] = useState(0);
    const [b,setb] = useState(0);
    let view; 
    switch(showIndex){
        case 0: 
            view =  <Content a={a}/>;
            break;
        case 1: 
            view = <Demo2 a={a}/>;
            break;
        case 2: 
            view = <Demo3 a={a}/>;
            break;
        default :
            view =  <Content /> 
            break;
    }
    return (
        <div>
            <div>
                <button onClick={()=>{
                    const index = showIndex===2 ? 0:showIndex+1;
                    setIndex(index);
                }}>
                    点击切换组件(卸载当前组件)
                </button>
            </div>
            <button onClick={()=>{
                seta(a+1)
            }}>点击更新props</button>
            <button onClick={()=>{
                setb(b+1)
            }}>点击更新父组件(只触发组件render)</button>
            {view}
        </div>
    )
}

function Demo (){
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