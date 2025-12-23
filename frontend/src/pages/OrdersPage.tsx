import React from 'react'
import { Card, Table, Tag } from 'antd'

const OrdersPage: React.FC = () => {
  const columns = [
    {
      title: '订单号',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: '商品',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `¥${amount.toFixed(2)}`
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const color = status === 'delivered' ? 'green' : status === 'pending' ? 'orange' : 'blue'
        return <Tag color={color}>{status}</Tag>
      }
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
  ]

  const sampleData = [
    {
      key: '1',
      orderId: 'ORDER-001',
      product: '示例商品 1',
      amount: 99.99,
      status: 'delivered',
      date: '2024-01-01',
    },
    {
      key: '2',
      orderId: 'ORDER-002',
      product: '示例商品 2',
      amount: 149.99,
      status: 'pending',
      date: '2024-01-02',
    },
  ]

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Card title="我的订单">
        <Table columns={columns} dataSource={sampleData} />
      </Card>
    </div>
  )
}

export default OrdersPage
