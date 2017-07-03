import * as React from 'react';
import { gql, graphql, QueryProps } from 'react-apollo';

// https://github.com/apollographql/graphql-tag/issues/59
const ActivityQueryGql = require('./ActivityQuery.graphql');

import { ActivityQuery, ActivityQueryVariables } from '../../query-schema';

import ActivityPage from './ActivityPage';
import LoadingPage from '../LoadingPage';

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/13689
// https://medium.com/@iktakahiro/react-stateless-functional-component-with-typescript-ce5043466011



type ActivityPageContainerOwnProps = {
	projectId: string,
	activityId: string
};

type ActivityPageContainerProps = ActivityPageContainerOwnProps & {
	data: QueryProps & ActivityQuery
}

// match.params.id

const ActivityPageContainer = ({ data }: ActivityPageContainerProps) => console.log('data', data) || data.loading ? <LoadingPage /> : <ActivityPage project={data.project} />;

export default graphql<{}, ActivityPageContainerOwnProps, ActivityPageContainerProps>(ActivityQueryGql, {
	options: props =>  ({ variables: { projectId: props.projectId, currentActivityId: props.activityId } })
	}
)(ActivityPageContainer);
