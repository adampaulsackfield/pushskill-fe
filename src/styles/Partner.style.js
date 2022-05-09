import styled from 'styled-components';

export const StyledPartner = styled.main`
	padding: 30px;
	width: 100%;

	section {
		width: 100%;
		background-color: ${({ theme }) => theme.colors.mainAccent};
		border-radius: ${({ theme }) => theme.borders.borderRadius};
		display: grid;
		justify-content: center;
		align-items: center;
		text-align: center;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 8fr 1fr;
		padding: 40px;
		border-radius: ${({ theme }) => theme.borders.borderRadius};
		height: 100%;
	}

	section div {
		width: 100%;
		margin-bottom: 20px;
	}

	form,
	input {
		width: 100%;
	}

	div,
	ul {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		height: 100%;
		width: 100%;
	}

	li {
		width: 100%;
	}

	form {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	input {
		border-radius: 2px;
		border: none;
		background-color: #eee;
		padding: 5px;
	}

	input:active,
	input:focus {
		outline: none;
		background-color: #fff;
	}

	.left {
		text-align: left;
		color: green;
	}

	.right {
		text-align: right;
		color: blue;
	}

	div h1 {
		text-align: center;
		height: 100%;
	}

	button {
		background-color: ${({ theme }) => theme.colors.mainText};
		border: none;
		color: ${({ theme }) => theme.colors.mainAccent};
		border-radius: 2px;
		padding: 5px;
	}

	li div {
		background-color: white;
		width: 30px;
		height: 30px;
	}
`;
