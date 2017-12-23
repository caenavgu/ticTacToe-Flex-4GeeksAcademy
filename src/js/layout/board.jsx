import React from 'react';

import tictacStore from '../stores/tictacStore';

export class board extends React.Component {

	render() {
	    
		return (
<div>
          <div><h1>Hello Board</h1></div>
             <div id="msg" id="container">
        <h1>Tic Tac Toe <small>in JAVASCRIPT.</small></h1>
        <h2 id="message"></h2>
        Current player {tictacStore.getCurrentTurn()}
             <a href="#" id="start-over" onClick={''}>Start Over</a>
        </div>

<div className="container">
      <div className="board clearfix">
        <div className="row">
          <div className="square" onClick={''} id="s1">
		  </div>
          <div className="square" onClick={''} id="s2"></div>
          <div className="square" onClick={''} id="s3"></div>
        </div>
        <div className="row">
          <div className="square" onClick={''} id="s4"></div>
          <div className="square" onClick={''} id="s5"></div>
          <div className="square" onClick={''} id="s6"></div>
        </div>
        <div className="row">
          <div className="square" onClick={''} id="s7"></div>
          <div className="square" onClick={''} id="s8"></div>
          <div className="square" onClick={''} id="s9"></div>
        </div>
      </div>
</div>
</div>
		);
}
}