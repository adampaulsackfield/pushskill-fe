import { ThemeProvider } from 'styled-components';
import './App.css';
import Signup from './components/Signup';

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
			{/* <Global /> */}
			<Signup />
		</ThemeProvider>
	);
}

export default App;
