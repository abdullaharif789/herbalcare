import { app } from "../contants";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    const request = new Request(app.api + "login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        localStorage.setItem("auth", JSON.stringify(auth));
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Invalid credentials.");
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) {
      return Promise.resolve(auth.role);
    }
    return Promise.reject();
  },
  getIdentity: () => {
    var token = {
      id: JSON.stringify(Date()),
      fullName: "--",
    };
    if (localStorage.getItem("auth"))
      token = JSON.parse(localStorage.getItem("auth"));
    return Promise.resolve({
      user_id: token.user_id,
      id: token.token,
      fullName: token.name,
    });
  },
};
