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
					<th><div className="Filter"><input type="text" placeholder="Filter" size={20}/><button><i className="material-icons">clear</i></button></div></th>
				</tr>
			</thead>
			<tbody>
				<tr>

					<td>Create GraphQL Talk</td>
					<td>Nils</td>
					<td>Write Sample</td>
					<td style={{ width: '20%'}}><div className="ProgressBar" style={{ height: '90%', display: 'flex' }}>
						<div className="created" style={{ width: '10%', 'textAlign': 'center' }}>1</div>
						<div className="in-progress"  style={{ width: '30%', 'textAlign': 'center' }}>2</div>
						<div className="finished" style={{ width: '60%', 'textAlign': 'center' }}>3</div>
					</div></td>
					{/*<td>3</td>*/}
				</tr>
				<tr>
					<td>Book trip to Barcelona</td>
					<td>Susi</td>
					<td colSpan={2}>Find good hostel</td>
					{/*<td>4</td>*/}
				</tr>
				<tr>
					<td>Clean house</td>
					<td>Klaus</td>
					<td colSpan={2}>Clean the bathroom</td>
					{/*<td>2</td>*/}
				</tr>

			</tbody>
		</table>

		<div className="RightAlign">
			<button>Add Project</button>
		</div>

	</div>
</PageLayout>;

export default Overview;
