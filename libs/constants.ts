import {useMediaQuery} from '@mui/material'

// export const isSmallScreen = useMediaQuery('(max-width: 600px)');
// export const isSmallerScreen = useMediaQuery('(max-width: 380px)');
const smallScreenSize = 600;
const smallerScreenSize = 380;
const isMediaSize = (size: number) => {
    return useMediaQuery(`(max-width: ${size}px)`)
}

export { isMediaSize, smallScreenSize, smallerScreenSize }