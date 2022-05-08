import styled from 'styled-components';
import bg from '../images/empty.jpg';

export const StyledLanding = styled.main`
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	height: 100vh;

	section {
		background-image: url(${bg});
		background-position: center;
		background-size: cover;
		border-radius: 20px;
		padding: 40px;
		width: 90vw;
		height: 80vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	#heading {
		text-align: center;
	}

	#heading span {
		color: ${({ theme }) => theme.colors.mainAccent};
	}

	#content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#content div {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 80px;
	}

	h1 {
		margin-bottom: 25px;
		font-size: 4rem;
		padding-right: 10px;
	}

	#accentHead {
		color: ${({ theme }) => theme.colors.mainAccent};
	}

	#signup-details {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		text-align: center;
		margin: 0;
	}

	#signup-details {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		transform: translateY(-40px);
	}

	#signup-details p span {
		color: ${({ theme }) => theme.colors.mainAccent};
	}

	h3 {
		font-size: 30px;
	}

	p {
		font-size: 22px;
		color: ${({ theme }) => theme.colors.mainText};
	}

	a {
		text-decoration: none;
	}

	a:visited {
		color: ${({ theme }) => theme.colors.mainText};
	}

	a:hover {
		color: ${({ theme }) => theme.colors.mainAccent};
	}

	button {
		background-color: ${({ theme }) => theme.colors.mainAccent};
		color: ${({ theme }) => theme.colors.mainText};
		border-radius: 8px;
		padding: 10px;
		font-size: 20px;
		border: none;
		width: 120px;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	button:hover {
		background-color: ${({ theme }) => theme.colors.mainText};
		color: ${({ theme }) => theme.colors.mainAccent};
		/* box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.5); */
	}
`;
