import styled from 'styled-components';

export const StyledProfile = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;

	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 30px;
		background-color: ${({ theme }) => theme.colors.darkerBg};
		border-radius: 20px;
		margin: 30px 0;
		width: 800px;
		height: 450px;
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
`;
