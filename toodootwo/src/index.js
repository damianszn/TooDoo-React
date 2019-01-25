import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import NotesContainer from './Note';
import MessageShown from './Message';
import Ad from './Ad';

ReactDOM.render(<NotesContainer />, document.getElementById('root'));
ReactDOM.render(<MessageShown />, document.getElementById('message'));
ReactDOM.render(<Ad />, document.getElementById('ad'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
