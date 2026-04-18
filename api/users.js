async function getUsers() {
  try {
    const response = await fetch('/api/users');
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

async function createUser(userData) {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userData)
    });
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
}

async function updateUser(userId, userData) {
  try {
    const response = await fetch(`/api/users/${userId}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userData)
    });
    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  }
}

async function deleteUser(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`, {
      method: 'DELETE'
    });
    return response.ok;
  } catch (error) {
    console.error('Error deleting user:', error);
    return false;
  }
}

export { getUsers, createUser, updateUser, deleteUser };