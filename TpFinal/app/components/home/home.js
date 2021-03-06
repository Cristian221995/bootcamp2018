'use strict';

import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import styles from '../../styles/style';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/'; //Import your actions
import TimeLine from '../timeline';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        this.props.getTimeline(this.props.config);
        
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            
            return (
                <TimeLine 
                    data={this.props.data}
                    loading={this.props.loading}
                    reload= {this.props.getTimeline}
                    config={this.props.config}
                    loadContent={this.props.getMoreTweets}
                />
            );
        }
    }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.TimelineReducer.loading,
        data: state.TimelineReducer.data,
        config: {
            notVerified:state.ConfigReducer.notVerified,
            notFollow:state.ConfigReducer.notFollow,
            defaultProfile:state.ConfigReducer.defaultProfile,
            containsLinks:state.ConfigReducer.containsLinks,
            textTruncated:state.ConfigReducer.textTruncated,
        }
    }

}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);

