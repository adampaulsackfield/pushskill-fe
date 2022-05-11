import styled from 'styled-components';

export const StyledPartner = styled.main`
	padding: 30px;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	section {
		width: 40vw;
		height: 80%;
		background-color: ${({ theme }) => theme.colors.mainAccent};
		border-radius: ${({ theme }) => theme.borders.borderRadius};
		display: grid;
		justify-content: center;
		align-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 8fr 1fr;
		padding: 30px;
		border-radius: ${({ theme }) => theme.borders.borderRadius};
		overflow: hidden;
	}

	h1 {
		text-align: center;
	}

	div {
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		padding-right: 60px;
		box-sizing: content-box;
	}

	form {
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	p {
		padding: 10px;
		margin: 5px 0;
		border-radius: 6px;
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

	button:active,
	button:focus {
		outline: none;
	}
`;
