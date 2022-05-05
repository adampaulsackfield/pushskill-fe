import styled from 'styled-components';

export const StyledNav = styled.nav`
	position: fixed;
	bottom: 30px;
	left: 50%;
	transform: translateX(-50%);
	background-color: ${({ theme }) => theme.colors.mainBg};
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 50px;
	padding: 10px;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 15px;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #222;
		border-radius: 50%;
		width: 60px;
		height: 60px;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.mainText};
		transition: all 0.3s ease;
	}

	a:hover {
		background-color: ${({ theme }) => theme.colors.mainAccent};
	}
`;
