import React from "react";
import me2 from "../../assets/me2.png";

const Users = () => {
	const arr = [1, 2, 3, 4, 5];
	return (
		<section className="tableClass">
			<main>
				<table>
					<thead>
						<tr>
							<th>User Id</th>
							<th>Name</th>
							<th>Photo</th>
							<th>Role</th>
							<th>Since</th>
						</tr>
					</thead>
					<tbody>
						{arr.map((i) => (
							<tr key={i}>
								<td>#qwqw</td>
								<td>Sid</td>
								<td>
									<img src={me2} alt="Users" />
								</td>
								<td>Admin</td>
								<td>{"30-04-2023"}</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		</section>
	);
};

export default Users;
