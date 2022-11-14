import axios from 'axios'


export const getUsersRequest = async () => axios.get('/users')

export const getUserRequest = async (id, token) => axios.get(`/users/${id}`, { headers: { "Authorization": `Bearer ${token}` } })

export const updateUserDataRequest = async (id, userUpdate) => {
    const form = new FormData();
    for (const key in userUpdate) {
        form.append(key, userUpdate[key])            
        }
        return axios.put(`/users/${id}`, form, {
            headers: {
                "Content-Type": "multipart/form-data",
              },
        })
    }

export const updateUserRequest = async (id, userUpdate) => axios.put(`/users/${id}`, userUpdate)

export const loginUserRequest = async (user) => axios.post('/login', user)

export const createUsersRequest = async (newUser) => axios.post('/register', newUser)


