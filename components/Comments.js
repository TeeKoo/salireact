import React, { Component, PropTypes } from 'react'
class Comments extends Component {

    componentDidMount() {

    }

    render() {
        var style = {
            marginTop: '50px',
            button: {marginLeft: '10px'}
        }
        let { comments } = this.props;
        console.log(this.props)
        return (
            <div className="col-xs-12" style={style}>
                {comments.map(function(comment, i){
                    return <p key={i}> {comment.comment}</p>;
                })}
            </div>
        )
    }

}

export default Comments

