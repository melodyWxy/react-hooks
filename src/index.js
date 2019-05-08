
import React from 'react';
import ReactDOM from 'react-dom';
import DemoOne from './Components/DemoOne';
import DemoTwo from './Components/DemoTwo';
import DemoThree from './Components/DemoThree';
function Demo (){
    return (
        <div >
            <DemoOne />
            <DemoTwo />
            <DemoThree />
        </div>
    )
}
// export default App;
const root = document.getElementById('root');
ReactDOM.render(<Demo />,root);