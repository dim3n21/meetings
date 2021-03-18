import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import '../node_modules/react-toastify/dist/ReactToastify.min.css'
import '../node_modules/react-calendar/dist/Calendar.css';
import App from './app/layout/App';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import ScrollToTop from './app/layout/scrollToTop';
import { loadEvents } from './features/events/eventActions';

const rootEl = document.getElementById('root');
const store = configureStore();
store.dispatch(loadEvents());

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>, rootEl
  )
}

if (module.hot) {
  module.hot.accept('./app/layout/App', function() {
    setTimeout(render);
  })
}

render();