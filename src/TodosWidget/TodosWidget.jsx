import React from 'react';
import { TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import TodoList from './TodosList';
import useTodos from './useTodos';
import WidgetContainer from '../components/WidgetContainer/WidgetContainer';
import { WIDGET_HEIGHT_MOBILE_VIEW } from '../WeatherWidget/WeatherWidget';
import { CONTAINER_GAP_VALUE } from '../PageLayout/PageLayout';
import { MEDIA_QUERY_MOBILE_DOWN } from '../utils/constants';

const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 8,
  height: '100%',
  [MEDIA_QUERY_MOBILE_DOWN]: {
    flex: 1,
    width: '100%',
    height: `calc(100% - ${WIDGET_HEIGHT_MOBILE_VIEW} - ${CONTAINER_GAP_VALUE})`
  }
}));

function TodosWidget() {
  const { todosList, handleKeyPress, handleDeleteTodo, handleToggleComplete, inputValue, handleTextInputChange } =
    useTodos();

  return (
    <Container>
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
    </Container>
  );
}

export default TodosWidget;
