User Authentication workflow
- User Registration: Insert a new user into the users table.
- Assign Roles: Assign roles to the user in the user_roles table.
- Authentication: Verify the user's credentials (username/email and password hash) during login.
- Authorization: Check the user's roles and permissions to determine access rights.
- Session Management: Optionally, manage active sessions using the sessions table.

Additional Considerations
- Use a secure hashing algorithm (e.g., bcrypt) for storing passwords.
- Implement rate limiting and account lockout mechanisms for security.
- Use HTTPS to protect sensitive data during transmission.

Regularly audit and clean up expired sessions and tokens.

about encription
The password_hash values are placeholders. In a real application, you should generate these using a secure hashing algorithm like bcrypt. For example:

python
Copy
# Example in Python using bcrypt
import bcrypt
password = "my_secure_password"
hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
The is_active field can be used to disable user accounts without deleting them.

The last_login field is updated whenever the user logs in.