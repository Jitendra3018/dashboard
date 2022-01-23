import styled from "styled-components";
import { Visibility } from "@mui/icons-material";
import SmallWidgetItem from "./SmallWidgetItem";

export default function SmallWidget() {
	return (
		<Container>
			<Title>New Join Members</Title>
			<List>
				<SmallWidgetItem
					image="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
					name="Anna Keller"
					title="Software Engineer"
					Icon={Visibility}
				/>
				<SmallWidgetItem
					image="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
					name="Anna Keller"
					title="Software Engineer"
					Icon={Visibility}
				/>
				<SmallWidgetItem
					image="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
					name="Anna Keller"
					title="Software Engineer"
					Icon={Visibility}
				/>
				<SmallWidgetItem
					image="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
					name="Anna Keller"
					title="Software Engineer"
					Icon={Visibility}
				/>
				<SmallWidgetItem
					image="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
					name="Anna Keller"
					title="Software Engineer"
					Icon={Visibility}
				/>
			</List>
		</Container>
	);
}

const Container = styled.div`
	flex: 1;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	padding: 20px;
	margin-right: 20px;
`;

const Title = styled.span`
	font-size: 22px;
	font-weight: 600;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;
