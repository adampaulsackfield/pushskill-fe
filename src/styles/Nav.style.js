import styled from 'styled-components';

export const StyledNav = styled.nav`
	position: fixed;
	bottom: 30px;
	left: 50%;
	transform: translateX(-50%);
	background-color: ${({ theme }) => theme.colors.mainBg};
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 50px;
	padding: 10px;
	z-index: 999;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 15px;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${({ theme }) => theme.colors.darkerBg};
		border-radius: 50%;
		overflow: visible;
		width: 40px;
		height: 40px;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.mainText};
		transition: all 0.3s ease;
		font-size: 28px;
	}

	a:hover {
		background-color: ${({ theme }) => theme.colors.mainAccent};
	}

	a:active,
	a:focus {
		background-color: ${({ theme }) => theme.colors.mainAccent};
	}

	.badge {
		position: relative;
	}

	.badge[data-count]::after {
		content: attr(data-count);
		position: absolute;
		top: 0;
		right: 0;
		background: green;
		color: white;
		font-size: 0.75rem;
		width: 18px;
		height: 18px;
		text-align: center;
		line-height: 18px;
		border-radius: 50%;
		box-shadow: 0 0 1px #333;
		z-index: 1000;
	}
`;
