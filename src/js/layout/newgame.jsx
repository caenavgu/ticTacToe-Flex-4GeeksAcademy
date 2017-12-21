import React from 'react';

import todoStore from '../stores/todoStore';
import board from '../layout/board';

export class newgame extends React.Component {
    
    constructor(){
        super();
        
        this.state = { data: todoStore.getAllTasks() };
    }
    
    componentDidMount(){
        todoStore.on('change', () => {
            this.setState({ 
    		    data: todoStore.getAllTasks()
    		});
        });
    }
    
	render() {
	    
	 	   
	    
		return (
			<div>
				<div><h1>Hello New Game</h1></div>
	    <div id="modal-container">
	      <div className="modal choose-modal">
	        <h3>Choose Your Weapon</h3>
	        <div className="button-area">
	        	<span onclick="setTurn(this);" className="x-marker">X</span>
	        	<span onclick="setTurn(this);" className="o-marker">O</span>
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
