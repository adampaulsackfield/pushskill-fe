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
		background-color: ${({ theme }) => theme.colors.darkerBg};
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
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 30px;
		border-radius: 20px;
		width: 800px;
	}

	section div {
		width: 600px;
		display: flex;
		justify-content: center;
		align-items: center;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
		padding: 30px;
		background-color: ${({ theme }) => theme.colors.mainAccent};
	}

	section div img {
		width: 100px;
		border-radius: 50px;
	}

	section div span {
		background-color: ${({ theme }) => theme.colors.darkerBg};
		opacity: 0.3;
		width: 2px;
		height: 100px;
		transform: translateX(20px);
	}

	p {
		text-align: center;
	}

	ul {
		text-align: center;
		list-style: none;
	}

	.h3-title {
		color: yellow;
	}

	span {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.mainText};
		transition: all 0.4s ease;
		cursor: pointer;
	}

	span:hover {
		transform: scale(1.01);
	}

	li {
		height: 100%;
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
