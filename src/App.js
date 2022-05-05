import { ThemeProvider } from 'styled-components';
import './App.css';

// Components
import Nav from './components/Nav';
import Home from './components/Home';
import Room from './components/Socket/Room';
import Client from './components/Socket/Client';

// Socket IO Client
import { io } from 'socket.io-client';

// Context
import { SocketContext } from './context/SocketContext';
import { Route, Routes } from 'react-router-dom';
const socket = io.connect('http://localhost:9090');

const theme = {
	colors: {
		mainBg: '#353535',
		mainAccent: '#ff7477',
		mainText: '#ebebeb',
	},
};

function App() {
	return (
		<SocketContext.Provider value={{ socket }}>
			<ThemeProvider theme={theme}>
				<div className='App'>
					<Nav></Nav>

					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/client' element={<Client />} />
						<Route path='/rooms/:room_name' element={<Room />} />
					</Routes>
				</div>
			</ThemeProvider>
		</SocketContext.Provider>
	);
}

export default App;
