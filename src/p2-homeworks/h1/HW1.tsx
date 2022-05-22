import React from 'react'
import Message from "./Message";
import AlternativeMessage from './AlternativeMessage';

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '20:00',
}

const alternativeMessageData = {
    avatar: 'https://bipbap.ru/wp-content/uploads/2021/10/443e1f59158c5c656a91339657248cce-fb-cover-photos-arrow-logo-1-730x608.jpg',
    name: 'Denis',
    message: 'Да, yarn start',
    time: '20:01',
}

class HW1 extends React.Component {
    render() {
        return (
            <div>
                <hr/>
                homeworks 1

                {/*should work (должно работать)*/}

                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />

                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeMessage/>*/}
                <AlternativeMessage
                    avatar={alternativeMessageData.avatar}
                    name={alternativeMessageData.name}
                    message={alternativeMessageData.message}
                    time={alternativeMessageData.time}
                />
                <hr/>
            </div>
        )
    }
}

export default HW1
