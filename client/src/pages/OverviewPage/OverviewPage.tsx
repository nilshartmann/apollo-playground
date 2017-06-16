import * as React from 'react';
import { gql, graphql } from 'react-apollo';

// https://github.com/apollographql/graphql-tag/issues/59
const ProjectOverviewQuery = require('./ProjectOverviewQuery.graphql');

import Overview from './Overview';
import LoadingPage from '../LoadingPage';

const OverviewPage = ({ data }: {data: any}) => console.log('data', data) || data.loading ? <LoadingPage /> : <Overview projects={data.projects} />

// const ProjectOverviewQuery = gql`query ProjectOverviewQuery {
//   projects {
//     key,
//     title,
//     owner {
//       name, id
//     },
//     activities {
//       state
//     },
//     latestActivity {
//       id, title
//     }
//   }
// }`;

export default graphql(ProjectOverviewQuery)(OverviewPage);
