import { useState } from "react"
const useCommentsHook = (value) => {
    const [state, setState] = useState(value)
    const pushItem = (item) => {
        setState(oldArray => [...oldArray, item])
    }
    const deleteItem = (index) => {
        setState((state) => state.filter((_, i) => i !== index))
    }
    return[
        state,
        pushItem,
        deleteItem
    ]
}
export default useCommentsHook