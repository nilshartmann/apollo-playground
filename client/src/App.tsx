import * as React from 'react';
import { Route } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import ActivityPage from './pages/ActivityPage';

const App = () => (
	<div>
		<Route exact path="/" component={OverviewPage} />
		<Route exact path="/project/:projectId/:activityId" component={ActivityPage} />
	</div>
);

export default App;
