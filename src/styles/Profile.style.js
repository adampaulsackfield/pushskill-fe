import styled from 'styled-components';

export const StyledProfile = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	text-align: center;

	section {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
		padding: 30px;
		background-color: ${({ theme }) => theme.colors.darkerBg};
		border-radius: 20px;
		margin: 30px 0;
		width: 80%;
		height: 75%;
		overflow: visible;
	}

	section h1 {
		font-size: 36px;
		position: relative;
		width: 100%;
		margin-top: -130px;
		text-align: center;
	}

	section h1::before {
		content: '';
		position: absolute;
		width: 25px;
		height: 25px;
		top: 50%;
		left: 50%;
		transform: translate(-140px, -50%);
		background-color: green;
		border-radius: 50px;
	}

	section .avatar {
		width: 150px;
		border-radius: 50%;
		position: relative;
		transform: translateY(-140px);
		background-color: ${({ theme }) => theme.colors.mainAccent};
		padding: 10px;
		border: 2px solid ${({ theme }) => theme.colors.darkerBg};
	}

	section div ul .achievement-img {
		border-radius: 50px;
		width: 60px;
	}

	div span {
		font-weight: bold;
	}

	section .achievements-container {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	section .add-achievements {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		width: 100%;
	}

	section .achievements ul {
		display: flex;
		flex-direction: row;
		gap: 10px;
		overflow: visible;
	}

	section .achievements img {
		width: 60px;
		background-color: ${({ theme }) => theme.colors.mainAccent};
		padding: 6px;
	}

	/* section .add-achievements {
		flex-direction: row;
		width: 100%;
		justify-content: center;
		align-items: center;
	} */

	section .add-achievement-img {
		border-radius: 50px;
	}

	@media screen and (max-width: 1300px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		font-size: 16px;

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
			height: 75%;
		}

		section h1 {
			font-size: 26px;
			margin-top: -120px;
		}

		section h1::before {
			width: 15px;
			height: 15px;
			transform: translate(-100px, -6px);
		}

		section .avatar {
			width: 100px;
			border-radius: 50%;
		}

		section div ul .achievement-img {
			border-radius: 50px;
			width: 40px;
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

		section .achievements .add-achievements {
			flex-direction: row;
			width: 100%;
			justify-content: center;
			align-items: center;
		}
	}
`;
