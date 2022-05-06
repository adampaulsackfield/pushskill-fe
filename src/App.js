import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Room from './components/Socket/Room';
import Client from './components/Socket/Client';
import Signup from './components/Signup';
import { Profile } from './components/Profile';
import Login from './components/Login';
import { Global } from './styles/Global';
import Partner from './components/Partner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Socket IO Client
import { io } from 'socket.io-client';

// Context
import { SocketContext } from './context/SocketContext';

import { TokenContext } from './context/TokenContext';


import { UserContext } from './context/UserContext';

import { RoomsContext } from './context/RoomsContext';


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
	const [user, setUser] = useState('');
  const [rooms, setRooms] = useState([]);
  
	return (
		<SocketContext.Provider value={{ socket }}>
			<UserContext.Provider value={{ user, setUser }}>
				<TokenContext.Provider value={{ token, setToken }}>
					<ThemeProvider theme={theme}>
						<Global />
						<Nav />




	return (
		<SocketContext.Provider value={{ socket }}>
			<TokenContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
				<RoomsContext.Provider value={{ rooms, setRooms }}>
					<ThemeProvider theme={theme}>
						<Global />
						<Nav />

						<Routes>
							<Route path='/home' element={<Home />} />
							<Route path='/client' element={<Client />} />
							<Route path='/rooms/:room_name' element={<Room />} />
							<Route path='/signup' element={<Signup />} />
							<Route path='/partner' element={<Partner />} />
							<Route path='/login' element={<Login />} />
							<Route path='/profile/:user_id' element={<Profile />} />
						</Routes>
						<ToastContainer position='top-center' />
					</ThemeProvider>
				</RoomsContext.Provider>
		    </UserContext.Provider>
			</TokenContext.Provider>

		</SocketContext.Provider>
	);
}

export default App;
