import {create} from 'zustand'


export interface ListInfo {
    title:string[],
    addTitle:(newTitle:string)=>void,
    deleteAllTitle:()=>void
}

export const useAddTitle = create<ListInfo>((set) => ({
    title:[],
    addTitle: (newTitle:string) =>set((state)=>({title:[...state.title,newTitle]})),
    deleteAllTitle:()=>set((state)=>({title:[]}))
}))