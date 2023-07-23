import axios from 'axios'



export const getUsersRequest = async () => axios.get('/users')

export const getUserRequest = async (id, token) => axios.get(`/users/${id}`, { headers: { "Authorization": `Bearer ${token}` } })

export const updateUserDataRequest = async (id, userDataUpdate) => {

    function buildFormData (formData, data, parentKey) {
        if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
            Object.keys(data).forEach(key => {
                buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
            });
        } else {
            const value = data == null ? '' : data;

            formData.append(parentKey, value);
        }
    }

    const form = new FormData();
    buildFormData(form, userDataUpdate)
    return axios.put(`/users/${id}`, form, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
}

export const updateUserRequest = async (id, userUpdate) => axios.put(`/users/${id}`, userUpdate)

export const loginUserRequest = async (user) => axios.post('/login', user)

export const createUsersRequest = async (newUser) => axios.post('register', newUser)


