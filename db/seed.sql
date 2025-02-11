\c data_wharehouse_dev;

INSERT INTO users (username, email, password_hash, first_name, last_name, phone, is_active, date_created, last_login)
VALUES
  -- User 1: Admin
  ('admin_user', 'admin@example.com', '$2a$12$xyz123abc456def789ghi', 'John', 'Doe', '1234567890', TRUE, '2023-10-01 08:00:00', '2023-10-05 14:30:00'),

  -- User 2: Regular User
  ('regular_user', 'user@example.com', '$2a$12$pqr789uvw012abc345def', 'Jane', 'Smith', '9876543210', TRUE, '2023-10-02 09:15:00', '2023-10-04 16:45:00'),

  -- User 3: Inactive User
  ('inactive_user', 'inactive@example.com', '$2a$12$lmn456opq789rst012uvw', 'Alice', 'Johnson', '5555555555', FALSE, '2023-10-03 10:30:00', NULL),

  -- User 4: Another Regular User
  ('another_user', 'another@example.com', '$2a$12$abc123def456ghi789jkl', 'Bob', 'Brown', '1112223333', TRUE, '2023-10-04 11:45:00', '2023-10-05 10:00:00');

INSERT INTO pf_msgs_001 (
  first_name,
  last_name,
  phone,
  message,
  ft_job,
  pt_job,
  short_term,
  viewed,
  date_created
) VALUES 
('Joe', 'recruiter', '1234567890','I would love to speak with you about a job opening within division.', TRUE, FALSE, NULL, NULL, NOW()),
('Indiana', 'Jones', '2345678901','I urgently need to speak with you about a short term opprtunity that just came up.  It''s in Egypt.', FALSE, FALSE, TRUE, NULL, NOW()),
('John', 'Smith', '3456789012','We are looking for a software engineer and thought you might be a good fit. Please call me to setup an interview. Thank you.', FALSE, FALSE, TRUE, NULL, NOW());



-- psql -U postgres -f db/seed.sql