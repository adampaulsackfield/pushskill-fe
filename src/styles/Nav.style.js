import styled from 'styled-components';

export const StyledNav = styled.nav`
	position: fixed;
	bottom: 30px;
	left: 50%;
	transform: translateX(-50%);
	background-color: ${({ theme }) => theme.colors.mainBg};
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 50px;
	padding: 10px;
	z-index: 1000;
	opacity: 0.6;

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
		background-color: ${({ theme }) => theme.colors.darkerBg};
		border-radius: 50%;
		width: 40px;
		height: 40px;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.mainText};
		transition: all 0.3s ease;
		font-size: 28px;
	}

	a:hover {
		background-color: #000;
	}

	a:active,
	a:focus {
		background-color: ${({ theme }) => theme.colors.mainAccent};
	}
`;
