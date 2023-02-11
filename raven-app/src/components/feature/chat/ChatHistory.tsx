import { Stack } from "@chakra-ui/react"
import { ChatMessage } from "./ChatMessage"

interface ChatHistoryProps {
    messages: { text: string, user_id: string, creation: string }[]
}

export const ChatHistory = ({ messages }: ChatHistoryProps) => {
    return (
        <Stack spacing={4}>
            {messages.map((message, index) => {
                return <ChatMessage key={index} text={message.text} user={message.user_id} timestamp={message.creation} />
            })}
        </Stack>
    )
}