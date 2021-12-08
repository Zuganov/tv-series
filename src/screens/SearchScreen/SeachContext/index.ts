import { useDebounce } from '@common/hooks/useDebounce'
import { useState } from 'react'
import { createContainer } from 'unstated-next'

const useSearchContext = () => {
  const [term, setTerm] = useState<string>('')

  const debouncedTerm = useDebounce(term, 1000)

  return {
    term,
    setTerm,
    debouncedTerm,
  }
}

export const SearchContext = createContainer(useSearchContext)
