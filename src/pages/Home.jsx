import React from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'

export default function Home() {
  const grouped = data.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || []
    acc[item.category].push(item)
    return acc
  }, {})

  return (
    <div className="container">
      <h1>Product Catalog</h1>
      {Object.keys(grouped).map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div className="grid">
            {grouped[cat].map(item => (
              <Link to={`/item/${item.itemname}`} key={item.itemname} className="card">
                <img src={item.image} />
                <p>{item.itemname}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
