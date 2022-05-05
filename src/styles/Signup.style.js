import styled from 'styled-components';

export const StyledSignup = styled.form`
	background-color: ${({ theme }) => theme.colors.mainBg};

	color: ${({ theme }) => theme.colors.mainText};
	width: 40vw;
	height: 300px;
	margin: 0;
	padding-top: 20px;

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
	}

	button {
		margin-top: 20px;
		width: 200px;
		height: 40px;
		border-radius: 10px;
	}
`;
