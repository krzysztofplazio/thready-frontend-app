import { create } from 'zustand';

export const useStore = create<IState>((set) => ({
    user: {} as IUser,
    setUser: (settedUser: IUser) => {
        set((state) => ({
            ...state.user,
            user: settedUser
        }));
    }
}));