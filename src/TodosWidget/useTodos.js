import { useCallback, useState } from 'react';

import useLocalStorage from '../utils/useLocalStorage';

const LOCAL_STORAGE_TODOS_KEY = 'LOCAL_STORAGE_TODOS_KEY';

function useTodos() {
  const [inputValue, setInputValue] = useState('');
  const [todosList, setTodosList] = useLocalStorage(LOCAL_STORAGE_TODOS_KEY, []);

  const handleTextInputChange = useCallback(event => setInputValue(event.target.value), []);

  const handleKeyPress = useCallback(
    event => {
      if (event.key === 'Enter' && inputValue) {
        const toDoId = new Date().getTime();
        setTodosList(prevValue => [{ id: toDoId, completed: false, task: inputValue }, ...prevValue]);
        setInputValue('');
      }
    },
    [inputValue, setTodosList]
  );

  const handleDeleteTodo = useCallback(
    toDoIndex => {
      setTodosList(prevValue => {
        const newState = structuredClone(prevValue);
        newState.splice(toDoIndex, 1);
        return newState;
      });
    },
    [setTodosList]
  );

  const handleToggleComplete = useCallback(
    toDoIndex => {
      setTodosList(prevValue => {
        const newState = structuredClone(prevValue);
        newState[toDoIndex].completed = !newState[toDoIndex].completed;
        return newState;
      });
    },
    [setTodosList]
  );

  return { todosList, handleKeyPress, handleDeleteTodo, handleToggleComplete, inputValue, handleTextInputChange };
}

export default useTodos;
