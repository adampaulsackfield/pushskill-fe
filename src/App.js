import { ThemeProvider } from 'styled-components';
import './App.css';
import Home from './components/Home';
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
			<Home />
		</ThemeProvider>
	);
}

export default App;
