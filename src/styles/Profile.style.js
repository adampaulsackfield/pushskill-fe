import styled from 'styled-components';

export const StyledProfile = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;

	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		padding: 30px;
		background-color: ${({ theme }) => theme.colors.darkerBg};
		border-radius: 20px;
		margin: 30px 0;
		width: 80%;
		height: 70%;
		overflow: visible;
	}

	section h1 {
		font-size: 36px;
	}

	section img {
		width: 150px;
		border-radius: 50%;
		z-index: 1000;
		position: relative;
		top: -100px;
		margin-bottom: -140px;
		background-color: ${({ theme }) => theme.colors.mainAccent};
		padding: 10px;
		border: 2px solid ${({ theme }) => theme.colors.darkerBg};
	}

	div span {
		font-weight: bold;
	}

	section .achievements-container {
		width: 50%;
	}

	section .achievements div ul li {
		width: 300px;
		height: 150px;
	}

	section .achievements {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 20px;
		gap: 10px;
		height: 150px;
		overflow: visible;
	}

	section .achievements img {
		width: 60px;
		background-color: ${({ theme }) => theme.colors.mainAccent};
		padding: 6px;
	}

	section .add-achievements {
		flex-direction: row;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	@media screen and (max-width: 1300px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;

		section {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 30px;
			background-color: ${({ theme }) => theme.colors.darkerBg};
			border-radius: 20px;
			margin: 30px 0;
			width: 80%;
			height: 70%;
		}

		section div img {
			width: 250px;
			border-radius: 50%;
		}

		section .card-details {
			display: flex;
			flex-direction: column;
			padding: 10px;
		}

		div span {
			font-weight: bold;
		}

		section .achievements-container {
			width: 50%;
		}

		section .achievements {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 20px;
			gap: 10px;
			overflow: visible;
		}

		section .achievements img {
			width: 60px;
			background-color: ${({ theme }) => theme.colors.mainAccent};
			padding: 6px;
		}

		section .add-achievements {
			flex-direction: row;
			width: 100%;
			justify-content: center;
			align-items: center;
		}
	}
`;
