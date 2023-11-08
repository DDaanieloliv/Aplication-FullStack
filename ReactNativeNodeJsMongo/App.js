import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';

const store = createStore(reducer);

const Stack = createStackNavigator();

const myOptions = {
  title: 'App de Exemplo',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#006aff',
  },
};
function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={myOptions} />
        <Stack.Screen
          name="Create"
          component={CreateEmployee}
          options={{ ...myOptions, title: 'Funcionário' }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ ...myOptions, title: 'Perfil do Funcionário' }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

// Baixar Projeto: “ReactNativeNodeJsMongo.zip”
// 2. Abrir pasta do projeto no VS Code
// 3. Abra dois terminais. Um na raiz do projeto e outro na pasta "server"
// 4. Rode "npm install" nos dois projetos (terminais)
// 5. No terminal do "server" rode: "node app.js“

// 6. Abra um novo terminal e descubra o ip do seu computador "ipconfig"
// 7. Substitua as chamadas de API no projeto react native para o ip do seu computador

// 8. No terminal do app react native rode: "expo start"
// 9. Tente ler o QR Code gerado no aplicativo expo go no seu telefone (certifique-se que ambos estejam na mesma rede)
// 10. Teste o app e procure fazer modificações

// Atenção:
// Melhore o código do projeto;
// Adicione mais um atributo a entidade de funcionários.