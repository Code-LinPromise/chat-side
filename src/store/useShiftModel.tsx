import {create} from 'zustand'


export interface ShiftModel {
    shiftModel:boolean,
    setShift:()=>void,
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

export const useShiftModel = create<ShiftModel>((set) => ({
    shiftModel:getDate(),
    setShift: () => set((state)=> ({ shiftModel: !state.shiftModel }))
}))
