import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export class PickerItemComponent extends Component {
  static propTypes = {
    pickedLocations: PropTypes,
  };

  render() {
    return (
      <View>
        <Text> pickedLocations </Text>
      </View>
    );
  }
}

const mapStateToProps = state => console.log(state);

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PickerItemComponent)
