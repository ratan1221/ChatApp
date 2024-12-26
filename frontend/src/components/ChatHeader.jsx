import { X } from 'lucide-react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';

function ChatHeader() {
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore();

    return (
        <div className='p-2.5 border-b border-base-300'>
            <div className='flex items-center justify-between'>

            </div>
        </div>
    )
}

export default ChatHeader