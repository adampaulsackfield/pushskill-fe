import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Home from './components/Home';
import Signup from './components/Signup';
import Nav from './components/Nav';
import { Global } from './styles/Global';
import Partner from './components/Partner';

const theme = {
	colors: {
		mainBg: '#353535',
		darkerBg: '#222',
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
			<Nav />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/partner' element={<Partner />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
