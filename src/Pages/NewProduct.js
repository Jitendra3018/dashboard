import styled from "styled-components";

export default function NewProduct() {
	return (
		<Container>
			<h1>New Product</h1>
			<Form>
				<Item>
					<Label>Image</Label>
					<Input type="file" id="file" />
				</Item>
				<Item>
					<Label>Name</Label>
					<Input type="text" placeholder="Apple Airpods" />
				</Item>
				<Item>
					<Label>Stock</Label>
					<Input type="text" placeholder="123" />
				</Item>
				<Item>
					<Label>Active</Label>
					<Select name="active" id="active">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</Select>
				</Item>
				<Button>Create</Button>
			</Form>
		</Container>
	);
}

const Container = styled.div`
	flex: 4;
`;

const Form = styled.form`
	margin-top: 10px;
`;

const Item = styled.div`
	width: 250px;
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
`;

const Label = styled.label`
	color: gray;
	font-weight: 600;
	margin-bottom: 10px;
`;

const Input = styled.input`
	padding: 10px;
`;

const Select = styled.select`
	padding: 10px;
`;

const Button = styled.button`
	margin-top: 10px;
	padding: 7px 10px;
	border: none;
	border-radius: 10px;
	background-color: darkblue;
	color: white;
	font-weight: 600;
	cursor: pointer;
`;
