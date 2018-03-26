import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";

import { Hello } from "./components/Hello";
import { enthusiasm } from "./reducers/index";
import { StoreState } from "./types/index";
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: "TypeScript",
});

ReactDOM.render(
  <Provider store={store}>
    <Hello name="TypeScript" />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
