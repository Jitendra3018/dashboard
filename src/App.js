import styled from "styled-components";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

function App() {
	return (
		<div>
			<TopBar />
			<Container>
				<SideBar />
			</Container>
		</div>
	);
}

export default App;

const Container = styled.div`
	display: flex;
`;
