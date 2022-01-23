import styled from "styled-components";
import { userData } from "../../data";
import Chart from "../Chart";
import FeaturedInfo from "../FeaturedInfo";
import LargeWidget from "../LargeWidgets";
import SmallWidget from "../SmallWidget";

function Home() {
	return (
		<Container>
			<FeaturedInfo />
			<Chart
				data={userData}
				title="User Analytics"
				dataKey="Active User"
				grid
			/>
			<Widgets>
				<SmallWidget />
				<LargeWidget />
			</Widgets>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	flex: 4;
`;

const Widgets = styled.div`
	display: flex;
	margin: 20px;
`;
