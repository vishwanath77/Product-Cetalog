import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json'

export default function Detail() {
  const { name } = useParams()
  const item = data.find(i => i.itemname === name)

  if (!item) return <p>Item not found</p>

  return (
    <div className="detail-container">
      <div className="detail-card">
        <h1>{item.itemname}</h1>
        <p><b>Category:</b> {item.category}</p>

        <img src={item.image} className="detail-img" />

        <div className="props">
          {item.itemprops.map((prop, i) => (
            <p key={i}>
              <b>{prop.label}:</b> {prop.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}