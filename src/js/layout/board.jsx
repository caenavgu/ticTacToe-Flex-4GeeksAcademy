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
          <div><h1>Hello Board</h1></div>
             <div id="msg" id="container">
        <h1>Tic Tac Toe <small>in JAVASCRIPT.</small></h1>
        <h2 id="message"></h2>
             <a href="#" id="start-over" onClick="startGame();">Start Over</a>
        </div>

<div className="container">
      <div className="board clearfix">
        <div className="row">
          <div className="square" onclick="nextMove(this);" id="s1">
		  </div>
          <div className="square" onclick="nextMove(this);" id="s2"></div>
          <div className="square" onclick="nextMove(this);" id="s3"></div>
        </div>
        <div className="row">
          <div className="square" onclick="nextMove(this);" id="s4"></div>
          <div className="square" onclick="nextMove(this);" id="s5"></div>
          <div className="square" onclick="nextMove(this);" id="s6"></div>
        </div>
        <div className="row">
          <div className="square" onclick="nextMove(this);" id="s7"></div>
          <div className="square" onclick="nextMove(this);" id="s8"></div>
          <div className="square" onclick="nextMove(this);" id="s9"></div>
        </div>
      </div>
</div>
</div>
		);
}
}