import { useEffect, useState, useRef } from 'react'

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useNearScreen ({
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false
  }: Args):[bol: boolean, el: React.MutableRefObject<HTMLDivElement | null>] {
  const refElement = useRef<HTMLDivElement | null>(null)
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const frozen = entry?.isIntersecting && freezeOnceVisible

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  useEffect(() => {
    const node = refElement?.current // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [refElement, JSON.stringify(threshold), root, rootMargin, frozen])

  let visible = !!entry?.isIntersecting || false

  return [ visible, refElement ]
}
