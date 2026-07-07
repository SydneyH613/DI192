import { useState } from 'react'
import type { FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  selectCategories,
  addCategory,
  deleteCategory,
} from '../features/categories/categoriesSlice'

interface CategorySelectorProps {
  selectedCategoryId: string
  onSelect: (categoryId: string) => void
}

function CategorySelector({
  selectedCategoryId,
  onSelect,
}: CategorySelectorProps) {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(selectCategories)
  const [newCategory, setNewCategory] = useState('')

  const handleAddCategory = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = newCategory.trim()
    if (!trimmed) return
    dispatch(addCategory(trimmed))
    setNewCategory('')
  }

  const handleDeleteCategory = (categoryId: string) => {
    dispatch(deleteCategory(categoryId))
    if (categoryId === selectedCategoryId) {
      const remaining = categories.filter((c) => c.id !== categoryId)
      onSelect(remaining[0]?.id ?? '')
    }
  }

  return (
    <div className="category-selector">
      <div className="category-tabs">
        {categories.map((category) => (
          <div key={category.id} className="category-tab">
            <button
              type="button"
              className={category.id === selectedCategoryId ? 'active' : ''}
              onClick={() => onSelect(category.id)}
            >
              {category.name}
            </button>
            <button
              type="button"
              className="remove-category"
              aria-label={`Delete ${category.name}`}
              onClick={() => handleDeleteCategory(category.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleAddCategory} className="add-category">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New category"
        />
        <button type="submit">Add Category</button>
      </form>
    </div>
  )
}

export default CategorySelector
