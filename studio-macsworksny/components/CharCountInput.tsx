import {useCallback} from 'react'
import {Stack, Text, TextInput} from '@sanity/ui'
import {Schema, set, unset, Rule} from 'sanity'
import {SchemaType} from 'sanity'

interface CharCountInputProps {
  elementProps: React.InputHTMLAttributes<HTMLInputElement>
  value?: string
  onChange: (patch: any) => void
  validationError?: string
}
export const CharCountInput = (props: CharCountInputProps) => {
  const {elementProps, value = ''} = props

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.currentTarget.value
      props.onChange(nextValue ? set(nextValue) : unset())
    },
    [props],
  )

  return (
    <Stack space={2}>
      <TextInput {...elementProps} type="text" onChange={handleChange} value={value} />
      <Text>Characters: {value.length}</Text>
      {props.validationError && <Text style={{color: 'red'}}>{props.validationError}</Text>}
    </Stack>
  )
}
