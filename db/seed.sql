\c data_wharehouse_dev;

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