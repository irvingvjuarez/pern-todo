CREATE DATABASE pern_todo;

-- Connect to the just created db
-- \c pern_stack

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  content VARCHAR(75) UNIQUE,
  created_at DATE DEFAULT CURRENT_TIMESTAMP
);