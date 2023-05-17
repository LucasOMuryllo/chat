import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow
        projectId='2c690595-df7e-49b8-b1e7-d6ab1cf3987f'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}} 
        />
    </div>
    )
}

export default ChatsPage