const { SET_BACKDROP_OPEN, SET_BACKDROP_CLOSED } = require("../actions/actionTypes")

export const setBackdropOpen = () => ({
    type: SET_BACKDROP_OPEN
})

export const setBackdropClosed = () => ({
    type: SET_BACKDROP_CLOSED
})
