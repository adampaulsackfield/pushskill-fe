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

	section .achievements {
		display: flex;
		flex-direction: column;
		padding: 20px;
		margin-left: 10px;
	}

	section .achievements img {
		width: 60px;
		background-color: ${({ theme }) => theme.colors.mainAccent};
		padding: 6px;
	}
`;
