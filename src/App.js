import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Partner from './components/Partner';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import Client from './components/Socket/Client';
import Room from './components/Socket/Room';

// Context
import { SocketContext } from './context/SocketContext';
import { TokenContext } from './context/TokenContext';
import { UserContext } from './context/UserContext';
import { RoomsContext } from './context/RoomsContext';
import About from './components/About';

// Theme
import { ThemeProvider } from 'styled-components';
import { Global } from './styles/Global';

// Socket IO Client
import { io } from 'socket.io-client';
// const socket = io.connect('https://pushskill.herokuapp.com');
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

const jwtToken = localStorage.getItem('token');
const userIdLocal = localStorage.getItem('id');
const roomIdLocal = localStorage.getItem('roomId');

function App() {
	const [token, setToken] = useState('');
	const [user, setUser] = useState('');
	const [userId, setUserId] = useState('');
	const [rooms, setRooms] = useState([]);
	const [roomId, setRoomId] = useState('');

	useEffect(() => {
		if (jwtToken) {
			setToken(jwtToken);
		}
		if (userIdLocal) {
			setUserId(userIdLocal);
		}
		if (roomIdLocal) {
			setRoomId(roomIdLocal);
		}
	}, []);

	return (
		<SocketContext.Provider value={{ socket }}>
			<TokenContext.Provider value={{ token, setToken }}>
				<UserContext.Provider value={{ user, setUser, userId, setUserId }}>
					<RoomsContext.Provider value={{ rooms, setRooms, roomId }}>
						<ThemeProvider theme={theme}>
							<Global />
							<Nav />

							<Routes>
								<Route path='/' element={<LandingPage />} />
								<Route path='/home' element={<Home />} />
								{/* <Route path='/client' element={<Client />} />
								<Route path='/rooms/:room_name' element={<Room />} /> */}
								<Route path='/signup' element={<Signup />} />
								<Route path='/partner' element={<Partner />} />
								<Route path='/login' element={<Login />} />
								<Route path='/profile/:user_id' element={<Profile />} />
								<Route path='/about' element={<About />} />
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
