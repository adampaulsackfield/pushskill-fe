import styled from 'styled-components';

export const StyledPartner = styled.main`
	padding: 30px;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	section {
		width: 80vw;
		height: 80%;
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
	}

	section div {
		width: 100%;
		margin-bottom: 20px;
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

	form {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	li {
		width: auto;
		margin: 10px 0;
		padding: 10px;
		border-radius: 6px;
	}

	ul {
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
	}

	.left {
		text-align: left;
		background-color: green;
		width: auto;
	}

	.right {
		text-align: right;
		background-color: blue;
		width: auto;
	}

	div h1 {
		text-align: center;
		height: 100%;
	}

	button {
		cursor: pointer;
		transition: all 0.3s ease;
		margin: 0;
		padding: 0;
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: rotate(45deg);
		font-size: 30px;
		transition: all 0.6s ease;
	}

	button:hover {
		background-color: ${({ theme }) => theme.colors.mainAccent};
		color: ${({ theme }) => theme.colors.mainText};
		transform: rotate(10deg);
	}
`;
