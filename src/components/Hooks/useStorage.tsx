import { useState } from 'react';

export function useStorage (
    key: string,
    initialValue = false
  ): [bool: boolean , func: (value: boolean) => void] {
  const [value, setValue] = useState(initialValue);

  function setStorage (newValue: any) {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue))
      setValue(newValue)
    } catch (e) {
      setValue(initialValue)
    }
  }

  // function getStorage () {
  //   let val = false
  //   try {
  //     const item = window.localStorage.getItem(key)
  //     val = item !== null ? JSON.parse(item) === true : initialValue
  //     return val
  //   } catch (e) {
  //     val = initialValue
  //   }

  //   return
  // }

  return [value, setStorage]
}
