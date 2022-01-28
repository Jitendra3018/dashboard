import { Link } from "react-router-dom";
import styled from "styled-components";
import Chart from "../components/Chart";
import { productData } from "../data";
import { Publish } from "@mui/icons-material";

export default function Product() {
	return (
		<Container>
			<TitleContainer>
				<Title>Product</Title>
				<Link to="/newProduct">
					<Add>Create</Add>
				</Link>
			</TitleContainer>
			<Top>
				<Left>
					<Chart
						data={productData}
						dataKey="Sales"
						title="Sales Performance"
						grid
					/>
				</Left>
				<Right>
					<InfoTop>
						<Image
							src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="Product"
						/>
						<Name>Apple Airpods</Name>
					</InfoTop>
					<InfoBottom>
						<InfoItem>
							<InfoKey>id:</InfoKey>
							<InfoValue>123</InfoValue>
						</InfoItem>
						<InfoItem>
							<InfoKey>sales:</InfoKey>
							<InfoValue>5123</InfoValue>
						</InfoItem>
						<InfoItem>
							<InfoKey>active:</InfoKey>
							<InfoValue>yes</InfoValue>
						</InfoItem>
						<InfoItem>
							<InfoKey>in stock:</InfoKey>
							<InfoValue>no</InfoValue>
						</InfoItem>
					</InfoBottom>
				</Right>
			</Top>
			<Bottom>
				<Form>
					<FormLeft>
						<Label>Product Name</Label>
						<Input type="text" placeholder="Apple Airpods" />
						<Label>In Stock</Label>
						<Select name="inStock" id="idStock">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</Select>
						<Label>Active</Label>
						<Select name="active" id="active">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</Select>
					</FormLeft>
					<FormRight>
						<Upload>
							<UploadImage
								src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								alt="Upload"
							/>
							<label for="file">
								<Publish />
							</label>
							<input
								type="file"
								id="file"
								style={{ display: "none" }}
							/>
						</Upload>
						<Button>Update</Button>
					</FormRight>
				</Form>
			</Bottom>
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

const Add = styled.button`
	width: 80px;
	border: none;
	outline: none;
	padding: 5px;
	background-color: teal;
	color: #fff;
	border-radius: 5px;
	font-size: 16px;
	cursor: pointer;
`;

const Top = styled.div`
	display: flex;
`;

const Left = styled.div`
	flex: 1;
`;

const Right = styled(Left)`
	padding: 20px;
	margin: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const InfoTop = styled.div`
	display: flex;
	align-items: center;
`;

const Image = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 20px;
`;

const Name = styled.span`
	font-weight: 600;
`;

const InfoBottom = styled.div`
	margin-top: 10px;
`;

const InfoItem = styled.div`
	width: 150px;
	display: flex;
	justify-content: space-between;
`;

const InfoKey = styled.span``;

const InfoValue = styled.span`
	font-weight: 300;
`;

const Bottom = styled(Right)``;

const Form = styled.form`
	display: flex;
	justify-content: space-between;
`;

const FormLeft = styled.div`
	display: flex;
	flex-direction: column;
`;

const Label = styled.label`
	margin-bottom: 10px;
	color: gray;
`;

const Input = styled.input`
	margin-bottom: 10px;
	border: none;
	padding: 5px;
	border-bottom: 1px solid gray;
`;

const Select = styled.select`
	margin-bottom: 10px;
`;

const FormRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const Upload = styled.div`
	display: flex;
	align-items: center;
`;

const UploadImage = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 10px;
	object-fit: cover;
	margin-right: 20px;
`;

const Button = styled.button`
	border: none;
	padding: 5px;
	border-radius: 5px;
	outline: none;
	background-color: darkblue;
	color: white;
	font-weight: bold;
	cursor: pointer;
`;
