import styled from "styled-components";
import { userData } from "../data";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import LargeWidget from "../components/LargeWidgets";
import SmallWidget from "../components/SmallWidget";

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
