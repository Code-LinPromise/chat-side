import { create } from 'zustand'

type ShowBlack={
    showBlack:boolean
}
const useShowBlack = create((set) => ({
    showBlack:false,
    setShowBlack: () => set((state:ShowBlack)=>{state.showBlack=!state.showBlack}),
}))