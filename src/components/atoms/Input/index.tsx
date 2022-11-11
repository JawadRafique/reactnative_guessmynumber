import { View, Text, TextInput } from 'react-native'
import { ThemeColors } from '../../../utils/constant';
import { styles } from './input.styles';

export type Props = {
    inputVal: string;
    setInputVal: React.Dispatch<React.SetStateAction<string>>
};

const CustomInput: React.FC<Props> = ({inputVal,setInputVal}) => {
  return (
    <TextInput
        style={styles.input}
        onChangeText={(val) => setInputVal(val)}
        value={inputVal}
        keyboardType="numeric"
        maxLength={2}
        cursorColor={ThemeColors.secondary}
      />
  )
}

export default CustomInput