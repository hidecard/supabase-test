import { login } from '../src/auth/login.js';
import { signup } from '../src/auth/signup.js';
import { logout } from '../src/auth/logout.js';
import { fetchUsers } from '../src/user/fetchUsers.js';

document.getElementById('login-btn').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  await login(email, password);
});

document.getElementById('signup-btn').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  await signup(email, password);
});

document.getElementById('logout-btn').addEventListener('click', async () => {
  await logout();
});

document.addEventListener('DOMContentLoaded', async () => {
  const users = await fetchUsers();
  const userList = document.getElementById('users');
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.email})`;
    userList.appendChild(li);
  });
});
