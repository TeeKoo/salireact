import React, { Component, PropTypes } from 'react'
import 'jQuery'
import 'datatables.net';
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Comments from '../components/Comments'
import CommentArea from '../components/CommentArea'
import { fetchGymIfNeeded, likeGym, dislikeGym } from '../actions'
class SingleGym extends Component {

    constructor(props) {
        super(props);
        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchGymIfNeeded(this.props.params.saliid))
    }

    componentWillUnmount() {

    }

    like(){
        const { dispatch } = this.props
        dispatch(likeGym(this.props.params.saliid)).then(function(msg){
            if (msg.like.message){
                alert(msg.like.message)
            }
        });
    }

    dislike(){
        const { dispatch } = this.props
        dispatch(dislikeGym(this.props.params.saliid)).then(function(msg){
            if (msg.like.message){
                alert(msg.like.message)
            }
        });
    }


    render() {
        var styles = {
            container: {marginTop: '50px'},
            liked: {color: '#4898d6'},
            disliked: {color: '#bb2121'},
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
            iframeUrl = '//www.google.com/maps/embed/v1/place?q='+encodeURI(gym.address.replace(/<br\/>/g, " "))    +'&zoom=17&key=AIzaSyBBLo4I0duRrx3pvcRG3-muCt1TIC4qyeU';
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
                                <span className="fa fa-thumbs-up likes" style={styles.liked} onClick={this.like}> <span className="votenumbers">{gym.upvotes || 0}</span></span>
                                <span className="fa fa-thumbs-down likes" style={styles.disliked} onClick={this.dislike}> <span className="votenumbers">{gym.downvotes || 0}</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={styles.container}>
                        {gym.comments && gym.comments.map(function(comment, i){
                            return <Comments key={comment.id} comment={comment.comment} user={comment.posted_by} created_at={comment.created_at}/>
                        })}
                    </div>
                    <div className="row">
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
