import styled from "styled-components";

function SideBarMenu({
	title,
	Icon1,
	Icon2,
	Icon3,
	Icon4,
	item1,
	item2,
	item3,
	item4,
	active,
}) {
	return Icon4 ? (
		<>
			<Menu>
				<Title>{title}</Title>
				<List>
					<ListItem className={active}>
						<Icon1 className="icon" />
						{item1}
					</ListItem>
					<ListItem>
						<Icon2 className="icon" />
						{item2}
					</ListItem>
					<ListItem>
						<Icon3 className="icon" />
						{item3}
					</ListItem>
					<ListItem>
						<Icon4 className="icon" />
						{item4}
					</ListItem>
				</List>
			</Menu>
		</>
	) : (
		<>
			<Menu>
				<Title>{title}</Title>
				<List>
					<ListItem className={active}>
						<Icon1 className="icon" />
						{item1}
					</ListItem>
					<ListItem>
						<Icon2 className="icon" />
						{item2}
					</ListItem>
					<ListItem>
						<Icon3 className="icon" />
						{item3}
					</ListItem>
				</List>
			</Menu>
		</>
	);
}

export default SideBarMenu;

const Menu = styled.div`
	margin-bottom: 10px;
`;

const Title = styled.h3`
	font-size: 13px;
	color: rgb(187, 187, 187);
`;

const List = styled.ul`
	list-style: none;
	padding: 5px;
`;

const ListItem = styled.li`
	padding: 5px;
	cursor: pointer;
	display: flex;
	align-items: center;
	border-radius: 10px;

	&.active,
	&:hover {
		background-color: rgb(240, 240, 255);
	}

	.icon {
		margin-right: 5px;
		font-size: 20px !important;
	}
`;
