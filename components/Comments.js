import React, { Component, PropTypes } from 'react'
import moment from 'moment'
class Comments extends Component {

    componentDidMount() {

    }

    render() {
        var style = {
            marginTop: '50px',
            button: {marginLeft: '10px'}
        }
        let { comment, user, created_at } = this.props;
        return (
            <div className="clearfix">
                <div className="col-sm-1 hidden-xs">
                    <div className="thumbnail">
                        <i className="fa fa-user avataricon"></i>
                    </div>
                </div>

                <div className="col-sm-11 col-xs-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <strong>{user}</strong> <span className="text-muted"> {moment(created_at).format('DD.MM.YYYY')}</span>
                        </div>
                        <div className="panel-body">
                            {comment}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Comments

