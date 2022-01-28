import styled from "styled-components";
import Home from "./Pages/Home";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Pages/UserList";
import User from "./Pages/User";
import NewUser from "./Pages/NewUser";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import NewProduct from "./Pages/NewProduct";

function App() {
	return (
		<Router>
			<TopBar />
			<Container>
				<SideBar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/users" element={<UserList />} />
					<Route path="/user/:userId" element={<User />} />
					<Route path="/newUser" element={<NewUser />} />
					<Route path="/products" element={<ProductList />} />
					<Route path="/product/:productId" element={<Product />} />
					<Route path="/newProduct" element={<NewProduct />} />
				</Routes>
			</Container>
		</Router>
	);
}

export default App;

const Container = styled.div`
	display: flex;
	margin-top: 10px;
`;
