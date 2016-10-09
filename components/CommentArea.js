import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { newComment } from '../actions'
class CommentArea extends Component {

    constructor(props) {
        super(props);
        this.state = {comment: '', name: ''};
        this.changeName = this.changeName.bind(this);
        this.changeComment = this.changeComment.bind(this);
        this.sendComment = this.sendComment.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    changeName(ev) {
        this.setState({ name: ev.target.value });
    }
    changeComment(ev) {
        this.setState({ comment: ev.target.value });
    }

    sendComment(){
        const { dispatch } = this.props
        dispatch(newComment(this.props.saliParam, this.state.name, this.state.comment));
    }
    render() {
        var style = {
            marginTop: '50px',
            button: {marginLeft: '10px'}
        }
        let { comment, name } = this.state;

        return (
            <div className="col-xs-12" style={style}>
                <div className="well bs-component">
                    <form className="form-horizontal">
                        <fieldset>
                            <legend>Kommentoi salia</legend>
                            <div className="form-group">
                                <div className="col-lg-10">
                                    <input type="text" className="form-control" id="inputEmail" value={name} placeholder="Nimi.." onChange={this.changeName} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-lg-10">
                                    <textarea className="form-control" rows="3" id="textArea" value={comment} placeholder="Kommentti.." onChange={this.changeComment}></textarea>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <button type="reset" className="btn btn-default">Peruuta</button>
                                <button type="button" className="btn btn-primary" style={style.button} onClick={this.sendComment}>Lähetä</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }

}

export default connect()(CommentArea)

