import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "47cbab89-2f0d-479d-b98f-459d8707e673"
  }
});

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  followUser(id) {
    return instance.post(`follow/${id}`).then(response => response.data);
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then(response => response.data);
  }
};

export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  getProfileStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then(response => response.data);
  },
  updateProfileStatus(status) {
    return instance
      .put(`profile/status/`, { status })
      .then(response => response.data);
  }
};

export const authApi = {
  getUser() {
    return instance.get(`auth/me`).then(response => response.data);
  },
  login(email, password, rememberMe) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then(response => response.data);
  },
  logout() {
    return instance.delete(`auth/login`).then(response => response.data);
  }
};
