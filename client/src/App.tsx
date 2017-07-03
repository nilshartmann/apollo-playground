import * as React from 'react';
import { Route } from 'react-router-dom';
import PageLayout from './pages/PageLayout';
import OverviewPage from './pages/OverviewPage';
import ActivityPage from './pages/ActivityPage';

import { SimpleRouter, RouteConfig } from './SimpleRouter';


const routes: RouteConfig[] = [
	{ path: '/', action: () => <OverviewPage /> },
	{ path: '/project/:projectId/:activityId', action: ({projectId, activityId}) => <ActivityPage projectId={projectId} activityId={activityId} /> },
]


// const App = () => <PageLayout username="bla"><SimpleRouter routes={routes} /></PageLayout>;

import { User } from './types';
import LoginPage from './pages/LoginPage';

type AppProps = {
}

type AppState = {
	currentUser?: User|null
}

class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {};

		this.onUserSelected = this.onUserSelected.bind(this);
		this.onLogout = this.onLogout.bind(this);

	}
	onUserSelected(user: User) {
		this.setState({ currentUser: user });
	}

	onLogout() {
		this.setState({ currentUser: null });
	}

	render() {
		const { currentUser } = this.state;

		return (
			<PageLayout currentUser={currentUser} onLogout={this.onLogout}>
				{ currentUser ? <SimpleRouter routes={routes} /> : <LoginPage onUserSelected={this.onUserSelected} />}
			</PageLayout>
		);
	}
}

export default App;
