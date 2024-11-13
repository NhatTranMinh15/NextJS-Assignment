import React from 'react'
import { Comment as CommentModel } from '@/app/models/Comment'
import Image from 'next/image'
import CommentForm from '@/app/components/CommentForm';

type CommentProps = {
    comment: CommentModel;
    depth: number;
}
type CommentListProps = {
    comments: CommentModel[];
}

const Comment = ({ comment, depth }: CommentProps) => {
    return (
        <li className={`${comment.reply ? "thread-alt" : ""} depth-${depth} `}>
            <div className={"comment-content"}>
                <div className="avatar">
                    <Image width="50" height="50" className=" avatar align-baseline" src={comment.user.profileLink} alt="" />
                </div>
                <div className="comment-info inline-block ml-5">
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
                        return <ul key={`comment-${c.id}-${index}-${Date.now()}`} className={"children"}>
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
        <div className="comments-wrap">
            <div id="comments" className="row">
                <div className="col-full">
                    <h3>{comments.length} Comments</h3>
                    <ol className="commentlist">
                        {comments.map((comment, index) => (
                            <Comment key={`commentlist-${comment.id}-${index}-${Date.now()}`} comment={comment} depth={1} />
                        ))}
                    </ol>
                    <CommentForm></CommentForm>
                </div>
            </div>
        </div>
    )
}

export default CommentList
