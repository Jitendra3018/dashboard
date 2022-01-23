import styled from "styled-components";

export default function FeaturedInfoItem({
	title,
	money,
	rate,
	Icon,
	sub,
	name,
}) {
	return (
		<Item>
			<Title>{title}</Title>
			<MoneyContainer>
				<Money>$ {money}</Money>
				<MoneyRate>
					{rate} <Icon className={`icon ${name}`} />
				</MoneyRate>
			</MoneyContainer>
			<Sub>Compared to last month</Sub>
		</Item>
	);
}

const Item = styled.div`
	flex: 1;
	margin: 0px 20px;
	padding: 30px;
	border-radius: 10px;
	cursor: pointer;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Title = styled.span`
	font-size: 20px;
`;

const MoneyContainer = styled.div`
	margin: 10px 0px;
	display: flex;
	align-items: center;
`;

const Money = styled.span`
	font-size: 30px;
	font-weight: 600;
`;

const MoneyRate = styled.span`
	display: flex;
	align-items: center;
	margin-left: 20px;

	.icon {
		font-size: 14px;
		margin-left: 5px;
		color: green;
	}

	.icon.negative {
		color: red;
	}
`;

const Sub = styled.span`
	font-size: 15px;
	color: gray;
`;
