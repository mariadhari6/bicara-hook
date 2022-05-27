import  { useState } from "react"
const useCustomHook = () => {
    const [state, setState] = useState(0)
    const handleState = () => {
        setState(currentState => currentState + 1)
    }
    const handleTriple = () => {
        handleState()
        handleState()
        handleState()
    }
    return [
        state,
        handleState,
        handleTriple
    ]
}
export default useCustomHook