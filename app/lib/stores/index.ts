import {create} from 'zustand'
import { persist } from 'zustand/middleware'


interface userAuthStoreProps{
    isAuthenticated: boolean,
    setAuthenticatedPerson: (auth: boolean) => void,
}



export const userAuthStore = create<userAuthStoreProps>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            setAuthenticatedPerson: (auth: boolean) =>{

                set(() =>({
                    isAuthenticated: auth
                }))
            }
        }),
        {
            name: 'user-auth',
            partialize: (state) => ({isAuthenticated: state.isAuthenticated})
        }
    )
)