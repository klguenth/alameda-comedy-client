import React from 'react'

export default React.createContext({
    shows: [],
    comedians: [],
    token: null,
    deleteShow: () => {},
    editShow: () => {},
    deleteComedian: () => {},
    editComedian: () => {},
    submitAuth: () => {}
})