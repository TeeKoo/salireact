import React, { Component, PropTypes } from 'react'
import 'jQuery'
import 'datatables.net';
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Comments from '../components/Comments'
import CommentArea from '../components/CommentArea'
import { fetchGymIfNeeded } from '../actions'
class SingleGym extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchGymIfNeeded(this.props.params.saliid))
    }

    componentWillUnmount() {

    }

    render() {
        var styles = {
            container: {marginTop: '50px'},
            liked: {color: '#4898d6'},
            disliked: {color: '#4898d6'},
            neutral: {color: '#808080'},
            map: {
                width: '100%',
                height: '500px',
                border: 0
            }
        }

        const { gym } = this.props
        var loader;
        var iframeUrl = "";
        if (gym.address) {
            loader = "";
            iframeUrl = '//www.google.com/maps/embed/v1/place?q='+gym.address.replace(/<br\/>/g, " ")+'&zoom=17&key=AIzaSyBBLo4I0duRrx3pvcRG3-muCt1TIC4qyeU';
        } else {
            loader = <div>Ladataan..</div>;
        }

        return (
            <div>
                <Header />
                <div className="container" style={styles.container}>
                    {loader}
                    <div className="row">
                        <div className="col-md-6 md-margin-bottom-50" id="iframecontainer">
                            {gym.address ? <iframe frameBorder="0" style={styles.map} src={iframeUrl}></iframe> : '' }
                        </div>
                        <div className="col-md-6">
                            <div className="gym-heading">
                                <h2>{gym.name}</h2>
                            </div>
                            <p>{gym.address ? gym.address.replace(/<br\/>/g, " "):''}</p>
                            <p><a href={gym.url}>{gym.url}</a></p>
                            <p>{gym.open}</p>
                            <div className="like-section">
                                <span className="fa fa-thumbs-up likes" style={styles.neutral}> <span className="votenumbers">{gym.upvotes || 0}</span></span>
                                <span className="fa fa-thumbs-down likes" style={styles.neutral}> <span className="votenumbers">{gym.downvotes || 0}</span></span>
                            </div>
                        </div>
                        { gym.comments ? <Comments comments={gym.comments}  /> : ''}
                        <CommentArea saliParam={this.props.params.saliid} />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

SingleGym.propTypes = {
    dispatch: PropTypes.func.isRequired,
    gym: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        gym: state.gyms.item || {}
    };
}

export default connect(
    mapStateToProps
)(SingleGym)
