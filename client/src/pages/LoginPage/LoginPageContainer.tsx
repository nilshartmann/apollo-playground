import * as React from 'react';
import { gql, graphql, QueryProps } from 'react-apollo';

// https://github.com/apollographql/graphql-tag/issues/59
const UserQueryGql = require('./UserQuery.graphql');

import { UserQuery } from '../../query-schema';
import { User, OnUserSelectedCallback } from '../../types';


import LoginPage from './LoginPage';
import LoadingPage from '../LoadingPage';

type LoginPageContainerOwnProps = {
	onUserSelected: OnUserSelectedCallback
};

type LoginPageContainerProps = LoginPageContainerOwnProps & {
	data: QueryProps & UserQuery
}

const LoginPageContainer = ({ data, onUserSelected }: LoginPageContainerProps) => console.log('data', data) || data.loading ? <LoadingPage /> : <LoginPage onUserSelected={onUserSelected} users={data.users} />;

export default graphql<{}, LoginPageContainerOwnProps, LoginPageContainerProps>(UserQueryGql)(LoginPageContainer);
