import React from 'react';

import ticTacToeStore from '../stores/ticTacToeStore';
import * as ticTacToeActions from '../actions/ticTacToeActions';

export class board extends React.Component {
  
  constructor(){
    super()
    this.state = {
      currentplayer: ticTacToeStore.getCurrentTurn(),
      winner: null,
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
  
  reset() {
      this.props.history.push('/');
  }
  
  componentDidMount(){
        ticTacToeStore.on('change', () => {
            
            this.setState({ 
    		    //currentplayer: ticTacToeStore.getCurrentTurn(),
    		    winner:  ticTacToeStore.getWinner(),
    		});
            console.log("The change was listened", ticTacToeStore.getWinner());
    		
        });
    }

	render() {
	  
	  console.log(this.state);
	  
	  if(this.state.winner != null) return (<div>
        <div id="msg" id="container"><h2>We have a winner: {this.state.winner} !!!!</h2></div></div>);
	    
		return (
  <div>
        <div id="msg" id="container">
          <h2>...in JAVASCRIPT!</h2>
          <h3 id="message"></h3>
          Current player {this.state.currentplayer}<br></br>
          Winner:  {this.state.winner}
          {(this.state.winner != null) ? 
          (<p><a style={{background: 'blue'}} href="#" id="start-over" onClick={this.reset}> Start Over</a></p>) : ''
          }
        </div>

        <div className="container">
              <div className="board clearfix">
                <div className="row">
                  <div className="square" onClick={ () => {
                    
                    this.setState({
                       s1: this.state.currentplayer
                    });
                    // console.log(this.state.currentplayer);
                    if(this.state.currentplayer == 'x'){ 
                       this.setState({
                        currentplayer: 'o'
                        });
                        ticTacToeActions.winPlayer(this.state, 'o');
                    }else{
                       this.setState({
                        currentplayer: 'x'
                        });
                        ticTacToeActions.winPlayer(this.state, 'x');
                    }
                    
                    
                  }} id="s1">{this.state.s1} </div>
                  
                  <div className="square" onClick={ () => {
                    
                    this.setState({
                      s2: this.state.currentplayer
                    });
                    // console.log(this.state.currentplayer);
                    if(this.state.currentplayer == 'x'){ 
                       this.setState({
                        currentplayer: 'o'
                        });
                        ticTacToeActions.winPlayer(this.state, 'o');
                    }else{
                       this.setState({
                        currentplayer: 'x'
                        });
                        ticTacToeActions.winPlayer(this.state, 'x');
                    }
                    
                    
                  }} id="s2">{this.state.s2}</div>
                  
                  <div className="square" onClick={ () => {
                    
                    this.setState({
                       s3: this.state.currentplayer
                    });
                    // console.log(this.state.currentplayer);
                    if(this.state.currentplayer == 'x'){ 
                       this.setState({
                        currentplayer: 'o'
                        });
                        ticTacToeActions.winPlayer(this.state, 'o');
                    }else{
                       this.setState({
                        currentplayer: 'x'
                        });
                        ticTacToeActions.winPlayer(this.state, 'x');
                    }
                    
                    
                  }} id="s3">{this.state.s3}</div>
                </div>
                <div className="row">
                  <div className="square" onClick={ () => {
                    
                    this.setState({
                       s4: this.state.currentplayer
                    });
                    // console.log(this.state.currentplayer);
                    if(this.state.currentplayer == 'x'){ 
                       this.setState({
                        currentplayer: 'o'
                        });
                        ticTacToeActions.winPlayer(this.state, 'o');
                    }else{
                       this.setState({
                        currentplayer: 'x'
                        });
                        ticTacToeActions.winPlayer(this.state, 'x');
                    }
                    
                    
                  }} id="s4">{this.state.s4}</div>
                  <div className="square" onClick={ () => {
                    
                    this.setState({
                       s5: this.state.currentplayer
                    });
                    // console.log(this.state.currentplayer);
                    if(this.state.currentplayer == 'x'){ 
                       this.setState({
                        currentplayer: 'o'
                        });
                        ticTacToeActions.winPlayer(this.state, 'o');
                    }else{
                       this.setState({
                        currentplayer: 'x'
                        });
                        ticTacToeActions.winPlayer(this.state, 'x');
                    }
                    
                  }} id="s5">{this.state.s5}</div>
                  <div className="square" onClick={ () => {
                    
               this.setState({
                       s6: this.state.currentplayer
                    });
                    // console.log(this.state.currentplayer);
                    if(this.state.currentplayer == 'x'){ 
                       this.setState({
                        currentplayer: 'o'
                        });
                        ticTacToeActions.winPlayer(this.state, 'o');
                    }else{
                       this.setState({
                        currentplayer: 'x'
                        });
                        ticTacToeActions.winPlayer(this.state, 'x');
                    }
                    
                  }} id="s6">{this.state.s6}</div>
                </div>
                <div className="row">
                  <div className="square" onClick={ () => {
                    
                    this.setState({
                       s7: this.state.currentplayer
                    });
                    // console.log(this.state.currentplayer);
                    if(this.state.currentplayer == 'x'){ 
                       this.setState({
                        currentplayer: 'o'
                        });
                        ticTacToeActions.winPlayer(this.state, 'o');
                    }else{
                       this.setState({
                        currentplayer: 'x'
                        });
                        ticTacToeActions.winPlayer(this.state, 'x');
                    }
                    
                  }} id="s7">{this.state.s7}</div>
                  
                  <div className="square" onClick={ () => {
                    
                    this.setState({
                       s8: this.state.currentplayer
                    });
                    // console.log(this.state.currentplayer);
                    if(this.state.currentplayer == 'x'){ 
                       this.setState({
                        currentplayer: 'o'
                        });
                        ticTacToeActions.winPlayer(this.state, 'o');
                    }else{
                       this.setState({
                        currentplayer: 'x'
                        });
                        ticTacToeActions.winPlayer(this.state, 'x');
                    }
                    
                  }} id="s8">{this.state.s8}</div>
                  
                  <div className="square" onClick={ () => {
                    
                    this.setState({
                       s9: this.state.currentplayer
                    });
                    // console.log(this.state.currentplayer);
                    if(this.state.currentplayer == 'x'){ 
                       this.setState({
                        currentplayer: 'o'
                        });
                        ticTacToeActions.winPlayer(this.state, 'o');
                    }else{
                       this.setState({
                        currentplayer: 'x'
                        });
                        ticTacToeActions.winPlayer(this.state, 'x');
                    }
                    
                  }} id="s9">{this.state.s9}</div>
                </div>
              </div>
        </div>
  </div>
		);
  }
}