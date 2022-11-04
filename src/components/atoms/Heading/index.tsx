import {Text, View } from 'react-native'
import { styles } from './heading.styles';

export type Props = {
    title: string;
};

const CustomHeading: React.FC<Props> = ({title}) => {
  return (
      <Text style={styles.text}>{title}</Text>
  )
}

export default CustomHeading;
