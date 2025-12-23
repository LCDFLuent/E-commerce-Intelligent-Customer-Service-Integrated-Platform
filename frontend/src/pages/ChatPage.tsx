import React, { useState } from 'react'
import { Card, Input, Button, List, Avatar } from 'antd'
import { RobotOutlined, UserOutlined } from '@ant-design/icons'

const { TextArea } = Input

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '您好！我是智能客服助手，有什么可以帮您的吗？',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSend = () => {
    if (!inputMessage.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setInputMessage('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: `收到您的消息："${inputMessage}"。我们的AI助手正在开发中！`,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Card title="智能客服对话">
        <List
          style={{ height: '400px', overflow: 'auto', marginBottom: '20px' }}
          dataSource={messages}
          renderItem={item => (
            <List.Item
              style={{
                justifyContent: item.sender === 'user' ? 'flex-end' : 'flex-start',
                padding: '8px 0'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: item.sender === 'user' ? 'row-reverse' : 'row'
              }}>
                <Avatar
                  icon={item.sender === 'user' ? <UserOutlined /> : <RobotOutlined />}
                  style={{ margin: '0 10px' }}
                />
                <div
                  style={{
                    backgroundColor: item.sender === 'user' ? '#1890ff' : '#f0f0f0',
                    color: item.sender === 'user' ? 'white' : 'black',
                    padding: '10px 15px',
                    borderRadius: '10px',
                    maxWidth: '60%'
                  }}
                >
                  {item.text}
                </div>
              </div>
            </List.Item>
          )}
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <TextArea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onPressEnter={(e) => {
              if (!e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            placeholder="输入您的问题..."
            autoSize={{ minRows: 1, maxRows: 4 }}
          />
          <Button type="primary" onClick={handleSend}>
            发送
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default ChatPage
