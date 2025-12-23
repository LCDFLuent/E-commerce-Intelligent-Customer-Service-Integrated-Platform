import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: string
}

interface ChatState {
  messages: Message[]
  sessionId: string | null
}

const initialState: ChatState = {
  messages: [],
  sessionId: null,
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload)
    },
    setSessionId: (state, action: PayloadAction<string>) => {
      state.sessionId = action.payload
    },
    clearMessages: (state) => {
      state.messages = []
    },
  },
})

export const { addMessage, setSessionId, clearMessages } = chatSlice.actions
export default chatSlice.reducer
