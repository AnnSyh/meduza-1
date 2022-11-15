export const BASE_URL = 'https://api.nomoreparties.co';
// https://auth.nomoreparties.co
// https://api.nomoreparties.co

export const register = ( username,  password, email) => {
  console.log('register: username = ', username);
  console.log('register: email = ', email);
  console.log('register: password = ', password);

  return fetch(`https://auth.nomoreparties.co/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username,  password, email})
  })
  .then((response) => response.json())
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));

};
export const authorize = (identifier, password) => {
  return fetch(`${BASE_URL}/auth/local`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({identifier, password})
  })
  .then((response => response.json()))
  .then((data) => {
    if (data.user){
      localStorage.setItem('jwt', data.jwt);
      return data;
    } else {
      return;
    }
  })
};
export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => res.json())
  .then(data => data)
}


