import {View, Text, TextInput} from 'react-native';
import React from 'react';

import colors from '../../theme/colors';
import {Control, Controller} from 'react-hook-form';
import {User} from '../../API';

import styles from './styles';

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
export type IEditableUser = Pick<User, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  name: IEditableUserField;
  label: string;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  control,
  name,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={{flex: 1}}>
              <TextInput
                value={value || ''}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={label}
                style={[
                  styles.input,
                  {borderColor: error ? colors.error : colors.border},
                ]}
                multiline={multiline}
              />
              {error && (
                <Text style={{color: colors.error}}>
                  {error.message || 'Error'}
                </Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

export default CustomInput;
