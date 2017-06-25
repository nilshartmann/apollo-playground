import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as ReactTooltip from 'react-tooltip'

import { Link, historyPush } from '../../SimpleRouter';
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
	const barItem = (activityState) => <div data-tip={activityCountAsString(activityState)} className={activityState} style={{ width: `${barItemWidth(activityState)}%` }}>{activitiesByState[activityState] > 0 && activitiesByState[activityState]}</div>;
	const activityCountAsString = (activityState) => {
		const activityCount = activitiesByState[activityState];

		if (activityCount === 0) {
			return `No activities are ${activityState.toLowerCase()}`
		}

		if (activityCount === 1) {
			return `One activity in state '${activityState.toLowerCase()}'`;
		}

		return `${activityCount} activities in state '${activityState.toLowerCase()}'`;
	}

	return (
		<div className="ProjectProgressBar">
			{barItem('CREATED')}
			{barItem('STARTED')}
			{barItem('FINISHED')}

			<ReactTooltip delayShow={250}></ReactTooltip>
		</div>
	);
}


const ProjectRow = ({ project, onRowClick }) => <tr onClick={onRowClick}>
	<td>{project.title}</td>
	<td>{project.owner.name}</td>
	<td>{project.latestActivity.title}</td>
	<td style={{ width: '20%' }}><ProjectProgressBar activities={project.activities} /></td>
</tr>;

const OverviewPage = ({ projects }) => (
	<div>
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
				{projects.map(project =>
					<ProjectRow key={project.id}
						project={project}
						onRowClick={() => historyPush(`/project/${project.id}/${project.latestActivity.id}`)} />)}
			</tbody>
		</table>

		<div className="RightAlign">
			<button>Add Project</button>
		</div>

	</div>
);

export default OverviewPage;
