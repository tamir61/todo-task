import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';

import WidgetContainer from '../components/WidgetContainer/WidgetContainer';
import TodoList from './TodosList';
import useTodos from './useTodos';

function TodosWidget() {
  const { todosList, handleKeyPress, handleDeleteTodo, handleToggleComplete, inputValue, handleTextInputChange } =
    useTodos();

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
          onChange={handleTextInputChange}
          onKeyDown={handleKeyPress}
        />
        <TodoList toggleComplete={handleToggleComplete} deleteTodo={handleDeleteTodo} todos={todosList} />
      </WidgetContainer>
    </Grid>
  );
}

export default TodosWidget;
