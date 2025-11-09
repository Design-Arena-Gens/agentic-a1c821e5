'use client'

interface CapabilityCardProps {
  category: string
  items: string[]
}

export default function CapabilityCard({ category, items }: CapabilityCardProps) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '12px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'
      }}
    >
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '20px',
        color: '#667eea',
        borderBottom: '2px solid #667eea',
        paddingBottom: '10px'
      }}>
        {category}
      </h2>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {items.map((item, itemIdx) => (
          <li
            key={itemIdx}
            style={{
              padding: '10px 0',
              color: '#555',
              fontSize: '0.95rem',
              borderBottom: itemIdx < items.length - 1 ? '1px solid #f0f0f0' : 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <span style={{
              color: '#667eea',
              marginRight: '10px',
              fontSize: '1.2rem'
            }}>
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
