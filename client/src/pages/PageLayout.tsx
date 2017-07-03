import * as React from 'react';
import { Link } from '../SimpleRouter';
import { User } from '../types';

const UserWidget = ({currentUser, onLogout}: {currentUser: User, onLogout: () => void}) => {
	return <select className="UserSelector" value={currentUser.id} onChange={e => e.currentTarget.value === '__LOGOUT__' && onLogout()}>
		<option value={currentUser.id}>{currentUser.name}</option>
		<option value="__LOGOUT__">Logout</option>
		</select>;
}

type PageLayoutProps = {
	currentUser?: User|null,
	children: JSX.Element,
	onLogout: () => void
}

const PageLayout = ({ currentUser, children, onLogout }: PageLayoutProps) => (
	<div className="Page">
		{ currentUser ?
			<header>
				<h1><Link to="/">Project Activity Tracking</Link></h1>
				<div className="MenuItem"><UserWidget currentUser={currentUser} onLogout={onLogout} /></div>
				<div className="MenuItem">{currentUser.projects.totalCount} Projects</div>
				<div className="MenuItem">{currentUser.activities.totalCount} Activities</div>
			</header>
			:
			<header><h1><Link to="/">Project Activity Tracking</Link></h1></header>
		}
		<div className="Main">
			{children}
		</div>
		<footer>
			<a href="https://github.com/nilshartmann/apollo-playground" target="_blank">https://github.com/nilshartmann/apollo-playground</a>
		</footer>
	</div>
);

export default PageLayout;
