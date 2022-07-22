import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {Card} from '../../components/Card';
import {NavHeader} from '../../components/NavHeader';
import {CardButton} from '../../components/CardButton';
import style from './style';
export const List = ({navigation}) => {
  const [isActive, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [Data, setData] = useState([
    {
      id: '1',
      name: 'William',
      phone: '+1',
      email: 'bradelysimon98@gmail.com',
      employee: 'Employment Lawyer',
      img: require('../../assets/man.png'),
      checked: false,
      inChecked: false,
    },
    {
      id: '2',
      name: 'Hamad',
      phone: '+2',
      email: 'bradelysimon98@gmail.com',
      employee: 'Employment Lawyer',
      img: require('../../assets/man.png'),
      checked: false,
      inChecked: false,
    },
    {
      id: '3',
      name: 'Ali',
      phone: '+3',
      email: 'bradelysimon98@gmail.com',
      employee: 'Employment Lawyer',
      img: require('../../assets/man.png'),
      checked: false,
      inChecked: false,
    },
    {
      id: '4',
      name: 'Hassan',
      phone: '+4',
      email: 'bradelysimon98@gmail.com',
      employee: 'Employment Lawyer',
      img: require('../../assets/man.png'),
      checked: false,
      inChecked: false,
    },
    {
      id: '5',
      name: 'Usman',
      phone: '+534556677788',
      email: 'bradelysimon98@gmail.com',
      employee: 'Employment Lawyer',
      img: require('../../assets/man.png'),
      checked: false,
      inChecked: false,
    },
  ]);
  const onCheck = (item, i) => {
    let items = Data;
    items[i].checked = items[i].checked ? !items[i].checked : true;
    console.log('Items', item);
    setData(items);
  };
  const inCheck = (item, i) => {
    let items = Data;
    items[i].inChecked = items[i].inChecked ? !items[i].inChecked : true;
    console.log('Items', item);
    setData(items);
  };

  return (
    <View style={style.mainContainer}>
      <NavHeader
        title={'Manage Lawyers'}
        leftIc={'arrow-back'}
        leftPressed={() => {
          navigation.goBack();
        }}
      />
      <View style={style.ButtonStyle}>
        <Text style={style.textStyle}>Manage Lawyers</Text>
        <CardButton
          txt={'Add Lawyer'}
          ic={'add-outline'}
          onPress={() => {
            navigation.navigate('AddLawayer');
          }}
        />
      </View>
      <View style={style.flatListStyle}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={Data}
          extraData={Data}
          renderItem={({item, index}) => {
            return (
              <Card
                onPress={() => {
                  navigation.navigate('LawyerInfo', {
                    name: item.name,
                    phone: item.phone,
                    employee: item.employee,
                    img: item.img,
                    email: item.email,
                  });
                }}
                txt={item.name}
                source={item.img}
                employee={item.employee}
                email={item.email}
                phone={item.phone}
                rightIc={item.checked ? 'toggle-on' : 'toggle-off'}
                rightPressed={() => {
                  setActive(!isActive);
                  onCheck(item.checked, index);
                }}
                rightColor={item.checked ? '#114D96' : 'gray'}
                title={item.inChecked ? 'Visible' : 'inVisible'}
                backgroundColor={item.inChecked ? '#63A744' : 'gray'}
                leftPressed={() => {
                  inCheck(item.inChecked, index);
                  setVisible(!visible);
                }}
                leftIc={'circle'}
                right={item.inChecked ? -67 : -3}
                left={item.inChecked ? -10 : 5}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
