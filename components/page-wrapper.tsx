"use client"

import type React from "react"

import { useState } from "react"
import { LoadingScreen } from "./loading-screen"

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>{children}</div>
    </>
  )
}
