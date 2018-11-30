import axios from 'axios'

/// ajax call to send question and get response in answer
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

/// use to send the message to the user
export const MultiChatD = sendMessage => {
    return axios
        .post('chat/multiuser', {
            receiverEmail: sendMessage.receiverEmail,
            senderId: sendMessage.senderId,
            message: sendMessage.message
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            throw err
        })

}

///use to receive message
export const ReceiveChat = sendMes => {
    return axios.get('chat/' + sendMes.senderId)
        .then(res => {
            return res.data
        })
        .catch(err => {
            throw err
        })
}