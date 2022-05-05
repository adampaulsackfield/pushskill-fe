import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Home from './components/Home';
import Signup from './components/Signup';
import Nav from './components/Nav';
import { Global } from './styles/Global';

const theme = {
	colors: {
		mainBg: '#353535',
		darkderBg: '#222',
		mainAccent: '#ff7477',
		mainText: '#ebebeb',
	},
	borders: {
		borderRadius: '20px',
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Global />
			<Signup />
			<Nav />
			<Routes>
				<Route path='/home' element={<Home />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
