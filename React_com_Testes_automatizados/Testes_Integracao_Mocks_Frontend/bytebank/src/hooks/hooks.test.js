import { useState, useEffect } from "react"
import {renderHook } from '@testing-library/react'

test('Hooks', () => {
  const { result } = renderHook(() => {
    const [nome, setNome] = useState('')
    useEffect(() => {
      setNome('Alice')
    }, [])

    return nome
  })

  expect(result.current).toBe('Alice')
})