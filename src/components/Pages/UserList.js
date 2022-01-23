import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{
			field: "user",
			headerName: "User",
			width: 200,
			renderCell: (params) => (
				<ListUser>
					<ListImage src={params.row.avatar} alt="" />
					{params.row.username}
				</ListUser>
			),
		},
		{ field: "email", headerName: "Email", width: 180 },
		{
			field: "status",
			headerName: "Status",
			width: 140,
		},
		{
			field: "transaction",
			headerName: "Transaction",
			width: 160,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => (
				<>
					<Link to={`/user/${params.row.id}`}>
						<Edit>Edit</Edit>
					</Link>
					<DeleteOutline
						style={{ color: "red", cursor: "pointer" }}
						onClick={() => handleDelete(params.row.id)}
					/>
				</>
			),
		},
	];

	return (
		<Container>
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[5]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</Container>
	);
}

const Container = styled.div`
	flex: 4;
`;

const ListUser = styled.div`
	display: flex;
	align-items: center;
`;

const ListImage = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 10px;
`;

const Edit = styled.button`
	border: none;
	border-radius: 10px;
	padding: 5px 10px;
	background: #3bb077;
	color: #fff;
	cursor: pointer;
	margin-right: 20px;
`;
