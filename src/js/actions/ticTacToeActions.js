import ticTacToeDispatcher from '../dispatchers/ticTacToeDispatcher';

export function setTurn(playerId){
      ticTacToeDispatcher.dispatch({
        actionType: 'SET_TURN',
        data: playerId
      });
    
}