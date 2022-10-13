import MessageForm from './MessageForm';
import TheirMessages from './TheirMessages';
import MyMessages from './MyMessages';

const ChatFeed = (props) => {
    const { chats, activeChat, UserName, messages } = props;
    const chat = chats && chats[activeChat];
    const renderMessages = () => {
        const keys = Object.keys(messages);
        const lastMessageKey = index === 0 ?
    }
}