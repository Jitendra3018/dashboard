import {
	CalendarToday,
	LocationSearching,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function User() {
	return (
		<Container>
			<TitleContainer>
				<Title>Edit User</Title>
				<Link to="/newUser">
					<AddButton>Create</AddButton>
				</Link>
			</TitleContainer>
			<UserContainer>
				<Show>
					<Top>
						<Img
							src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="User"
						/>
						<TopTitle>
							<Username>Anna Becker</Username>
							<UserTitle>Software Engineer</UserTitle>
						</TopTitle>
					</Top>
					<Bottom>
						<ShowTitle>Account Details</ShowTitle>
						<ShowInfo>
							<PermIdentity className="icon" />
							<InfoTitle>annabeck99</InfoTitle>
						</ShowInfo>
						<ShowInfo>
							<CalendarToday className="icon" />
							<InfoTitle>10.12.1999</InfoTitle>
						</ShowInfo>
						<ShowTitle>Contact Details</ShowTitle>
						<ShowInfo>
							<PhoneAndroid className="icon" />
							<InfoTitle>+1 234 567 89</InfoTitle>
						</ShowInfo>
						<ShowInfo>
							<MailOutline className="icon" />
							<InfoTitle>annabeck99@gmail.com</InfoTitle>
						</ShowInfo>
						<ShowInfo>
							<LocationSearching className="icon" />
							<InfoTitle>New York | USA</InfoTitle>
						</ShowInfo>
					</Bottom>
				</Show>
				<Update>
					<UpdateTitle>Edit</UpdateTitle>
					<Form>
						<Left>
							<Item>
								<Label>Username</Label>
								<Input type="text" placeholder="annabeck99" />
							</Item>
							<Item>
								<Label>Full Name</Label>
								<Input type="text" placeholder="Anna Becker" />
							</Item>
							<Item>
								<Label>Email</Label>
								<Input
									type="text"
									placeholder="annabeck99@gmail.com"
								/>
							</Item>
							<Item>
								<Label>Phone</Label>
								<Input
									type="text"
									placeholder="+1 234 567 89"
								/>
							</Item>
							<Item>
								<Label>Address</Label>
								<Input
									type="text"
									placeholder="New York | USA"
								/>
							</Item>
						</Left>
						<Right>
							<Upload>
								<UploadImg
									src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									alt="User"
								/>
								<UploadLabel htmlFor="file">
									<Publish className="uploadIcon" />
								</UploadLabel>
								<UploadInput type="file" id="file" />
							</Upload>
							<UpdateButton>Update</UpdateButton>
						</Right>
					</Form>
				</Update>
			</UserContainer>
		</Container>
	);
}

const Container = styled.div`
	flex: 4;
	padding: 20px;
`;

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.h1``;

const AddButton = styled.button`
	width: 80px;
	border: none;
	outline: none;
	padding: 5px;
	background-color: teal;
	border-radius: 5px;
	color: white;
	cursor: pointer;
	font-size: 16px;
`;

const UserContainer = styled.div`
	display: flex;
	margin-top: 20px;
`;

const Show = styled.div`
	flex: 1;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Top = styled.div`
	display: flex;
	align-items: center;
`;

const Img = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
`;

const TopTitle = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`;

const Username = styled.span`
	font-weight: 600;
`;

const UserTitle = styled.span`
	font-weight: 300;
`;

const Bottom = styled.div`
	margin-top: 20px;
`;

const ShowTitle = styled.div`
	font-size: 14px;
	font-weight: 600;
	color: rgb(175, 170, 170);
`;

const ShowInfo = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0px;
	color: #444;

	.icon {
		font-size: 16px;
	}
`;

const InfoTitle = styled.span`
	margin-left: 10px;
`;

const Update = styled(Show)`
	flex: 2;
	margin-left: 20px;
`;

const UpdateTitle = styled.div`
	font-size: 24px;
	font-weight: 600;
`;

const Form = styled.form`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;

const Left = styled.div``;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Item = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
`;

const UploadImg = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 10px;
	object-fit: cover;
	margin-right: 20px;
`;

const Label = styled.label`
	margin-bottom: 5px;
	font-size: 14px;
`;

const Input = styled.input`
	border: none;
	outline: none;
	width: 250px;
	height: 30px;
	border-bottom: 1px solid gray;
`;

const Upload = styled.div`
	display: flex;
	align-items: center;
`;

const UploadLabel = styled.label`
	.uploadIcon {
		cursor: pointer;
	}
`;

const UploadInput = styled.input`
	display: none;
`;

const UpdateButton = styled.button`
	border-radius: 5px;
	border: none;
	outline: none;
	padding: 5px;
	cursor: pointer;
	background-color: darkblue;
	color: white;
	font-weight: 600;
`;
