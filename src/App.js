import { Switch, Route } from 'react-router-dom';

import About from './components/About';
import Form from './components/Form';
import Header from './components/Header';

import './App.css';

function App() {
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route path='/' exact component={Form} />
					<Route path='/about' exact component={About} />
				</Switch>
			</main>
		</>
	);
}

export default App;
