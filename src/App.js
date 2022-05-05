import { ThemeProvider } from 'styled-components';
import './App.css';
import Nav from './components/Nav';

const theme = {
	colors: {
		mainBg: '#353535',
		mainAccent: '#ff7477',
		mainText: '#ebebeb',
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Nav></Nav>
			</div>
		</ThemeProvider>
	);
}

export default App;
