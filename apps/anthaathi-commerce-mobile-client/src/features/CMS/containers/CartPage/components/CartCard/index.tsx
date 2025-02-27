import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {CartPageComponentType} from '../../../../types/common';
import {useIntl} from 'react-intl';
import {Card, ProgressBar} from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export interface CartCardProps {
  title: string;
  handlePress?: () => void;
  statusIcon: string;
  statusTitle: string;
  deliveryDate: string;
  deliveryBy: string;
  noOfItems: string;
  imageList: string[];
}

const CartCard = ({
  title,
  handlePress,
  statusIcon,
  statusTitle,
  deliveryDate,
  deliveryBy,
  noOfItems,
  imageList,
}: CartCardProps) => {
  const intl = useIntl();
  return (
    <Card
      style={{
        marginHorizontal: 10,
        borderColor: '#E3E2E7',
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 5,
      }}
      testID="cartCard">
      <Card.Content>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
            {title}
          </Text>

          <Pressable onPress={handlePress} testID="handlePressBasketItem">
            <Text
              variant="titleMedium"
              style={{
                marginBottom: 9,
                textDecorationLine: 'underline',
                fontSize: 14,
                color: '#008D3E',
              }}>
              {intl.formatMessage({defaultMessage: 'View Details'})}
            </Text>
          </Pressable>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <SimpleLineIcons name={statusIcon} size={18} color="#0f8443" />
          <Text
            style={{
              fontSize: 14,
              color: '#0f8443',
              fontWeight: '400',
              marginLeft: 10,
            }}>
            {statusTitle}
          </Text>
        </View>
        <ProgressBar progress={0.8} color="#0f8443" />
        <View style={{marginVertical: 5}}>
          <TextData
            title={intl.formatMessage({defaultMessage: 'Delivered on'})}
            subtitle={deliveryDate}
          />
          <TextData
            title={intl.formatMessage({defaultMessage: 'Sold by'})}
            subtitle={deliveryBy}
          />
        </View>
        <View style={{marginVertical: 5}}>
          <Text
            style={{
              color: '#364A15',
              fontSize: 14,
              fontWeight: '600',
              marginVertical: 5,
            }}>
            {noOfItems}
          </Text>
          <View style={{flexDirection: 'row'}}>
            {imageList.map((imageUrl, index) => (
              <Image
                key={index}
                source={{uri: imageUrl}}
                style={{height: 35, width: 25, marginRight: 5, borderRadius: 2}}
              />
            ))}
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const TextData = ({title, subtitle}: {title: string; subtitle: string}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text
        style={{
          fontSize: 12,
          color: '#364A15',
          fontWeight: '400',
        }}>
        {title}
      </Text>

      <Text
        style={{
          fontSize: 12,
          color: '#364A15',
          fontWeight: '600',
          marginLeft: 5,
        }}>
        {subtitle}
      </Text>
    </View>
  );
};

export default CartCard;

export const CartCardCMSInput = {
  _component: CartPageComponentType.CartCard,
  component: CartCard,
};
