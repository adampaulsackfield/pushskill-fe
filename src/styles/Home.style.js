import styled from 'styled-components';

export const StyledHome = styled.main`
	padding: 20px;
	margin: 20px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80vw;

	div {
		background-color: ${({ theme }) => theme.colors.darkerBg};
		border-radius: 20px;
		padding: 60px;
		/* max-width: 1100px; */
		width: 1000px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
		flex-direction: column;
		justify-content: center;
		align-items: center;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
		padding: 30px;
		background-color: ${({ theme }) => theme.colors.mainBg};
	}

	section div:hover {
		background-color: ${({ theme }) => theme.colors.mainAccent};
		font-weight: bold;
	}

	section div:hover > div {
		background-color: ${({ theme }) => theme.colors.mainAccent};
		font-weight: bold;
	}

	section div img {
		width: 100px;
		border-radius: 50px;
	}

	section div div {
		position: relative;
	}

	section div div::before {
		content: '';
		position: absolute;
		width: 200px;
		height: 2px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -60px);
		background-color: black;
		opacity: 0.2;
	}

	section div span {
		content: '';
		position: relative;
		top: 50%;
		left: 50%;
		background-color: ${({ theme }) => theme.colors.darkerBg};
		opacity: 0.3;
		width: 200px;
		height: 2px;
		transform: translate(-50%, -50%);
	}

	p {
		text-align: center;
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

	ul {
		overflow: hidden;
	}

	ul > li {
		background: white;
		margin: 2px;
		padding: 2px 4px;
		border-radius: 6px;
		display: inline;
		color: ${({ theme }) => theme.colors.mainAccent};
	}

	@media screen and (max-width: 1300px) {
		font-size: 16px;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;

		h1 {
			font-size: 26px;
			text-align: center;
		}

		div h3 {
			text-align: center;
		}

		div {
			width: 100vw;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		section {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 600px;
		}

		section div {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 400px;
		}

		section span {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		div ul section {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;
