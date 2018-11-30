import axios from 'axios'

export const SingleChatD = sendMessage => {
    return axios
        .post('chat/assistant', {
            question: sendMessage.question,
            name: sendMessage.name
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })

    }

    export const MultiChatD = sendMessage => {
        return axios
            .post('chat/multiuser', {
                receiverEmail: sendMessage.receiverEmail,
                senderId:sendMessage.senderId,
                message:sendMessage.message
            })
            .then(res => {
                return res.data
            })
            .catch(err => {
              throw err
            })
    
        }

    export const ReceiveChat = sendMes =>{
        return axios.get('chat/'+sendMes.senderId)
        .then(res =>{
            return res.data
        })
        .catch(err =>{
            throw err
        })
    }