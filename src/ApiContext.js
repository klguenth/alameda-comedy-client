import React from 'react'

export default React.createContext({
    shows: [],
    comedians: [],
    token: null,
    isLoggedIn: false,
    deleteShow: () => {},
    editShow: () => {},
    deleteComedian: () => {},
    editComedian: () => {},
    submitAuth: () => {},
    handleLogout: () => {},
})