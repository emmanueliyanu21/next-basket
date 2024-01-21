import {useMediaQuery} from '@mui/material'

const smallScreenSize = 600;
const smallerScreenSize = 380;
const isMediaSize = (size: number) => {
    return useMediaQuery(`(max-width: ${size}px)`)
}

export { isMediaSize, smallScreenSize, smallerScreenSize }