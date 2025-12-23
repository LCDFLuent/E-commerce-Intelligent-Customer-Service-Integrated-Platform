import React from 'react'
import { Card, List, Button, Tag } from 'antd'

interface Product {
  id: number
  name: string
  price: number
  category: string
  description: string
}

const ProductsPage: React.FC = () => {
  const sampleProducts: Product[] = [
    {
      id: 1,
      name: '示例商品 1',
      price: 99.99,
      category: '电子产品',
      description: '这是一个示例商品'
    },
    {
      id: 2,
      name: '示例商品 2',
      price: 149.99,
      category: '家居用品',
      description: '这是另一个示例商品'
    }
  ]

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1>商品列表</h1>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4 }}
        dataSource={sampleProducts}
        renderItem={item => (
          <List.Item>
            <Card
              title={item.name}
              extra={<Tag color="blue">{item.category}</Tag>}
              actions={[
                <Button type="primary" key="buy">购买</Button>,
                <Button key="details">详情</Button>
              ]}
            >
              <p>{item.description}</p>
              <p style={{ fontSize: '24px', color: '#ff4d4f', fontWeight: 'bold' }}>
                ¥{item.price}
              </p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ProductsPage
