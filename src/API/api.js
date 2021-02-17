import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b32418c0-d449-4a5f-8b6a-ab02fa0edb4d',
    },
});

export const friendsAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    followUser(index) {
        return instance.post( `follow/${index}`)
        .then(response => {
            return response.data;
        });
    },
    unfollowUser(index) {
        return instance.delete( `follow/${index}`)
        .then(response => {
            return response.data;
        });
    },
}
export const authAPI = {
    authMe () {
        return instance.get( `auth/me`)
        .then(response => {
            return response.data;
        });
    },
    authLogin (email, password, rememberMe, captcha) {
        return instance.post( `auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe,
            captcha: captcha,
        })
    },
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`);
    },
    authLogout () {
        return instance.delete( `auth/login`);
    },
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get( `profile/${userId}`)
        .then(response => {
            return response.data;
        });
    },
    getStatus(userId) {
        return instance.get( `profile/status/${userId}`)
        .then(response => {
            return response.data;
        });
    },
    setStatus(status) {
        return instance.put( `profile/status`, {status: status} );
    },
}
export const settingsAPI = {
    setPhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }}
        )
        .then(response => {
            return response.data;
        });
    },
    setProfileInfo(allData) {
        return instance.put(`profile`, allData).then(response => response.data)
    },
}