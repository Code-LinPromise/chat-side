import {create} from 'zustand'


export interface ShowBlack {
    showBlack:boolean,
    setShowBlack:()=>void,
}
const getDate=()=>{
    const time =new Date()
    const hours =time.getHours()
    if(hours>=18 || hours<=8){
        return true
    }
    else{
        return false
    }
}
export const useShowBlack = create<ShowBlack>((set) => ({
    showBlack:!getDate(),
    setShowBlack: () => set((state)=> ({ showBlack: !state.showBlack }))
}))
