import type { Chat, ChatMessage } from "~/types";
import { MOCK_CHAT } from "~/composables/mockData";

export default function useChat() {
  // Initialize chat with mock data
  const chat = ref<Chat>(MOCK_CHAT);
  const messages = computed<ChatMessage[]>(() => chat.value.messages);

  function createMessage(message: string, role: ChatMessage["role"]) {
    const id = messages.value.length.toString();

    return {
      id,
      role,
      content: message,
    };
  }

  function sendMessage(message: string) {
    messages.value.push(createMessage(message, "user"));

    setTimeout(() => {
      messages.value.push(createMessage(`You said: ${message}`, "assistant"));
    }, 200);
  }

  // Function to add a new message to the chat
  // function addMessage(role: "user" | "assistant", content: string) {
  //   const newMessage: ChatMessage = {
  //     id: (chat.value.messages.length + 1).toString(),
  //     role,
  //     content,
  //   };
  //   chat.value.messages.push(newMessage);
  // }

  return {
    chat,
    messages,
    sendMessage,
  };
}
