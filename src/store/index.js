import {configureStore} from '@reduxjs/toolkit'
import booklistSlice from './booklist-slice'


const store= configureStore({
    reducer: { bklist: booklistSlice.reducer}
})


export default store