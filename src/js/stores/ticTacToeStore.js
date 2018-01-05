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
    }
    
    getCurrentTurn(){
        return this.currentplayer;
    }
    
    setTurn(playerId){
        this.currentplayer = playerId;
        this.emit('change');
    }
    
    handleActions(action){
        console.log('We have received the action', action);
        switch(action.actionType)
        {
            case "SET_TURN": this.setTurn(action.data); break;
        }
        
    }
}
var ticTacToeStore = new TicTacStore();
ticTacToeDispatcher.register(ticTacToeStore.handleActions.bind(ticTacToeStore));
window.ticTacToeDispatcher = ticTacToeDispatcher;
export default ticTacToeStore;