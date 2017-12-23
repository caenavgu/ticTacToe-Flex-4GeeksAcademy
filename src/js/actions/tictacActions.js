import todoDispatcher from '../dispatchers/todoDispatcher';

export function setTurn(playerId){
      todoDispatcher.dispatch({
        actionType: 'SET_TURN',
        data: playerId
      });
    
}