import React from 'react'

export default React.createContext({
    shows: [],
    comedians: [],
    deleteShow: () => {},
    editShow: () => {},
    deleteComedian: () => {},
    editComedian: () => {}
})