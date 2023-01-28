// Import Core Libraries
import { useState } from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// Import Consts
import { Colors } from '../../constant';

// Import Styles
import styles from './styles';

const InputField = ({
  icon,
  error,
  label,
  editable,
  hideInput,
  inputType,
  labelColor,
  defaultValue,
  inputFunction,
  inputMaxLength,
  fieldButtonLabel,
  fieldButtonFunction,
  ...props
}) => {
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
};

InputField.propTypes = {
  icon: PropTypes.element,
  inputType: PropTypes.string,
  labelColor: PropTypes.string,
  inputFunction: PropTypes.func,
  defaultValue: PropTypes.string,
  inputMaxLength: PropTypes.number,
  fieldButtonLabel: PropTypes.string,
  label: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  fieldButtonFunction: PropTypes.func,
  hideInput: PropTypes.bool.isRequired,
};

InputField.defaultProps = {
  icon: null,
  label: '',
  error: null,
  editable: true,
  hideInput: true,
  defaultValue: null,
  inputMaxLength: 255,
  inputType: 'default',
  fieldButtonLabel: '',
  labelColor: Colors.grey,
};

export default InputField;
