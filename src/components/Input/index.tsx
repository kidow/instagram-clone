import * as React from 'react'
import styled from '@emotion/native'

const Container = styled.View`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border-radius: 4px;
  background-color: #fafafa;
  border-width: 1px;
  border-color: #d3d3d3;
`
const InputField = styled.TextInput`
  flex: 1;
  color: #292929;
`

export interface Props {
  placeholder?: string
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad'
  secureTextEntry?: boolean
  style?: Object
  clearMode?: boolean
  onChangeText?: (text: string) => void
}

const ReInput = ({
  placeholder,
  keyboardType = 'default',
  secureTextEntry,
  style,
  clearMode,
  onChangeText
}: Props) => {
  return (
    <Container style={style}>
      <InputField
        selectionColor="#292929"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoCorrect={false}
        allowFontScaling={false}
        placeholderTextColor="#c3c2c8"
        placeholder={placeholder}
        clearButtonMode={clearMode ? 'while-editing' : 'never'}
        onChangeText={onChangeText}
      />
    </Container>
  )
}

export default ReInput
