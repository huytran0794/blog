import React, { useState } from 'react'

const LoadingBar = ({progress}) => {

  return (
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={0}
      />
  )
}

export default LoadingBar