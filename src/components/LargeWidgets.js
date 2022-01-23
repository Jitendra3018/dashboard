import styled from "styled-components";
import LargeWidgetItem from "./LargeWidgetItem";

export default function LargeWidget() {
	return (
		<Container>
			<Title>Latest Transactions</Title>
			<Table>
				<tr>
					<Heading>Customer</Heading>
					<Heading>Date</Heading>
					<Heading>Amount</Heading>
					<Heading>Status</Heading>
				</tr>
				<tr>
					<LargeWidgetItem
						image="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						name="Susan Carol"
						date="24 Jan 2022"
						amount="122.00"
						status="Approved"
					/>
				</tr>
				<tr>
					<LargeWidgetItem
						image="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						name="Susan Carol"
						date="24 Jan 2022"
						amount="122.00"
						status="Declined"
					/>
				</tr>
				<tr>
					<LargeWidgetItem
						image="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						name="Susan Carol"
						date="24 Jan 2022"
						amount="122.00"
						status="Pending"
					/>
				</tr>
				<tr>
					<LargeWidgetItem
						image="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						name="Susan Carol"
						date="24 Jan 2022"
						amount="122.00"
						status="Approved"
					/>
				</tr>
			</Table>
		</Container>
	);
}

const Container = styled.div`
	flex: 2;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	padding: 20px;
`;

const Title = styled.h3`
	font-size: 22px;
	font-weight: 600;
`;

const Table = styled.table`
	width: 100%;
	border-spacing: 20px;
`;

const Heading = styled.th`
	text-align: left;
`;
