import styled from 'styled-components';

export const StyledHome = styled.main`
	padding: 20px;
	margin: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 1100px;
	height: 100%;
	border-radius: 20px;

	div {
		background-color: #222;
		border-radius: 20px;
		padding: 60px;
		max-width: 1100px;
	}

	header h1 {
		text-align: center;
		margin-bottom: 50px;
	}

	h3 {
		text-align: center;
		margin-bottom: 20px;
	}

	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 30px;
		background-color: ${({ theme }) => theme.colors.mainAccent};
		border-radius: 20px;
		margin: 30px 0;
		width: 800px;
	}

	section div {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 30px;
		padding: 30px;
		background-color: ${({ theme }) => theme.colors.mainAccent};
	}

	section div img {
		width: 200px;
		border-radius: 20px;
	}

	.h3-title {
		color: yellow;
	}

	@media screen and (max-width: 1000px) {
		font-size: 16px;
		display: flex;
		flex-wrap: wrap;

		h1 {
			font-size: 26px;
		}

		div h3 {
			text-align: center;
		}

		div {
			width: 600px;
			display: flex;
			flex-wrap: wrap;
		}

		section {
			display: flex;
			flex-wrap: wrap;
			width: 600px;
		}
	}
`;
