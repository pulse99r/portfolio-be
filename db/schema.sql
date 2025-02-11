\c data_wharehouse_dev;

-- portfolio users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL, -- Store hashed passwords (e.g., bcrypt)
  first_name TEXT,
  last_name TEXT,
  phone VARCHAR(10),
  is_active BOOLEAN DEFAULT TRUE, -- To enable/disable user accounts
  date_created TIMESTAMP DEFAULT now(),
  last_login TIMESTAMP
);

-- portfolio messages 
-- from contact us form
DROP TABLE IF EXISTS pf_msgs_001;
CREATE TABLE pf_msgs_001 (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone VARCHAR(10),
  message TEXT,
  ft_job BOOLEAN,
  pt_job BOOLEAN,
  short_term BOOLEAN,
  viewed BOOLEAN,
  date_created TIMESTAMP DEFAULT now()
);


-- roles table
-- deines roles (e.g. user, admim, guest)
CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  role_name TEXT NOT NULL UNIQUE
);

-- user roles
--This table associates users with roles (many-to-many relationship).
CREATE TABLE user_roles (
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  role_id INT REFERENCES roles(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, role_id)
);

-- permissions table
-- This table defines permissions (e.g., read, write, delete).
CREATE TABLE permissions (
  id SERIAL PRIMARY KEY,
  permission_name TEXT NOT NULL UNIQUE
);

-- Role Permissions Table
-- This table associates roles with permissions (many-to-many relationship).
CREATE TABLE role_permissions (
  role_id INT REFERENCES roles(id) ON DELETE CASCADE,
  permission_id INT REFERENCES permissions(id) ON DELETE CASCADE,
  PRIMARY KEY (role_id, permission_id)
);

-- Sessions Table (Optional)
-- This table can be used to manage user sessions, especially for tracking active logins.
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  session_token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

-- Password Reset Tokens Table (Optional)
-- This table can be used to manage password reset requests.

CREATE TABLE password_reset_tokens (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);


-- psql -U postgres -f db/schema.sql
