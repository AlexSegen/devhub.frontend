import styles from './message.module.scss';

const ChatMessage = ({msg, userId, isConnected}) => {


    return (
        <div className={`${styles.message} ${msg.user._id === userId ? styles.__me : ""}`}>
            <div className={styles.content}>
                {msg.message}
            </div>
            <div className={styles.owner}>
                <img src={msg.user.avatar} alt={msg.user.first_name}/>
                <span className={`${styles.username} ${isConnected ? styles.__online : ""}`}>{msg.user.first_name}</span>
                { isConnected && <>Conectado</>}
            </div>
        </div>
)


}

export default ChatMessage;