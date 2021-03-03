import React from 'react';
import c from './errorBoundary.module.css';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: "",
    } 
    componentDidCatch (error, info) {
        this.setState({hasError: true, error})
    }

    render(){
        return ( 
        <>
            { this.state.hasError
                ? 
                <div className={c.main}>
                    <div className={c.text}> Oops! This {this.props.name} has <span>error</span> =( </div>
                    <button className={c.btn} onClick={() => console.log(this.state.error)}>Report a bug</button>
                </div>
                : 
                this.props.children
            }
        </>)
    }
}

export default ErrorBoundary;