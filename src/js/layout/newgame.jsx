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
				<h1>Hello New Game</h1>

    
			</div>
		)
	}
};
