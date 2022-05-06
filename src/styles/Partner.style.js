import styled from 'styled-components';

export const StyledPartner = styled.main`
	padding: 30px;
	width: 1000px;

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: ${({ theme }) => theme.colors.darkerBg};
		border-radius: ${({ theme }) => theme.borders.borderRadius};
		padding: 30px;
		height: 80vh;
	}

	section div {
		width: 900px;
		height: 500px;
		background-color: ${({ theme }) => theme.colors.mainAccent};
		margin-bottom: 20px;
		border-radius: ${({ theme }) => theme.borders.borderRadius};
		display: flex;
		justify-content: center;
		align-items: flex-end;
		padding: 20px;
	}

	input {
		border-radius: 6px;
		border: none;
		background-color: #eee;
	}

	input:active,
	input:focus {
		outline: none;
		background-color: #fff;
		transform: scale(1.1);
	}
`;
