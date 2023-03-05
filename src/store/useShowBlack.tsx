import {create} from 'zustand'


export interface ShowBlack {
    showBlack:boolean,
    setShowBlack:()=>void
}

export const useShowBlack = create<ShowBlack>((set) => ({
    showBlack:true,
    setShowBlack: () => set((state)=> ({ showBlack: !state.showBlack }))
}))