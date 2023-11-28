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
        {todos.map((todo, index) => (
          <ListItem
            key={todo.id}
            dense
            onClick={() => toggleComplete(index)}
            sx={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              opacity: todo.completed ? 0.5 : 1
            }}
          >
            <Checkbox edge="start" checked={todo.completed} tabIndex={-1} disableRipple />
            <ListItemText primary={todo.task} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(index)}>
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
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      task: PropTypes.string.isRequired
    })
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
