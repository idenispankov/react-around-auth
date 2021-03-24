export const BASE_URL = 'https://register.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data) {
        localStorage.setItem('jwt', data);
        return data;
      }
    })
    .catch((err) => console.log(err));
};

// class Auth {
//   constructor({ baseUrl, headers }) {
//     this._baseUrl = baseUrl;
//     this._headers = headers;
//   }

//   checkToken() {
//     return fetch(this._baseUrl + 'users/me', {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });
//     // .then((res) => {
//     //   if (res.ok) {
//     //     return res.json();
//     //   } else {
//     //     return Promise.reject('Error! ' + res.statusText);
//     //   }
//     // });
//   }

//   // POST https://around.nomoreparties.co/signup
//   register(email, password) {
//     return fetch(this._baseUrl + '/signup', {
//       headers: this._headers,
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//     }).then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         return Promise.reject('Error! ' + res.statusText);
//       }
//     });
// .then((data) => {
//   return fetch(this._baseUrl + '/signin', {
//     headers: this._headers,
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         return Promise.reject('Error! ' + res.statusText);
//       }
//     })
//     .then((res) => {
//       localStorage.setItem('jwt', res.token);
//       return data;
//     });
// });
// }

// POST https://around.nomoreparties.co/signup
//   login(data) {
//     return fetch(this._baseUrl + '/signin', {
//       headers: this._headers,
//       method: 'POST',
//       body: JSON.stringify(data),
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           return Promise.reject('Error! ' + res.statusText);
//         }
//       })
//       .then((data) => {
//         localStorage.setItem('jwt', data.token);
//       });
//   }
// }

// export default new Auth({
//   baseUrl: 'https://register.nomoreparties.co',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
