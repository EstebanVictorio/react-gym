import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component {
    render() {
        return <p>Hello {this.props.character}!</p>
    }
}


ReactDOM.render(
    <div>
        <HelloWorld character={'Iron Man'}/>
        <HelloWorld character={'Thor'}/>
        <HelloWorld character={'Black Widow'}/>
        <HelloWorld character={'Thor'}/>
        <HelloWorld character={'Captain America'}/>
        <HelloWorld character={'Yisus'}/>
    </div>
    , document.querySelector('#container'));