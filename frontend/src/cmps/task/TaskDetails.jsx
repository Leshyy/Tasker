import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

import { Component } from 'react'
import { CommentList } from './comment/CommentList'
// import { socketService } from '../../services/socketService'
import { cloudinaryService } from '../../services/cloudinaryService'
import AttachFileIcon from '@material-ui/icons/AttachFile';


export class TaskDetails extends Component {
    state = {
        clickedInput: false,
        comment: {
            by: {},
            text: '',
            imgUrl: ''
        }
    }
    componentDidMount() {
        const { onUpdateTask, task, groupId, loggedInUser } = this.props;
        // socketService.on('chat update', () => onUpdateTask(task, groupId))
        const by = {
            _id: loggedInUser._id,
            fullname: loggedInUser.fullname,
            imgUrl: loggedInUser.imgUrl
        }
        const commentCopy = { ...this.state.comment }
        commentCopy.by = by
        this.setState({ comment: commentCopy })
    }

    onUpload = async (ev) => {
        ev.preventDefault()
        const img = await cloudinaryService.uploadImg(ev)
        console.log('imgUrl', img.url);
        this.setState(prevState => {
            return {
                comment: {
                    ...prevState.comment,
                    imgUrl: img.url
                }
            }
        })
    }

    toggleShowTextArea = () => {
        this.setState({ clickedInput: !this.state.clickedInput })
    }

    onSubmitComment = (ev) => {
        ev.preventDefault()
        this.toggleShowTextArea()
        console.log('comment', this.state.comment.by)
        this.props.onAddComment(this.state.comment)
        const commentCopy = { ...this.state.comment }
        commentCopy.text = ''
        this.setState({ comment: commentCopy })
    }

    handleChange = (ev) => {
        const { value } = ev.target
        const commentCopy = { ...this.state.comment }
        commentCopy.text = value
        this.setState({ comment: commentCopy })
    }

    render() {
        const { clickedInput, comment } = this.state
        const { task, closeModal } = this.props
        return (
            <section className="task-details" onClick={(ev) => ev.stopPropagation()} >
                <CloseIcon className="close-icon" onClick={closeModal} />
                <div className="task-name-container">
                    <span>{task.name}</span>
                </div>
                {!clickedInput &&
                    <input type="text" onFocus={this.toggleShowTextArea} placeholder="Write an update ..." />}
                {clickedInput &&
                    <form
                        className="comment-wrapper flex col"
                        onSubmit={(ev) => {
                            this.onSubmitComment(ev)
                        }}>
                        <textarea
                            autoFocus={true}
                            value={comment.text}
                            onChange={(ev) => this.handleChange(ev)}
                            required
                        />
                        <div className="upload-img flex col">
                            <label><span className="flex align-center"><AttachFileIcon /> Add File</span>
                                <input type="file" onChange={(ev) => this.onUpload(ev)} name="" />
                            </label>
                            {comment.imgUrl && <img src={comment.imgUrl} alt="" />}
                        </div>
                        <Button
                            className="update-btn"
                            type="submit"
                            variant="contained">
                            send
                        </Button>
                    </form>}
                <CommentList comments={task.comments} />
            </section>
        )
    }
}
