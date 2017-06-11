import * as React from 'react';
import { gql, graphql } from 'react-apollo';

import Overview from './Overview';
import LoadingPage from '../LoadingPage';

const OverviewPage = ({ data }) => console.log('data', data) || data.loading ? <LoadingPage /> : <Overview projects={data.projects} />

const ProjectOverviewQuery = gql`query ProjectOverviewQuery {
  projects {
    key,
    title,
    owner {
      name, id
    },
    activities {
      state
    },
    latestActivity {
      id, title
    }
  }
}`;

export default graphql(ProjectOverviewQuery)(OverviewPage);
