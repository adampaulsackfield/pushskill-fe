import styled from 'styled-components';

export const StyledLanding = styled.main`
	padding: 20px;
	margin: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-radius: 20px;

	#heading {
		display: flex;
		flex-direction: row;
	}

	#container {
		background-color: ${({ theme }) => theme.colors.darkerBg};
		border-radius: 20px;
		padding: 40px;
		width: 90vw;
		height: 80vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#content {
		display: flex;
		width: 100%;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-around;
	}

	h1 {
		margin-bottom: 25px;
		font-size: 4rem;
		padding-right: 10px;
	}

	#accentHead {
		color: ${({ theme }) => theme.colors.mainAccent};
	}

	img {
		min-height: 450px;
		max-height: 600px;
		max-width: 600px;
		margin-bottom: 40px;
		border-radius: 50%;
	}

	p {
		width: 45%;
		margin-left: 40px;
		font-size: 2rem;
		color: ${({ theme }) => theme.colors.mainText};
	}
	a {
		text-decoration: none;
	}
	a:visited {
		color: ${({ theme }) => theme.colors.mainText};
	}
`;
