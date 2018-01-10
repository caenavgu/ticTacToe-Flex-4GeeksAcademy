import React from 'react';

import ticTacToeStore from '../stores/ticTacToeStore';

export class board extends React.Component {
  
  constructor(){
    super()
    this.state = {
      currentplayer: null,
      s1: '',
      s2: '',
      s3: '',
      s4: '',
      s5: '',
      s6: '',
      s7: '',
      s8: '',
      s9: ''
    }
  }
  
  componentDidMount(){
    console.log("here we got it");
  }

	render() {
	    
		return (
  <div>
        <div id="msg" id="container">
          <h1>Tic Tac Toe <small>in JAVASCRIPT.</small></h1>
          <h2 id="message"></h2>
          Current player {this.state.currentplayer = ticTacToeStore.getCurrentTurn()}
               <a href="#" id="start-over" onClick={''}>Start Over</a>
        </div>

        <div className="container">
              <div className="board clearfix">
                <div className="row">
                  <div className="square" onClick={ () => {
                    
                    this.setState({
                      s1: ticTacToeStore.getCurrentTurn()
                    });
                    console.log(this.state.currentplayer);
                    if(this.currentplayer === 'x') this.currentplayer = 'y';
                    ticTacToeStore.switchPlayer(playerId);
                    
                  }} id="s1">{this.state.s1}</div>
                  <div className="square" onClick={''} id="s2">{this.state.s2}</div>
                  <div className="square" onClick={''} id="s3">{this.state.s3}</div>
                </div>
                <div className="row">
                  <div className="square" onClick={''} id="s4">{this.state.s4}</div>
                  <div className="square" onClick={''} id="s5">{this.state.s5}</div>
                  <div className="square" onClick={''} id="s6">{this.state.s6}</div>
                </div>
                <div className="row">
                  <div className="square" onClick={''} id="s7">{this.state.s7}</div>
                  <div className="square" onClick={''} id="s8">{this.state.s8}</div>
                  <div className="square" onClick={''} id="s9">{this.state.s9}</div>
                </div>
              </div>
        </div>
  </div>
		);
  }
}