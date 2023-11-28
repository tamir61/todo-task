import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';
import PropTypes from 'prop-types';

function TodoList({ todos }) {
  if (!Object.keys(todos || {}).length) {
    return null;
  }

  return (
    <Paper>
      <List>
        {Object.keys(todos).map(todoId => (
          <ListItem key={todoId} dense>
            <ListItemText primary={todos[todoId].task} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.shape({
    task: PropTypes.string.isRequired
  }).isRequired
};
