import * as React from 'react';

import PageLayout from './../PageLayout';

const ProjectProgressBar = ({ activities }) => {

	const activitiesByState = activities.reduce((last, current) => {
		return {
			...last,
			[current.state]: last[current.state] + 1,
			total: last.total + 1
		};
	}, {
			'CREATED': 0,
			'STARTED': 0,
			'FINISHED': 0,
			'total': 0
		});

	const barItemWidth = (activityState) => (100 / activitiesByState.total) * activitiesByState[activityState];
	const barItem = (activityState) => <div className={activityState} style={{ width: `${barItemWidth(activityState)}%` }}>{activitiesByState[activityState] > 0 && activitiesByState[activityState]}</div>;

	return <div className="ProjectProgressBar">
		{barItem('CREATED')}
		{barItem('STARTED')}
		{barItem('FINISHED')}
	</div>;
}


const ProjectRow = ({ project }) => <tr>
	<td>{project.title}</td>
	<td>{project.owner.name}</td>
	<td>{project.latestActivity.title}</td>
	<td style={{ width: '20%' }}><ProjectProgressBar activities={project.activities} /></td>
</tr>;

const Overview = ({ projects }) => <PageLayout>
	<div className="Main">
		<table className="SelectableTable">
			<thead>
				<tr>
					<th>Project</th>
					<th>Owner</th>
					<th>Latest Activity</th>
					<th><div className="Filter"><input type="text" placeholder="Filter" size={20} /><button><i className="material-icons">clear</i></button></div></th>
				</tr>
			</thead>
			<tbody>
				{projects.map(project => <ProjectRow key={project.key} project={project} />)}
			</tbody>
		</table>

		<div className="RightAlign">
			<button>Add Project</button>
		</div>

	</div>
</PageLayout>;

export default Overview;
