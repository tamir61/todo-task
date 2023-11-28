import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  if (!Object.keys(todos || {}).length) {
    return null;
  }

  return (
    <Paper>
      <List>
        {Object.keys(todos).map(todoId => (
          <ListItem
            key={todoId}
            dense
            onClick={() => toggleComplete(todoId)}
            sx={{
              textDecoration: todos[todoId].completed ? 'line-through' : 'none',
              opacity: todos[todoId].completed ? 0.5 : 1
            }}
          >
            <Checkbox edge="start" checked={todos[todoId].completed} tabIndex={-1} disableRipple />
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
    completed: PropTypes.bool.isRequired,
    task: PropTypes.string.isRequired
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
