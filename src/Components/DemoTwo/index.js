import React,{useState} from 'react';

function DemoTwo (){
    const [state,setState] = useState({
        text:'我',
        count:0
    });
    function handleClick(){
        let count = ++state.count;
        let text = '我';
        // 请避免在js中使用switch
        if(count === 1){
            text = '真'
        }else if(count === 2){
            text = '帅'
        }else{
            count = 0
        }
        setState({
            text,
            count
        })
    }
    return (
        <div>
            Demo2：
            <div >
                {state.text}
            </div>
            <div>
                <button onClick={handleClick}>多点我几下子嘛</button>
            </div> 
        </div>
    )
}
export default DemoTwo;
