import * as React from 'react';
import { gql, graphql } from 'react-apollo';

import Overview from './Overview';
import LoadingPage from '../LoadingPage';

class OverviewPage extends React.Component {
	render() {
		console.log('props', this.props);
		return <Overview username="Klaus Dieter" />
	}
}

const UserByIdQuery = gql`query {user(id: "U1") {name}}`;

export default graphql(UserByIdQuery)(OverviewPage);
