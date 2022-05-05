import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Room from './components/Socket/Room';
import Client from './components/Socket/Client';
import Signup from './components/Signup';
import Login from './components/Login';

import { Global } from './styles/Global';
import Partner from './components/Partner';
import { useState } from 'react';

// Socket IO Client
import { io } from 'socket.io-client';

// Context
import { SocketContext } from './context/SocketContext';
import { Route, Routes } from 'react-router-dom';
const socket = io.connect('http://localhost:9090');

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
	const [token, setToken] = useState('');
	return (
		<SocketContext.Provider value={{ socket }}>
			<ThemeProvider theme={theme}>
				<Global />
				<Nav />

				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/client' element={<Client />} />
					<Route path='/rooms/:room_name' element={<Room />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/partner' element={<Partner />} />
					<Route
						path='/login'
						element={<Login token={token} setToken={setToken} />}
					/>
				</Routes>
			</ThemeProvider>
		</SocketContext.Provider>
	);
}

export default App;
