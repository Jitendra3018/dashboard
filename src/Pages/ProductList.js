import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
	const [data, setData] = useState(productRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{
			field: "product",
			headerName: "product",
			width: 200,
			renderCell: (params) => (
				<ListProduct>
					<ListImage src={params.row.img} alt="" />
					{params.row.name}
				</ListProduct>
			),
		},
		{ field: "stock", headerName: "Stock", width: 180 },
		{
			field: "status",
			headerName: "Status",
			width: 140,
		},
		{
			field: "price",
			headerName: "Price",
			width: 160,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => (
				<>
					<Link to={`/product/${params.row.id}`}>
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

const Edit = styled.button`
	border: none;
	border-radius: 10px;
	padding: 5px 10px;
	background: #3bb077;
	color: #fff;
	cursor: pointer;
	margin-right: 20px;
`;

const ListProduct = styled.div`
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
