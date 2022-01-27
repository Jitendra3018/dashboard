import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

function TopBar() {
	return (
		<Container>
			<Wrapper>
				<TopLeft>
					<Link to="/" className="link">
						<Logo>Admin</Logo>
					</Link>
				</TopLeft>
				<TopRight>
					<IconContainer>
						<NotificationsNone />
						<IconBadge>2</IconBadge>
					</IconContainer>
					<IconContainer>
						<Language />
					</IconContainer>
					<IconContainer>
						<Settings />
					</IconContainer>
					<Avatar
						src="https://pyxis.nymag.com/v1/imgs/8b4/fca/8824bcfb932e31d054912b8766de996d9a-Stephen-Curry.rhorizontal.w1100.jpg"
						alt="Stephen Curry"
					/>
				</TopRight>
			</Wrapper>
		</Container>
	);
}

export default TopBar;

const Container = styled.div`
	width: 100%;
	height: 50px;
	background-color: white;
	position: sticky;
	top: 0;
	z-index: 999;
	box-shadow: 0px 2px 25px 5px rgba(0, 0, 0, 0.25);
	padding: 10px 0px;
`;

const Wrapper = styled.div`
	height: 100%;
	padding: 0px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const TopLeft = styled.div`
	& > .link {
		text-decoration: none;
		color: inherit;
	}
`;

const Logo = styled.span`
	font-weight: bold;
	font-size: 30px;
	color: darkblue;
	cursor: pointer;
`;

const TopRight = styled.div`
	display: flex;
	align-items: center;
`;

const IconContainer = styled.div`
	position: relative;
	cursor: pointer;
	margin-right: 10px;
	color: #555;
`;

const IconBadge = styled.span`
	width: 15px;
	height: 15px;
	position: absolute;
	top: 0px;
	right: -3px;
	background-color: red;
	color: white;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 10px;
`;

const Avatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	cursor: pointer;
`;
