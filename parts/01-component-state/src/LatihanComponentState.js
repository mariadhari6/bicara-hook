import React, { useState } from "react"
import useCommentsHook from "./useCommentsHook"
import useCustomHook from "./useCustomHook"
const LatihanComponentState = () => {
    /**
     * [0] state / value
     * [1] function (update state)
     */
    const [state, setState] = useState({
        subscribe: false,
        like: 0,
        dislike: 0,
        comment: "",
        comments: []
    })
    const [like, handleLike, handleTripleLike] = useCustomHook()
    const [dislike, handleDislike] = useCustomHook()
    const [comments, pushComent, deleteComment] = useCommentsHook([])
    const handleSubscribe = () => {
        setState({
            ...state,
            subscribe: !state.subscribe
        })
    }
    const handleComment = (e) => {
        setState({
            ...state,
            comment: e.target.value
        })
    }

    return (
        <div>
            <p>
                <button onClick={handleSubscribe}>
                    Subscribe
                </button>
                <span> {JSON.stringify(state.subscribe)} </span>
            </p>
            <p>
                <button onClick={handleLike}> Like </button>
                <span> {like} </span>
            </p>
            <p>
                <button onClick={handleDislike}> Dislike </button>
                <span> {dislike} </span>
            </p>
            <p>
                <button onClick={handleTripleLike}> Triple Like </button>
                <span> {like} </span>
            </p>
            <p>
                <input onChange={handleComment} value={state.comment} />
                <button onClick={() => {
                    pushComent(state.comment)
                    setState({
                        ...state,
                        comment: ""
                    })
                }}> Add comment </button>
            </p>
            <ul>
                {comments.map((comment, i) => (
                    <li key={i}> {comment} <button onClick={() => deleteComment(i)}> delete </button> </li>
                ))}
            </ul>
        </div>
    )
}
export default LatihanComponentState