import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import { ActivityState, UserSummaryFragment } from '../../query-schema';

import { Link, historyPush } from '../../SimpleRouter';

type ActivitySummary = {
	id: string,
	title: string,
}

type CurrentActivity = {
	id: string,
	title: string,
	description: string,
	nextAction: string|null,
	state: ActivityState,
	creator: UserSummaryFragment,
	assignee: UserSummaryFragment
}

type CurrentProject = {
	id: string,
	title: string,
	currentActivity: CurrentActivity,
	activities: ActivitySummary[]
}

type ActivityPageProps = {
	project: CurrentProject
}

// active={}
const ActivityMasterItem = ({ project, activity, onClick }: { project: CurrentProject, activity: ActivitySummary, onClick?: () => void }) => {
	const activityUrl = `/project/${project.id}/${activity.id}`;
	const divClassName = `ActivityMasterItem ${activity.id === project.currentActivity.id ? 'active' : ''}`;
	return (
		<div className={divClassName} onClick={() => historyPush(activityUrl)}>
			<Link to={activityUrl}>{activity.id}: {activity.title}</Link>
		</div>
	);
}

const ActivitiesViewDetailField = ({ label, value }: { label: string, value: string|React.ReactNode }) => (
	<div className='ActivitiesViewDetailField'>
		<h3 className="ActivitiesViewDetailFieldName">{label}</h3>
		<div className="ActivitiesViewDetailFieldValue">{value}</div>
	</div>
)

const ActivitiesViewDetail = ({ currentActivity }: { currentActivity: CurrentActivity }) => {
	return (
		<div>
			<ActivitiesViewDetailField label="Activity:" value={`${currentActivity.id}: ${currentActivity.title}`} />
			<ActivitiesViewDetailField label="State:" value={<span>{currentActivity.state.toLowerCase()} {currentActivity.nextAction && currentActivity.nextAction}</span>} />
			<ActivitiesViewDetailField label="Created by:" value={currentActivity.creator.name} />
			<ActivitiesViewDetailField label="Assigned to:" value={currentActivity.assignee.name} />

			<ReactMarkdown className="Description" source={currentActivity.description} childBefore={	<h3 className="ActivitiesViewDetailFieldName">Description:</h3>} />
		</div>
	)
};


const ActivityPage = ({ project }: ActivityPageProps) => (
	<div className='ActivityPage'>
		<div className='Title'>
			<h1>{project.id}: {project.title}</h1>
		</div>
		<div className='ActivitiesView'>
			<div className='ActivitiesViewMaster'>
				{project.activities.map(ad => <ActivityMasterItem key={ad.id} project={project} activity={ad} />)}
			</div>
			<div className='ActivitiesViewDetail'>
				<ActivitiesViewDetail currentActivity={project.currentActivity} />
			</div>
		</div>
	</div>
);

export default ActivityPage;
