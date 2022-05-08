import styled from 'styled-components';

export const StyledNav = styled.nav`
	position: fixed;
	bottom: 30px;
	top: 50%;
	left: 50%;
	transform: translate(-750px, -50%);
	background-color: ${({ theme }) => theme.colors.mainBg};
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 50px;
	padding: 10px;
	z-index: 1000;

	div {
		display: flex;
		flex-direction: column;
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
		background-color: ${({ theme }) => theme.colors.mainAccent};
	}

	a:active,
	a:focus {
		background-color: ${({ theme }) => theme.colors.mainAccent};
	}
`;
