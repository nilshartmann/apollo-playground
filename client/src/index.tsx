// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { ApolloProvider } from 'react-apollo';
import './styles.scss';
import { createGraphQLClient } from './createGraphQLClient';
import App from './App';


const graphQLClient = createGraphQLClient();

const renderApp = (Component: typeof App) => {
	ReactDOM.render(
		<AppContainer>
			<ApolloProvider client={graphQLClient}>
					<Component />
			</ApolloProvider>
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
