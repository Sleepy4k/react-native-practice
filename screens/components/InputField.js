// Import Core Libraries
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// Import Styles
import { styles } from '../styles/InputFieldStyle';

export default function InputField({
  icon,
  label,
  editable = true,
  inputType = 'default',
  labelColor = '#808080',
  defaultValue,
  inputFunction,
  inputMaxLength = 255,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View style={styles.inputGroup}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          editable={editable}
          placeholder={label}
          style={styles.input}
          returnKeyType={'next'}
          secureTextEntry={true}
          keyboardType={inputType}
          maxLength={inputMaxLength}
          defaultValue={defaultValue}
          onChangeText={inputFunction}
          placeholderTextColor={labelColor}
        />
      ) : (
        <TextInput
          editable={editable}
          placeholder={label}
          style={styles.input}
          returnKeyType={'next'}
          secureTextEntry={false}
          keyboardType={inputType}
          maxLength={inputMaxLength}
          defaultValue={defaultValue}
          onChangeText={inputFunction}
          placeholderTextColor={labelColor}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction} disabled={!editable}>
        <Text style={styles.navigateLink}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
