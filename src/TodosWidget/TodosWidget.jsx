import React, { useState } from 'react';
import { Grid, TextField, Typography } from '@mui/material';

import WidgetContainer from '../components/WidgetContainer/WidgetContainer';
import TodoList from './TodosList';

function TodosWidget() {
  const [inputValue, setInputValue] = useState('');
  const [todosList, setTodosList] = useState({});

  const handleOnChange = event => setInputValue(event.target.value);

  const handleKeyPress = event => {
    if (event.key === 'Enter' && inputValue) {
      const toDoId = new Date().getTime();
      setTodosList(prevValue => ({
        [toDoId]: { task: inputValue },
        ...prevValue
      }));
      setInputValue('');
    }
  };

  return (
    <Grid item xs={12} md={6} lg={8}>
      <WidgetContainer>
        <Typography variant="h5" component="h2" gutterBottom>
          Todo List
        </Typography>
        <TextField
          id="outlined-basic"
          label="New task"
          variant="outlined"
          value={inputValue}
          onChange={handleOnChange}
          onKeyDown={handleKeyPress}
        />
        <TodoList todos={todosList} />
      </WidgetContainer>
    </Grid>
  );
}

export default TodosWidget;
