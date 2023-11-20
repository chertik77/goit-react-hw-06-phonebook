import { Input, LinearProgress, Stack, Typography } from '@mui/joy'
import { forwardRef, useState } from 'react'
import { calculatePasswordStrength } from './calculatePasswordStrength'

export const PasswordMeterInput = forwardRef(({ onChange, value, ...props }, ref) => {
  const [localValue, setLocalValue] = useState(value || '')

  const handleChange = e => {
    const newValue = e.target.value
    setLocalValue(newValue)
    onChange(newValue)
  }

  const strength = calculatePasswordStrength(localValue)

  return (
    <Stack spacing={0.5} sx={{ '--hue': Math.min(localValue.length * 10, 120) }}>
      <Input type='password' value={localValue} onChange={handleChange} ref={ref} {...props} />
      <LinearProgress
        determinate
        size='sm'
        value={calculatePasswordStrength(localValue)}
        sx={{ bgcolor: 'background.level3', color: 'hsl(var(--hue) 80% 40%)' }}
      />
      <Typography level='body-xs' sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}>
        {strength === 0 && 'Empty or too weak'}
        {strength === 25 && 'Very weak - add numbers, caps, or symbols'}
        {strength === 50 && 'Weak - try adding uppercase letters or special characters'}
        {strength === 75 && 'Strong - try adding special characters for extra security'}
        {strength === 100 && 'Very strong - your password is secure'}
      </Typography>
    </Stack>
  )
})