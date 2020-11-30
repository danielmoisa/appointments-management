import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';

import '../scss/SignUp.scss'



const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const createAccount = async () => {
        const result = await axios({ 
            method: 'POST',
            url: 'http://localhost:4000/auth/signup',
            headers: { 'Content-Type': 'application/json' },
            data: { username, password }
        })
    }

    

    return (
        <Row className="sign-up-wrapper">
            <Col offset={8} xs={{ offset: 1 }} sm={{ offset: 4 }} md={{ offset: 8 }}></Col>

            <Col span={8} xs={{ span: 22 }} sm={{ span: 16 }} md={{ span: 8 }} className="signup-form">
                <h2 className="title">Create new account</h2>
                <p className="description">Add your informations below and create a new acccount in 10 seconds.</p>
                <Form
                name="sign-up"
                initialValues={{ remember: true }}
                onFinish={createAccount}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input value={username} onChange={ e => setUsername(e.target.value) }/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password value={password} onChange={ e => setPassword(e.target.value) } />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Create account
                        </Button>
                    </Form.Item>
                </Form>     
            </Col>

            <Col  offset={8} xs={{ offset: 1 }} sm={{ offset: 4 }} md={{ offset: 8 }}></Col>
        </Row>     
        )
}

export default SignUp