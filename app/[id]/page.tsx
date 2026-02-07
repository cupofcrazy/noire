"use client"

import { notFound } from "next/navigation"
import { use } from "react"
import { demos } from "@/demos"

type PageProps = {
  params: Promise<{ id: string }>
}

export default function ComponentPage({ params }: PageProps) {
  const { id } = use(params)
  const demo = demos.find((demo) => demo.id === id)

  if (!demo) {
    notFound()
  }

  const DemoComponent = demo.component

  return (
    <div className="flex-1 p-8">
      <h1 className="mb-8 font-semibold">{demo.title}</h1>
      <DemoComponent />
    </div>
  )
}
