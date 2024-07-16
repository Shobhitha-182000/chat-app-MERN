import { create } from 'zustand'
import { combine } from 'zustand/middleware'

const useConversation = create( (set) => ({
    selectedConversation:null,
    setSelectedConversation:(selectedConversation)=>set({selectedConversation}),
    message:[],
    setMessages:(messages)=>set({messages})
  }))


export default useConversation;