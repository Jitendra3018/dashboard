import styled from "styled-components";

export default function NewUser() {
	return (
		<Container>
			<Title>New User</Title>
			<Form>
				<Item>
					<Label>Username</Label>
					<Input type="text" placeholder="John" />
				</Item>
				<Item>
					<Label>Full Name</Label>
					<Input type="text" placeholder="John Smith" />
				</Item>
				<Item>
					<Label>Email</Label>
					<Input type="email" placeholder="johnSmith85@gmail.com" />
				</Item>
				<Item>
					<Label>Password</Label>
					<Input type="password" placeholder="password" />
				</Item>
				<Item>
					<Label>Phone</Label>
					<Input type="text" placeholder="+1 234 5678" />
				</Item>
				<Item>
					<Label>Address</Label>
					<Input type="text" placeholder="New York | USA" />
				</Item>
				<Item>
					<Label>Gender</Label>
					<Gender>
						<GenderInput
							type="radio"
							name="gender"
							id="male"
							value="male"
						/>
						<GenderLabel for="male">Male</GenderLabel>
						<GenderInput
							type="radio"
							name="gender"
							id="female"
							value="female"
						/>
						<GenderLabel for="female">Female</GenderLabel>
						<GenderInput
							type="radio"
							name="gender"
							id="other"
							value="other"
						/>
						<GenderLabel for="other">Other</GenderLabel>
					</Gender>
				</Item>
				<Item>
					<Label>Active</Label>
					<Select name="active" id="active">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</Select>
				</Item>
			</Form>
			<Button>Create</Button>
		</Container>
	);
}

const Container = styled.div`
	flex: 4;
`;

const Title = styled.h1``;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Item = styled.div`
	width: 400px;
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	margin-right: 20px;
`;

const Label = styled.label`
	margin-bottom: 10px;
	font-size: 14px;
	font-weight: 600;
	color: rgb(151, 150, 150);
`;

const Input = styled.input`
	height: 20px;
	padding: 10px;
	border: 1px solid gray;
	border-radius: 5px;
	outline: none;
`;

const Gender = styled.div``;

const GenderLabel = styled.label`
	margin: 10px;
	font-size: 18px;
	color: #555;
`;

const GenderInput = styled.input`
	margin-top: 15px;
`;

const Select = styled.select`
	height: 40px;
	border-radius: 5px;
`;

const Button = styled.button`
	width: 200px;
	border: none;
	outline: none;
	background-color: darkblue;
	color: white;
	padding: 7px 10px;
	font-weight: 600;
	border-radius: 10px;
	margin-top: 30px;
	cursor: pointer;
`;
