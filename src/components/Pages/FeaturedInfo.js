import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import styled from "styled-components";
import FeaturedInfoItem from "./FeaturedInfoItem";

function FeaturedInfo() {
	return (
		<Container>
			<FeaturedInfoItem
				title="Revenue"
				money="2,415"
				rate="-11.4"
				Icon={ArrowDownward}
				name="negative"
			/>
			<FeaturedInfoItem
				title="Sales"
				money="4,415"
				rate="-1.4"
				Icon={ArrowDownward}
				name="negative"
			/>
			<FeaturedInfoItem
				title="Cost"
				money="2,225"
				rate="+2.4"
				Icon={ArrowUpward}
				name="positive"
			/>
		</Container>
	);
}

export default FeaturedInfo;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
