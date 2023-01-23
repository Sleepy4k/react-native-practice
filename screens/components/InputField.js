// Import Core Libraries
import { useState } from 'react';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// Import Const
import { Colors } from '../constant/Colors';

// Import Styles
import { styles } from '../styles/InputFieldStyle';

export default function InputField({
  error = null,
  label = '',
  icon = null,
  editable = true,
  hideInput = true,
  defaultValue = null,
  inputMaxLength = 255,
  inputType = 'default',
  fieldButtonLabel = '',
  labelColor = Colors.grey,
  inputFunction = () => {},
  fieldButtonFunction = () => {},
  ...props
}) {
  const [hidePassword, setHidePassword] = useState(hideInput);

  return (
    <View>
      <View style={styles.inputGroup}>
        {icon}
        {inputType == 'password' ? (
          <TextInput
            autoCorrect={false}
            editable={editable}
            placeholder={label}
            style={styles.input}
            returnKeyType={'next'}
            secureTextEntry={hidePassword}
            keyboardType={inputType}
            maxLength={inputMaxLength}
            defaultValue={defaultValue}
            onChangeText={inputFunction}
            placeholderTextColor={labelColor}
            {...props}
          />
        ) : (
          <TextInput
            autoCorrect={false}
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
            {...props}
          />
        )}

        <TouchableOpacity onPress={fieldButtonFunction} disabled={!editable}>
          <Text style={styles.navigateLink}>{fieldButtonLabel}</Text>
        </TouchableOpacity>

        {inputType == 'password' && (
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={styles.showPassword}
          />
        )}
      </View>
      {error && <Text style={styles.inputError}>{error}</Text>}
    </View>
  );
}
