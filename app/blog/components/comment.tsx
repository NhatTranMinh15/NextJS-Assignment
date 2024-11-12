import React from 'react'
import { Comment as CommentModel } from '@/models/Comment'
import Image from 'next/image'

type CommentProps = {
    comment: CommentModel;
    depth: number;
}
type CommentListProps = {
    comments: CommentModel[];
}

const Comment = ({ comment, depth }: CommentProps) => {
    return (
        <li className={`${comment.reply ? "thread-alt" : ""} depth-${depth}`}>
            <div className="avatar">
                <Image width="50" height="50" className="avatar" src={comment.user.profileLink} alt="" />
            </div>
            <div className="comment-content">
                <div className="comment-info">
                    <cite>{comment.user.name}</cite>
                    <div className="comment-meta">
                        <time className="comment-time" dateTime={comment.createdAt.toLocaleString()}>{comment.createdAt.toLocaleDateString() + " @ " + comment.createdAt.toLocaleTimeString()}</time>
                        <span className="sep">/</span>
                        <a className="reply" href="#">Reply</a>
                    </div>
                </div>
                <div className="comment-text">
                    <p>{comment.content}</p>
                </div>
            </div>

            {
                comment.reply ?
                    comment.reply.map((c, index) => {
                        return <ul key={`comment-${c.id}-${index}-${Date.now()}`} className="children">
                            <Comment comment={c} depth={depth + 1} />
                        </ul>
                    })
                    :
                    ""
            }
        </li >
    )
}
const CommentList = ({ comments }: CommentListProps) => {
    return (
        <>
            <h3>{comments.length} Comments</h3>

            <ol className="commentlist">
                {comments.map((comment, index) => (
                    <Comment key={`commentlist-${comment.id}-${index}-${Date.now()}`} comment={comment} depth={1} />
                ))}
            </ol>
        </>
    )
}

export default CommentList
