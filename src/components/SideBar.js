import styled from "styled-components";
import SideBarMenu from "./SideBarMenu";
import {
	AttachMoney,
	BarChart,
	ChatBubbleOutline,
	DynamicFeed,
	LineStyle,
	MailOutline,
	PermIdentity,
	Report,
	Storefront,
	Timeline,
	TrendingUp,
	WorkOutline,
} from "@mui/icons-material";

function SideBar() {
	return (
		<Container>
			<Wrapper>
				<SideBarMenu
					title="Dashboard"
					Icon1={LineStyle}
					Icon2={Timeline}
					Icon3={TrendingUp}
					item1="Home"
					item2="Analytics"
					item3="Sales"
					active="active"
				/>
				<SideBarMenu
					title="Quick Menu"
					Icon1={PermIdentity}
					Icon2={Storefront}
					Icon3={AttachMoney}
					Icon4={BarChart}
					item1="Users"
					item2="Products"
					item3="Transactions"
					item4="Reports"
				/>
				<SideBarMenu
					title="Notifications"
					Icon1={MailOutline}
					Icon2={DynamicFeed}
					Icon3={ChatBubbleOutline}
					item1="Mail"
					item2="Feedback"
					item3="Messages"
				/>
				<SideBarMenu
					title="Staff"
					Icon1={WorkOutline}
					Icon2={Timeline}
					Icon3={Report}
					item1="Manage"
					item2="Analytics"
					item3="Reports"
				/>
			</Wrapper>
		</Container>
	);
}

export default SideBar;

const Container = styled.div`
	flex: 1;
	height: calc(100vh-50px);
	position: sticky;
	top: 50px;
	background-color: rgb(251, 251, 255);
`;

const Wrapper = styled.div`
	padding: 20px;
	color: #555;
`;
