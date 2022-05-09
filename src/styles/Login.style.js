import styled from 'styled-components';

export const StyledLogin = styled.main`
	background-color: ${({ theme }) => theme.colors.mainBg};
	color: ${({ theme }) => theme.colors.mainText};
	width: 40vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 20px;
	background-color: #222;
	border-radius: 20px;
	padding: 30px;
	max-width: 1100px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	h2 {
		margin: 10px;
		margin-bottom: 20px;
		color: ${({ theme }) => theme.colors.mainAccent};
		font-size: 2rem;
	}

	button {
		margin: 30px 0;
	}

	a {
		width: 200px;
		height: 40px;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.mainText};
	}
`;
