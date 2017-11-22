import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducersApp from './reducers/reducers.js'

//创建状态仓库store，引入中间件（用于处理异步请求）
const store = createStore(reducersApp, applyMiddleware(thunk));

ReactDOM.render(
    //将总组件App用Provider标签包裹并将store属性写入，此时App组件中的所有组件都可以访问store属性的值，也就是store对象
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);