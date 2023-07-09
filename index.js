import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { myStore1 } from './component/functionBasedComps/TodoAssignment/TodoStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={myStore1}>
    <App />
    </Provider>
);

