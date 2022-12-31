
import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App'

function renderComponent() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}
renderComponent();
