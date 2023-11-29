import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const Container = styled('div')(() => ({
  overflowY: 'scroll'
}));

function TodoList({ todos, toggleComplete, deleteTodo }) {
  if (!Object.keys(todos || {}).length) {
    return null;
  }

  return (
    <Container>
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
            <ListItemText
              primary={todo.task}
              primaryTypographyProps={{
                style: {
                  wordBreak: 'break-word'
                }
              }}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
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
