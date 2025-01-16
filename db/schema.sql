\c data_wharehouse_dev;

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



-- portfolio users

-- psql -U postgres -f db/schema.sql
