import request from "@/utils/require";

export const login = function ({username, password}) {
  return request("/login", {
    method: 'post',
    body: {
      username,
      password
    }
  })
}

export const register = function ({
  userName, 
  password,
  telephone
}) {
  return request("/register", {
    method: 'post',
    body: {
      userName,
      password,
      telephone
    }
  })
}