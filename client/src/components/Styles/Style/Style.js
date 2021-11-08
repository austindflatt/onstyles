import React from 'react'
import styles from '../../../reducers/styles'
import moment from 'moment';

const Style = ({ style }) => {
    return (
        <>
        <figure>
        <a href="#">
        <img src={style.selectedFile} />
        </a>
        <figcaption>{style.title} added {moment(style.postedOn).fromNow()}</figcaption>
        <p>{style.brand}</p>
        <p>{style.model}</p>
        <p>{style.colorway}</p>
        <p>{style.tags.map((tag) => `#${tag}`)}</p>
        <button onClick={() => {}}>Like</button>
        <button onClick={() => {}}>Like {style.likeCount}</button>
        <button onClick={() => {}}>Delete</button>
        </figure>
        </>
    )
}

export default Style
