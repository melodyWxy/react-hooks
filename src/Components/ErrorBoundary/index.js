import React from 'react';

export default class ErrorBoundary extends React.Component{
    state = {hasError:false}
    static getDerivedStateFromError(error){
        console.log('被触发了:',error);
        return {hasError:true}
    }
    componentDidCatch(error,errorInfo){
        console.log(error,errorInfo);
    }
    render(){
        if(this.state.hasError){
            return <div>悲伤的错误发生了</div>
        }
        return this.props.children;
    }
}