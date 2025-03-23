import Spline from '@splinetool/react-spline/next'
import React, { Suspense } from 'react'

export default function SplineHearth() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline scene='https://prod.spline.design/Y2G4uvj5Ge3Sd0XL/scene.splinecode' />
    </Suspense>
  )
}
