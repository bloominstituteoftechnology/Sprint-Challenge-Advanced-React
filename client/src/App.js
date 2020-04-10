import React from 'react';
import Player from './components/Player';
import withAPIHook from './hooks/Hook';
import './App.css';

class App extends React.Component {
	render() {
		const { players } = this.props;
		return (
			<div className="App" >
				<h1>Players</h1>
				<div className="players">
					{
						players ? 
						players.map(player => <Player key={player.id} player={player} />)
						: null
					}
				</div>
			</div>
		);
	}
}

export default withAPIHook(App, '/players');