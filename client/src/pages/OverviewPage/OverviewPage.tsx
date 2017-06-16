import * as React from 'react';
import { gql, graphql, QueryProps } from 'react-apollo';

// https://github.com/apollographql/graphql-tag/issues/59
const ProjectOverviewGql = require('./ProjectOverviewQuery.graphql');

import { ProjectOverviewQuery } from '../../query-schema';
import { RouteComponentProps } from 'react-router-dom';

import Overview from './Overview';
import LoadingPage from '../LoadingPage';

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/13689
// https://medium.com/@iktakahiro/react-stateless-functional-component-with-typescript-ce5043466011

interface OverviewPageProps extends RouteComponentProps<any>  {
	data: QueryProps & ProjectOverviewQuery
}

const OverviewPage: React.SFC<OverviewPageProps> = ({data}) => console.log('data', data) || data.loading ? <LoadingPage /> : <Overview projects={data.projects} />

export default graphql<{}, OverviewPageProps>(ProjectOverviewGql)(OverviewPage);
