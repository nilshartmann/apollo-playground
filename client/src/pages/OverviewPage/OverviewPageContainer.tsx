import * as React from 'react';
import { gql, graphql, QueryProps } from 'react-apollo';

// https://github.com/apollographql/graphql-tag/issues/59
const OverviewQueryGql = require('./OverviewQuery.graphql');

import { ProjectOverviewQuery } from '../../query-schema';
import { RouteComponentProps } from 'react-router-dom';

import OverviewPage from './OverviewPage';
import LoadingPage from '../LoadingPage';

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/13689
// https://medium.com/@iktakahiro/react-stateless-functional-component-with-typescript-ce5043466011

type OverviewPageContainerProps = {
	data: QueryProps & ProjectOverviewQuery
}

const OverviewPageContainer = ({ data }: OverviewPageContainerProps) => data.loading ? <LoadingPage /> : <OverviewPage projects={data.projects} />

export default graphql<{}, {}, OverviewPageContainerProps>(OverviewQueryGql)(OverviewPageContainer);
