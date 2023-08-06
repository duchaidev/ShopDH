import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: {
        loading: false,
        error: false,
        dataUser: null,
    },
    register: {
        loading: false,
        error: false,
    }
}

export const authSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.login.loading = true
            state.login.error = false
        },
        loginSuccess: (state, action) => {
            state.login.loading = false
            state.login.error = false
            state.login.dataUser = action.payload
        },
        loginError: (state) => {
            state.login.loading = false
            state.login.error = true
        },
        registerStart: (state) => {
            state.register.loading = true
            state.register.error = false
        },
        registerSuccess: (state) => {
            state.register.loading = false
            state.register.error = false
        },
        registerError: (state) => {
            state.register.loading = false
            state.register.error = true
        }

    }
})

export const { registerStart, registerSuccess, registerError, loginStart, loginSuccess, loginError } = authSlice.actions
export default authSlice.reducer