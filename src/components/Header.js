import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 1em;
`;

const StyledList = styled.ul`
	display: flex;
`;

const StyledListItem = styled.li`
	margin-left: 1em;
`;

const Header = () => {
	return (
		<StyledHeader>
			<h1>Cat Or Not</h1>
			<nav>
				<StyledList>
					<StyledListItem>
						<NavLink to='/'>Home</NavLink>
					</StyledListItem>
					<StyledListItem>
						<NavLink to='/about'>About</NavLink>
					</StyledListItem>
				</StyledList>
			</nav>
		</StyledHeader>
	);
};

export default Header;
