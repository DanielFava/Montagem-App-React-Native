// import React, {useState} from 'react';
// import {View, Switch, StyleSheet} from 'react-native';
// import colors from '../../estilos/themes/cor';

// const styles = StyleSheet.create({
//    Container: {
//       // backgroundColor:
//    },
// });

// // console.warn(isEnabled);

// export default function App() {
//    const [isEnabled, setIsEnabled] = useState(false);
//    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

//    return (
//       <View style={styles.Container}>
//          <Switch
//             trackColor={{false: colors.dark, true: colors.light}}
//             thumbColor={isEnabled ? colors.dark : colors.light}
//             ios_backgroundColor="#3e3e3e"
//             onValueChange={toggleSwitch}
//             value={isEnabled}
//          />
//       </View>
//    );
// }

import React, {Component, useState} from 'react';
import colors from '../../estilos/themes/cor';
import {Container} from '../../estilos/themes/geral';
import {Text, View, StyleSheet, Switch} from 'react-native';

export default class Configuracao extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isSwitchOn: false,
      };
   }

   _onToggleSwitch = () =>
      this.setState((state) => ({isSwitchOn: !state.isSwitchOn}));

   render() {
      return (
         <Container>
            <Switch
               value={this.state.isSwitchOn}
               onValueChange={this._onToggleSwitch}
               trackColor={{false: colors.grey, true: colors.grey}}
               thumbColor={this.state.isSwitchOn ? colors.light : colors.dark}
            />
         </Container>
         // <View
         //    style={{
         //       backgroundColor: this.state.isSwitchOn
         //          ? colors.dark
         //          : colors.light,
         //    }}>

         // </View>
      );
   }
}
