import * as React from 'react';
import { Route } from 'react-router-dom';
import PageLayout from './pages/PageLayout.jsx';
import OverviewPage from './pages/OverviewPage';
import ActivityPage from './pages/ActivityPage';

import { SimpleRouter, RouteConfig } from './SimpleRouter';

const routes: RouteConfig[] = [
	{ path: '/', action: () => <OverviewPage /> },
	{ path: '/project/:projectId/:activityId', action: ({projectId, activityId}) => <ActivityPage projectId={projectId} activityId={activityId} /> },
]

const App = () => <PageLayout username="bla"><SimpleRouter routes={routes} /></PageLayout>;

export default App;
