export default {
    state: {
        code: -1,
        message: null,
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        updateCode(state, code, message) {
            state.code = code
            state.message = message
        },
    },
    modules: {
        
    }
}
