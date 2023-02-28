import {useState, useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import OS from '../../components/OS';
import Button from '../../components/ButtonPlus';

export default function Home() {
  
  const [products, setProducts] = useState([
    {
      id: '10-2023',
      client: 'Cine Show',
      term: '20/03/2023',
      qtd: 100,
    },
    {
      id: '50-2023',
      client: '365 Supermercados',
      term: '25/03/2023',
      qtd: 150,
    },
    {
      id: '40-2023',
      client: 'Pérola',
      term: '30/03/2023',
      qtd: 120,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerAdd}>
        <Text style={styles.title}>Ordens de Serviço</Text>
        <Button/>
      </View>

      <View>
        <View style={styles.containerOs}>
          <Text style={styles.title2}> Abertas </Text>
          <Text style={styles.title2}> Finalizadas </Text>
        </View>

        <FlatList
          styles={styles.list}
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <OS data={item} addToCart={() => handleAddCart(item)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingEnd: 14,
    paddingStart: 14,
    paddingTop: 14,
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
    marginTop: 10
  },
  containerAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#696969'
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 20,
    marginLeft: 20,
    color: '#696969'
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
});