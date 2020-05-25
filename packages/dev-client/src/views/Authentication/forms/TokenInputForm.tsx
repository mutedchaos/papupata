import React, { createRef, useCallback, useState } from 'react'
import { PageHeader } from '../../../commonStyles'
import { mutateStore } from '../../../utils/store'
import useAutoFocusInput from '../../../utils/useAutoFocusInput'
import { form } from './common'

interface Props {
  retryAuth(): void
}

export default function TokenInputForm({ retryAuth }: Props) {
  const [token, setToken] = useState('')

  const updateState = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setToken(e.target.value), [])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      mutateStore((store) => {
        store.authentication = { token }
      })

      retryAuth()
    },
    [token, retryAuth]
  )

  const inputRef = createRef<HTMLInputElement>()

  useAutoFocusInput(inputRef)

  return (
    <>
      <PageHeader>Log in</PageHeader>
      <p>Please enter your authentication token.</p>
      <form onSubmit={handleSubmit}>
        <form.Entry>
          <form.FormLabel>Token</form.FormLabel>
          <form.FormInput ref={inputRef} style={{ minWidth: '600px' }} onChange={updateState} value={token} />
        </form.Entry>
        <form.Submit>Log in</form.Submit>
      </form>
    </>
  )
}