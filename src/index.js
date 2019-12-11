
import React,{ useState,Profiler,Suspense } from 'react';
import ReactDOM from 'react-dom';
// import DemoOne from './Components/DemoOne';
import ErrorBoundary from  './Components/ErrorBoundary';

const Content  =  React.lazy(()=>import('./Components/DemoOne'));
function Demo (){
    const [count, setcount] = useState(0);
    setTimeout(()=>{
        setcount(10)
    },10000)
  

    return (
        <>
            <Profiler id='errorBoundary' onRender={(...props)=>{
                console.log(...props);
            }}>
                <ErrorBoundary>
                    <Suspense fallback = {<div>loading</div>}>
                        <Content countP={count}/>
                    </Suspense>
                </ErrorBoundary>
            </Profiler>
        </>
    )


}

const root = document.getElementById('root');
ReactDOM.render(<Demo />,root);