import * as React from 'react';

import PageLayout from './../PageLayout';

const Overview = ({ username }) => console.log('OVERVIEW') || <PageLayout username={username}>
	<div className="Main">
		<table className="SelectableTable">
			<thead>
				<tr>
					<th>Project</th>
					<th>Owner</th>
					<th>Last Activity</th>
					<th>Open Activities</th>
				</tr>
			</thead>
			<tbody>
				<tr>

					<td>Create GraphQL Talk</td>
					<td>Nils</td>
					<td>Write Sample</td>
					<td>3</td>
				</tr>
				<tr>
					<td>Book trip to Barcelona</td>
					<td>Susi</td>
					<td>Find good hostel</td>
					<td>4</td>
				</tr>
				<tr>
					<td>Clean house</td>
					<td>Klaus</td>
					<td>Clean the bathroom</td>
					<td>2</td>
				</tr>

			</tbody>
		</table>

		<div className="RightAlign">
			<button>Add Project</button>
		</div>

	</div>
</PageLayout>;

export default Overview;
