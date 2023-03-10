import {useState, useContext, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from "@react-navigation/native";

const clients = [
  {name: 'Cineshow', id: '967'},
  {name: '365 Supermercados', id: '260'},
  {name: 'Biota', id: '263'},
];

export default function AdicionarOS() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(clients);
  const [selectedClient, setSelectedClient] = useState('');

  const [steps, setSteps] = useState([]);

  const searchRef = useRef();
  const onSearch = search => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(clients);
    }
  };

  return (
    <SafeAreaView style={styles.containerBackground}>
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Cliente:</Text>
        <TouchableOpacity
          style={styles.dropdownSelector}
          onPress={() => {
            setClicked(!clicked);
          }}>
          <Text>{selectedClient == '' ? 'Empresa' : selectedClient}</Text>
          {clicked ? (
            <Icon name="arrow-drop-up" size={30} />
          ) : (
            <Icon name="arrow-drop-down" size={30} />
          )}
        </TouchableOpacity>
        {clicked ? (
          <View
            style={{
              elevation: 5,
              marginTop: 20,
              height: 300,
              alignSelf: 'center',
              width: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Buscar..."
              value={search}
              ref={searchRef}
              onChangeText={txt => {
                onSearch(txt);
                setSearch(txt);
              }}
              style={{
                width: '90%',
                height: 50,
                alignSelf: 'center',
                borderWidth: 0.2,
                borderColor: '#8e8e8e',
                borderRadius: 7,
                marginTop: 20,
                paddingLeft: 20,
              }}
            />

            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '85%',
                      alignSelf: 'center',
                      height: 50,
                      justifyContent: 'center',
                      borderBottomWidth: 0.5,
                      borderColor: '#8e8e8e',
                    }}
                    onPress={() => {
                      setSelectedClient(item.name);
                      setClicked(!clicked);
                      onSearch('');
                      setSearch('');
                    }}>
                    <Text style={{fontWeight: '600'}}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
        <Text style={styles.inputTitle}>N??mero do Pedido:</Text>
        <TextInput style={styles.textInput} keyboardType="numeric" />

        <Text style={styles.inputTitle}>Prazo:</Text>
        <TextInput style={styles.textInput} keyboardType="numeric" />

        

        <Text style={styles.inputTitle}>Data inicial do pedido:</Text>
      </View>
      <View style={styles.containerDate}>
        <Button title="Selecione a data" onPress={() => setOpen(true)} />
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        mode={'date'}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => { 
          setOpen(false);
        }}
      />
      <TouchableOpacity style={styles.textInput} onPress={() => navigation.navigate("Steps")}>
        <Text>
          Seguir
        </Text>
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
  containerDate: {
    backgroundColor: '#FAFAFA',
    paddingEnd: 14,
    paddingStart: 14,
    paddingTop: 10,
    width: 200,
  },
  containerOs: {
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
  },
  steps: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 10,
    marginBottom: 14,
    marginLeft: 10,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    width: 100,
    alignItems: 'center',
  },
  containerSteps: {
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
    flexWrap: 'wrap',
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
  buttonDate: {},
  containerAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 20,
    marginLeft: 20,
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText: {
    fontSize: 12,
  },
  dropdownSelector: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DFDFDF',
    alignSelf: 'center',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
  },
  inputTitle: {
    color: '#696969',
  },
});
