import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

function TodoList({ todos, deleteTodo }) {
  if (!Object.keys(todos || {}).length) {
    return null;
  }

  return (
    <Paper>
      <List>
        {Object.keys(todos).map(todoId => (
          <ListItem key={todoId} dense>
            <ListItemText primary={todos[todoId].task} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todoId)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
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
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired
};
