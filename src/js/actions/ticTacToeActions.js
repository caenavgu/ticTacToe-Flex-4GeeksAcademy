import ticTacToeDispatcher from '../dispatchers/ticTacToeDispatcher';

export function setTurn(playerId){
    
      ticTacToeDispatcher.dispatch({
        actionType: 'SET_TURN',
        data: playerId
      });
    
}

export function winPlayer(thestate,cp){
    ticTacToeDispatcher.dispatch({
        actionType: 'WIN_PLAYER',
        state: thestate,
        cp: cp
      });
}
      