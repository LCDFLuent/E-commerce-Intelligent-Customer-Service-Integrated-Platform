import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Button } from 'antd'
import { MessageOutlined, ShoppingOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'

const HomePage: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
        欢迎使用智能客服平台
      </h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            style={{ textAlign: 'center' }}
            cover={<MessageOutlined style={{ fontSize: '48px', padding: '20px' }} />}
          >
            <Card.Meta
              title="智能客服"
              description="AI驱动的智能对话助手"
            />
            <Link to="/chat">
              <Button type="primary" style={{ marginTop: '10px' }}>开始对话</Button>
            </Link>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            style={{ textAlign: 'center' }}
            cover={<ShoppingOutlined style={{ fontSize: '48px', padding: '20px' }} />}
          >
            <Card.Meta
              title="商品浏览"
              description="浏览所有商品"
            />
            <Link to="/products">
              <Button type="primary" style={{ marginTop: '10px' }}>浏览商品</Button>
            </Link>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            style={{ textAlign: 'center' }}
            cover={<ShoppingCartOutlined style={{ fontSize: '48px', padding: '20px' }} />}
          >
            <Card.Meta
              title="订单管理"
              description="查看和管理订单"
            />
            <Link to="/orders">
              <Button type="primary" style={{ marginTop: '10px' }}>我的订单</Button>
            </Link>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            style={{ textAlign: 'center' }}
            cover={<UserOutlined style={{ fontSize: '48px', padding: '20px' }} />}
          >
            <Card.Meta
              title="用户登录"
              description="登录您的账户"
            />
            <Link to="/login">
              <Button type="primary" style={{ marginTop: '10px' }}>登录</Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default HomePage
