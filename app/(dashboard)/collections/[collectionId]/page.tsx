"use client"

import { useEffect, useState, useCallback } from "react"

import Loader from "@/components/custom ui/Loader"
import CollectionForm from "@/components/collections/CollectionForm"

const CollectionDetails = ({ params }: { params: { collectionId: string }}) => {
  const [loading, setLoading] = useState(true)
  const [collectionDetails, setCollectionDetails] = useState<CollectionType | null>(null)

  // Memoize the getCollectionDetails function to prevent it from being redefined on every render
  const getCollectionDetails = useCallback(async () => {
    try { 
      const res = await fetch(`/api/collections/${params.collectionId}`, {
        method: "GET"
      })
      const data = await res.json()
      setCollectionDetails(data)
      setLoading(false)
    } catch (err) {
      console.log("[collectionId_GET]", err)
    }
  }, [params.collectionId]) // Add params.collectionId as a dependency since it's used inside the function

  useEffect(() => {
    getCollectionDetails()
  }, [getCollectionDetails]) // Include getCollectionDetails in the dependency array

  return loading ? <Loader /> : (
    <CollectionForm initialData={collectionDetails}/>
  )
}

export default CollectionDetails
