import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins';
  overflow-x: hidden;
}

body {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.mainText};
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
}

form {
	width: 80%;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
}

input {
	margin: 10px;
	height: 40px;
	width: 90%;
	font-size: 1.2rem;
	padding-left: 10px;
	background-color: transparent;
	border: none;
	border-bottom: 1px solid gray;
	color: #fff;
	transition: all 0.3s ease;
}

input:active,
input:focus {
	border-bottom: 1px solid #fff;
	outline: none;
	transform: scale(1.01);
}

select {
	margin: 10px;
	height: 40px;
	width: 53%;
	border-radius: 5px;
	font-size: 1.2rem;
	padding-left: 10px;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.mainAccent};
	border: none;
	transition: all 0.3s ease;
	margin-bottom: 20px;
	text-align: center;
}

select:active,
select:focus {
	background-color: ${({ theme }) => theme.colors.mainAccent};
	color: ${({ theme }) => theme.colors.mainText};
	outline: none;
}

label {
	color: gray;
	margin-bottom: -15px;
}
`;
