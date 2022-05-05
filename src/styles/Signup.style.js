import styled from 'styled-components';

export const StyledSignup = styled.main`
	background-color: ${({ theme }) => theme.colors.mainBg};

	color: ${({ theme }) => theme.colors.mainText};
	width: 40vw;
	margin: 0;
	padding-top: 20px;
	background-color: #222;
	border-radius: 20px;
	padding: 40px;
	max-width: 1100px;

	h2 {
		margin: 10px;
		margin-bottom: 20px;
		color: ${({ theme }) => theme.colors.mainAccent};
		font-size: 2rem;
	}

	form {
		width: 80%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	input {
		margin: 10px;
		height: 40px;
		width: 90%;
		border-radius: 5px;
		font-size: 1.2rem;
		padding-left: 10px;
	}

	button {
		margin-top: 20px;
		width: 200px;
		height: 40px;
		border: 0px;
		border-radius: 10px;
		background-color: ${({ theme }) => theme.colors.mainAccent};
		color: ${({ theme }) => theme.colors.mainText};
		font-size: 1.2rem;
	}
`;
