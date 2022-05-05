import styled from 'styled-components';

export const StyledSignup = styled.section`
	background-color: ${({ theme }) => theme.colors.mainBg};

	color: ${({ theme }) => theme.colors.mainText};
	margin: 0;
	padding: 0;
	width: 50vw;

	h2 {
		margin: 20px;
	}

	form {
		margin: 20px;
		width: 50%;
		display: flex;
		flex-direction: column;
	}
`;
