import { IMAGE } from '@/assets'
import React, { useEffect, useState } from 'react'

export interface ImageProps {
  src: string | null | undefined
  alt: string
  withPlaceholder?: boolean
  imageProps?: React.ComponentPropsWithoutRef<'img'>
  className?: string
}

export const Image = (props: ImageProps) => {
  const { className, alt, src, imageProps, withPlaceholder = true } = props
  const [error, setError] = useState(!src)
  const isPlaceholder = withPlaceholder && error
  useEffect(() => {
    setError(!src)
  }, [src])
  return (
    <>
      {!isPlaceholder ? (
        <img
          className={className}
          src={src as any}
          alt={alt}
          onError={(event) => {
            setError(true)
            typeof imageProps?.onError === 'function' &&
              imageProps.onError(event)
          }}
          {...imageProps}
        />
      ) : (
        <img src={IMAGE.DEFAULT} alt={alt} className={className} />
      )}
    </>
  )
}
