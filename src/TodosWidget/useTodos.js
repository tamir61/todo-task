import { useCallback, useState } from 'react';

import useLocalStorage from '../utils/useLocalStorage';

const LOCAL_STORAGE_TODOS_KEY = 'LOCAL_STORAGE_TODOS_KEY';

function useTodos() {
  const [inputValue, setInputValue] = useState('');
  const [todosList, setTodosList] = useLocalStorage(LOCAL_STORAGE_TODOS_KEY, {});

  const handleTextInputChange = useCallback(event => setInputValue(event.target.value), []);

  const handleKeyPress = useCallback(
    event => {
      if (event.key === 'Enter' && inputValue) {
        const toDoId = new Date().getTime();
        setTodosList(prevValue => ({
          [toDoId]: { completed: false, task: inputValue },
          ...prevValue
        }));
        setInputValue('');
      }
    },
    [inputValue, setTodosList]
  );

  const handleDeleteTodo = useCallback(
    toDoId => {
      setTodosList(prevValue => {
        const newState = structuredClone(prevValue);
        delete newState[toDoId];
        return newState;
      });
    },
    [setTodosList]
  );

  const handleToggleComplete = useCallback(
    toDoId => {
      setTodosList(prevValue => {
        const newState = structuredClone(prevValue);
        newState[toDoId].completed = !newState[toDoId].completed;
        return newState;
      });
    },
    [setTodosList]
  );

  return { todosList, handleKeyPress, handleDeleteTodo, handleToggleComplete, inputValue, handleTextInputChange };
}

export default useTodos;
