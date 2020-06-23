export const findComedian = (comedians, comedianId) => {
    return comedians.findIndex(comedian => +comedian.id === +comedianId)
}

export const getComediansForList = (comedians=[], id) => (
    (!id)
        ? comedians
        : comedians.find(comedian => {
            return comedian.id === parseInt(id)
        })
)

export const findShow = (shows, showId) => {
    return shows.findIndex(show => show.id === showId)
}

export const getShowsForList = (shows=[], id) => (
    (!id)
        ? shows
        : shows.find(show => {
            return show.id === parseInt(id)
        })
)