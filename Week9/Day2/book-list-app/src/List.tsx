import type { ReactNode } from 'react'

interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => ReactNode
}

function List<T extends { id: number | string }>({
  items,
  renderItem,
}: ListProps<T>) {
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

export default List
