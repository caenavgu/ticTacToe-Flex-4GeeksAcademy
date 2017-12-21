import React from 'react';

import todoStore from '../stores/todoStore';

export class board extends React.Component {
    
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
				<h1>Hello Board</h1>
			</div>
		)
	}
};
