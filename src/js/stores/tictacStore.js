import EventEmmiter from 'events';

import * as tictacActions from '../actions/tictacActions.js'
import TodoDispatcher from '../dispatchers/todoDispatcher.js';

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
var tictacStore = new TicTacStore();
TodoDispatcher.register(tictacStore.handleActions.bind(tictacStore));
window.TodoDispatcher = TodoDispatcher;
export default tictacStore;