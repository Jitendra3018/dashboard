import styled from "styled-components";

export default function LargeWidgetItem({ image, name, date, amount, status }) {
	const Button = ({ type }) => {
		return <ButtonWidget className={type}>{type}</ButtonWidget>;
	};

	return (
		<>
			<User>
				<Img src={image} alt="User" />
				<Name>{name}</Name>
			</User>
			<Date>{date}</Date>
			<Amount>$ {amount}</Amount>
			<td>
				<Button type={status} />
			</td>
		</>
	);
}

const User = styled.td`
	display: flex;
	align-items: center;
	font-weight: 600;
`;

const Img = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 10px;
`;

const Name = styled.span``;

const Date = styled.td`
	font-weight: 300;
`;

const Amount = styled(Date)``;

const ButtonWidget = styled.button`
	padding: 5px 7px;
	border: none;
	border-radius: 10px;
	outline: none;
	cursor: pointer;

	&.Approved {
		background-color: #e5faf2;
		color: #3bb077;
	}

	&.Declined {
		background-color: #fff0f1;
		color: #d95087;
	}

	&.Pending {
		background-color: #ebf1fe;
		color: #2a7ade;
	}
`;
