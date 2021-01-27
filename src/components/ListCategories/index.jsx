import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-api-ruben.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })

    return () => document.removeEventListener('scroll')
  }, [])

  return { categories, loading }
}

export const ListCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200
      setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
  }, [])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )

  if (loading) {
    return 'Cargando . . .'
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
