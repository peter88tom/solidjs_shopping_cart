/* @refresh reload 
Index.jsx is an entry point for the app, which targets the element with id root in index.html
*/
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

render(() => <App />, document.getElementById('root'));
