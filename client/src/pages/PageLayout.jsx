
import * as React from 'react';

const PageLayout = ({ username, children }) => <div className="Page">
	<header>
			<h1>Project Activity Tracking</h1>
			<div className="MenuItem">Nils</div>
			<div className="MenuItem">2 Projects</div>
			<div className="MenuItem">3 Activities</div>
	</header>
	<div className="Main">
		{children}
	</div>
	<footer>
		&nbsp;
	</footer>
</div>;
export default PageLayout;
