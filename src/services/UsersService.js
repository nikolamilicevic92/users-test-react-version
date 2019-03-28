import Axios from "axios";

export default class UsersService {

    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/users';
    }

    getUsers() {
        return new Promise((resolve, reject) => {
            Axios.get(this.url)
                .then(response => resolve(response))
                .catch(error => reject(error));
        })
    }

    getUser(id) {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.url}/${id}`)
                .then(response => resolve(response))
                .catch(error => reject(error));
        })
    }

    createUser(data) {
        return new Promise((resolve, reject) => {
            Axios.post(this.url, data)
                .then(response => resolve(response))
                .catch(error => reject(error));
        })
    }

    updateUser(id, data) {
        return new Promise((resolve, reject) => {
            Axios.put(`${this.url}/${id}`, data)
                .then(response => resolve(response))
                .catch(error => reject(error));
        })
    }

    deleteUser(id) {
        return new Promise((resolve, reject) => {
            Axios.delete(`${this.url}/${id}`)
                .then(response => resolve(response))
                .catch(error => reject(error));
        })
    }
}