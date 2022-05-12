import styled from 'styled-components';

export const StyledSignup = styled.main`
	background-color: ${({ theme }) => theme.colors.mainBg};
	color: ${({ theme }) => theme.colors.mainText};
	width: 80vw;
	margin: 0;
	padding-top: 20px;
	background-color: #222;
	border-radius: 20px;
	padding: 30px;
	max-width: 1300px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		margin: 10px;
		margin-bottom: 20px;
		color: ${({ theme }) => theme.colors.mainAccent};
		font-size: 2rem;
	}

	div {
		margin-top: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}

	form p {
		color: red;
		font-size: 0.75rem;
	}

	.avatar-label {
		margin-top: 10px;
		width: 87%;
		text-align: left;
	}
`;
