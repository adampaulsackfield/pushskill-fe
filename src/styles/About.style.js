import styled from 'styled-components';

export const StyledAbout = styled.main`
	height: 100vh;
	width: 100%;
	padding: 30px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	section {
		background-color: ${({ theme }) => theme.colors.darkerBg};
		border-radius: ${({ theme }) => theme.borders.borderRadius};
		padding: 30px;
		width: 100%;
		height: 80vh;
		display: grid;
		justify-content: center;
		align-items: center;
		grid-template-rows: 1fr 3fr 3fr;
	}

	h1 {
		color: ${({ theme }) => theme.colors.mainAccent};
		font-size: 30px;
		margin-bottom: 10px;
		text-align: center;
	}

	div {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.mainAccent};
	}

	.social-links {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	section div p span {
		color: ${({ theme }) => theme.colors.mainAccent};
	}
`;
