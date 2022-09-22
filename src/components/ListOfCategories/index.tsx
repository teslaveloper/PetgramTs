import React, { useState, useEffect } from 'react'
import { Category } from './Category'
import {
  List, Item
} from './styles'
import { useGetCategories } from '../Hooks/useGetCategories'
import { useHideOnScroll } from '../Hooks/useHideOnScroll';

export const ListOfCategories = () => {
  const { loading, data, error } = useGetCategories()
  const { show } = useHideOnScroll();

  if (loading) return <p>Loading Categories...</p>;
  if (error) return <p>Error</p>;
  if (!data?.categories) return null;

  const { categories } = data

  const renderList = (fixed = false) => (
    <List fixed={fixed}>
      {
        categories.map((category: any) =>
          <Item key={category.id}>
            <Category
              {...category}
              path={`/category/${category.id}`}
            />
          </Item>
        )
      }
    </List>
  )

  return (
    <>
      {loading && 'loading...'}
      {renderList()}
      {show && renderList(true)}
    </>
  )
}
