import * as React from 'react';
import { Link } from '../SimpleRouter';

const PageLayout = ({ username, children }) => (
	<div className="Page">
		<header>
			<h1><Link to="/">Project Activity Tracking</Link></h1>
			<div className="MenuItem">Nils</div>
			<div className="MenuItem">2 Projects</div>
			<div className="MenuItem">3 Activities</div>
		</header>
		<div className="Main">
			{children}
		</div>
		<footer>
			<a href="https://github.com/nilshartmann/apollo-playground" target="_blank">https://github.com/nilshartmann/apollo-playground</a>
		</footer>
	</div>
);

export default PageLayout;
