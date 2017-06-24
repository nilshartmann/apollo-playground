import * as React from 'react';
import { gql, graphql, QueryProps } from 'react-apollo';

// https://github.com/apollographql/graphql-tag/issues/59
const ActivityGql = require('./Activity.graphql');

import { ActivityQuery, ActivityQueryVariables } from '../../query-schema';
import { RouteComponentProps } from 'react-router-dom';

import LoadingPage from '../LoadingPage';

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/13689
// https://medium.com/@iktakahiro/react-stateless-functional-component-with-typescript-ce5043466011

type ActivityPageOwnProps = {
	projectId: string
};

type ActivityPageProps = ActivityPageOwnProps & {
	data: QueryProps & ActivityQuery
}

// match.params.id

const ActivityPage: React.SFC<ActivityPageProps> = ({ data }) => console.log('data', data) || data.loading ? <LoadingPage /> : <div>hhh</div>;

export default graphql<{}, ActivityPageOwnProps, ActivityPageProps>(ActivityGql, {
	options: props =>  { console.log('props', props); return { variables: { projectId: props.projectId } }; }
	}
)(ActivityPage);
