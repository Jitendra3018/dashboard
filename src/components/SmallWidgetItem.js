import styled from "styled-components";

export default function SmallWidgetItem({ Icon, image, name, title }) {
	return (
		<ListItem>
			<Img src={image} />
			<User>
				<Username>{name}</Username>
				<UserTitle>{title}</UserTitle>
			</User>
			<Button>
				<Icon className="icon" />
				Display
			</Button>
		</ListItem>
	);
}

const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 20px 0px;
`;

const Img = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
`;

const User = styled.div`
	display: flex;
	flex-direction: column;
`;

const Username = styled.span`
	font-weight: 600;
`;

const UserTitle = styled.span`
	font-weight: 300;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	border: none;
	border-radius: 10px;
	outline: none;
	padding: 7px 10px;
	background-color: #eeeef7;
	color: #555;
	cursor: pointer;

	.icon {
		font-size: 16px;
		margin-right: 5px;
	}
`;
