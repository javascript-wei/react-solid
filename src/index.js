
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTest from './page/ReactTest'


const App = ()=>{
    return  <ReactTest></ReactTest>
}
function renderComponent() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}
renderComponent();
