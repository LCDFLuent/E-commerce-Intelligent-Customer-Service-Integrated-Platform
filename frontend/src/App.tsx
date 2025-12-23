import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import ProductsPage from './pages/ProductsPage'
import OrdersPage from './pages/OrdersPage'
import LoginPage from './pages/LoginPage'
import './App.css'

const { Header, Content, Footer } = Layout

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: 'white', fontSize: '20px' }}>
        E-commerce Customer Service Platform
      </Header>
      <Content style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        E-commerce Intelligent Customer Service Platform ©2024
      </Footer>
    </Layout>
  )
}

export default App
