/* @refresh reload */
import '@wailsio/runtime';

import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";

import { StateProvider } from './store';

import './index.css';
import Layout from './components/Layout'
import Home from './pages/Home';


const root = document.getElementById('root')

render(() => (
	<StateProvider>
		<Router root={Layout}>
			<Route path="/" component={Home}/>
		</Router>
	</StateProvider>
), root!)
