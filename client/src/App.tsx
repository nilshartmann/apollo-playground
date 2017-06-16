import * as React from 'react';
import { Route } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';

const App = () => (
	<div>
		<Route exact path="/" component={OverviewPage} />
	</div>
);

export default App;
