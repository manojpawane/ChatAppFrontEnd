import axios from 'axios'

export const singleChatD = sendMessage => {
    return axios
        .post('chat/assistant', {
            question: sendMessage.message,
            name: sendMessage.name
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })

    }

    