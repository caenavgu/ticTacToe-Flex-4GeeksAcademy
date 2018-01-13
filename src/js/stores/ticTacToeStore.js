import EventEmmiter from 'events';

import * as ticTacToeActions from '../actions/ticTacToeActions.js'
import ticTacToeDispatcher from '../dispatchers/ticTacToeDispatcher.js';

class TicTacStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        this.state = {
            squareValues: [ '','','',
                            '','','',
                            '','','']
        };
        
        this.win = null;
    }
    
    getCurrentTurn(){
        return this.currentplayer;
    }
    getWinner(){
        return this.win;
    }
    
    setTurn(playerId){
        setTimeout(()=>{
        this.currentplayer = playerId;
        this.emit('change');
        },1000);
    }
    
    winPlayer(state,cp){
        console.log("Parameters for winplayer: ",state,cp);
        if( state.s1 == state.s2 && state.s2 ==  state.s3 && state.s3 != '' ){
            console.log("The store found a winner and it is: ",cp);
            this.win = cp;
        }
        this.emit('change'); 
    }
    

    
    


    
    
    handleActions(action){
        console.log('We have received the action', action);
        switch(action.actionType)
        {
            case "SET_TURN": this.setTurn(action.data); break;
            case "WIN_PLAYER": 
                console.log("handle actio:",action);
                this.winPlayer(action.state, action.cp); 
            break;
        }
        
    }
}
var ticTacToeStore = new TicTacStore();
ticTacToeDispatcher.register(ticTacToeStore.handleActions.bind(ticTacToeStore));
window.ticTacToeDispatcher = ticTacToeDispatcher;
export default ticTacToeStore;