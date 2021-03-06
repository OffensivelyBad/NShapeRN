import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { SimpleTableView } from '../components/common/';

class SettingsScreen extends PureComponent {

  static navigationOptions = {
    title: 'Settings',
  }

  constructor(props) {
    super(props);
    this.state = {
      cells: [
        {id: '1', title: 'Exercises', screen: 'SetupExercises', hasSwitch: false, toggled: false},
        {id: '2', title: 'Sounds', screen: null, hasSwitch: true, toggled: false},
        {id: '3', title: 'Credits', screen: 'Credits', hasSwitch: false, toggled: false},
      ]
    }
  }

  _navigateToScreen = (route) => {
    const navigateAction = this.props.navigation.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  _onItemTap = (item) => {
    console.log(item);
    if (item.screen && !item.hasSwitch) {
      this._navigateToScreen(item.screen);
    }
    else if (item.hasSwitch) {
      // Handle toggling the switch
    }
  }

  _onSwitchToggled = (newItem) => {
    const newCells = Object.assign([], this.state.cells);
    let foundIndex = newCells.findIndex((item) => item.id === newItem.id);
    newItem.toggled = !newItem.toggled;
    newCells[foundIndex] = newItem;
    this.setState({ cells: newCells });
  }

  render() {
    return (
      <View style={styles.containerViewStyle}>
        <SimpleTableView data={this.state.cells} onSwitchToggled={this._onSwitchToggled} onPressItem={this._onItemTap} />
      </View>
    );
  }
}

const styles = {
  containerViewStyle: {
    flex: 1
  }
}

export default SettingsScreen;
