import React from 'react';

import ticTacToeStore from '../stores/ticTacToeStore';
import * as ticTacToeActions from '../actions/ticTacToeActions';

export class newgame extends React.Component {
    
    componentDidMount(){
    	ticTacToeStore.on('change', () => {
    		console.log('This is this: ',this);
    		this.props.history.push('/board');	
    	});
    }
    
	render() {
		
		return (
			<div>
	    <div id="container">
	      <div className=" choose-modal">
	        <h3>Choose Your Weapon</h3>
	        <div className="button-area">
	        	<span onClick={()=>ticTacToeActions.setTurn('x')} className="x-marker">X</span>
	        	<span onClick={()=>ticTacToeActions.setTurn('o')} className="o-marker">O</span>
	        </div>
	      </div>
	      <div className="modal end-game-modal">
	        <h3></h3>
	        <p>Try harder next time!</p>
	        <div className="button-area"><span>Play Again</span>
	        </div>
	      </div>
	    </div>
			</div>
		)
	}
};