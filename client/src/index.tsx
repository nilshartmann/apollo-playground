// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles.scss';

import { AppContainer } from "react-hot-loader";

import App from './App';

const renderApp = (Component: typeof App) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById("mount")
	);
};

renderApp(App);

if (module.hot) {
	module.hot.accept("./App", () => {
	    // Hot Re-load should work without re-require according to Webpack 2 docs,
	    // but does not
		const NextApp = require<RequireImport>("./App").default;
		renderApp(NextApp);
	});
}
