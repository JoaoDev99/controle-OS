import {useState, useContext, useRef} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../services/firebaseConnection';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function createUser() {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(value => {
        console.log('User created \n' + value.user.uid);
      })
      .catch(error => console.log(error));
  }

  async function signIn() {
    await signInWithEmailAndPassword(auth, email, password)
      .then(value => {
        console.log('User logged \n' + value.user.uid);
      })
      .catch(error => console.log(error));
  }

  return (
    <SafeAreaView style={styles.containerBackground}>
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Login:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Login"
          placeholderTextColor="#313131"
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Senha:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          placeholderTextColor="#313131"
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </View>
      <TouchableOpacity onPress={() => createUser()}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signIn()}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerBackground: {
    backgroundColor: '#FAFAFA',
    flex: 1,
  },
  container: {
    backgroundColor: '#FAFAFA',
    paddingEnd: 14,
    paddingStart: 14,
    paddingTop: 14,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 50,
    borderRadius: 5,
  },
  inputTitle: {
    color: '#696969',
  },
});
