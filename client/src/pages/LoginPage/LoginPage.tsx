import * as React from 'react';

import { User, OnUserSelectedCallback } from '../../types';


type LoginPageProps = {
	users: User[]
	onUserSelected: OnUserSelectedCallback
}


const UserButton = ({ user, onUserSelected }: { user: User, onUserSelected: OnUserSelectedCallback }) => (
	<button
		style={{ fontSize: '1rem', fontWeight: 'bold', width: '90%', margin: '10px 10px 10px 0', padding: '20px' }}
		onClick={() => onUserSelected(user)}
	>{user.name}</button>
);

const LoginPage = ({ users, onUserSelected }: LoginPageProps) => (
	<div>
		<div style={{ marginBottom: '20px' }}>
			<h1 style={{ 'margin': 0 }}>Login</h1>
			<p style={{ 'margin': '0', fontWeight: 200 }}>(To "login", choose a user)</p>
		</div>
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			{users.map(u => <div style={{ width: '33%' }} key={u.id}><UserButton onUserSelected={onUserSelected} user={u} /></div>)}
		</div>
	</div>
);

export default LoginPage;
