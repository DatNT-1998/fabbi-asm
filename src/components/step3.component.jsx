import React, { useState } from 'react';
import { Form, Select, Button, InputNumber, Space, Input } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import dishes from '../data/dishes.json';


const StepThree = (props) => {
    const [form] = Form.useForm();


    const [dish, setDish] = useState(props.location && props.location.state && props.location.state.dish ? props.location.state.dish : '');
    const [numOfServing, setNumOfServing] = useState(props.location && props.location.state && props.location.state.numOfServing ? props.location.state.numOfServing : '');


    const handleDishChange = (value) => {
        setDish(value);
    }

    const handleNumOfServeChange = (number) => {
        setNumOfServing(number);
    }

    let data = dishes.dishes;
    let dataDish = [];

    data.map(element => {
        if (element.restaurant === props.location.state.restaurant) {
            dataDish.push(element);
        }
    })

    const handleBackClick = () => {
        props.history.push({
            pathname: `/step2/${props.location.state.restaurant}`,
            state: {
                meal: props.location.state.meal,
                numberPeople: props.location.state.numberPeople,
                restaurant: props.location.state.restaurant,
            }
        })
    }

    const handleNextClick = () => {
        if (dish === '') {
            alert('please select a dish');
        } else {
            props.history.push({
                pathname: `/step4/review`,
                state: {
                    numberPeople: props.location.state.numberPeople,
                    meal: props.location.state.meal,
                    restaurant: props.location.state.restaurant,
                    dish: dish,
                    numOfServing: numOfServing
                }
            })
        }

    }


    return (
        <Form
            layout="vertical"
            onValuesChange={(changedValues, allValues) => console.log('xxxx changedValues, allValues', changedValues, allValues)
            }
        >
            <Form.List name="users">
                {(fields, { add, remove }) => {
                    return (
                        <div>
                            {fields.map(field => (
                                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'first']}
                                        fieldKey={[field.fieldKey, 'first']}
                                        rules={[{ required: true, message: 'Missing first name' }]}
                                    >
                                        <Input placeholder="First Name" />
                                    </Form.Item>
                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'last']}
                                        fieldKey={[field.fieldKey, 'last']}
                                        rules={[{ required: true, message: 'Missing last name' }]}
                                    >
                                        <Select>
                                            {
                                                dataDish.map(item => (
                                                    <Select.Option key={item.id} value={item.name} >{item.name}</Select.Option>
                                                ))
                                            }
                                        </Select>
                                    </Form.Item>

                                    <MinusCircleOutlined
                                        onClick={() => {
                                            remove(field.name);
                                        }}
                                    />
                                </Space>
                            ))}

                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        add();
                                    }}
                                    block
                                >
                                    <PlusOutlined /> Add field
                </Button>
                            </Form.Item>
                        </div>
                    );
                }}
            </Form.List>
            {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Form.Item label="Please select a dish" style={{ flex: 0.95 }}>
                    <Select value={dish} onChange={handleDishChange}>
                        {
                            dataDish.map(item => (
                                <Select.Option key={item.id} value={item.name} >{item.name}</Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="Please enter no of servings">
                    <InputNumber value={numOfServing === '' ? setNumOfServing(1) : numOfServing} max={10} min={0} onChange={handleNumOfServeChange} />
                </Form.Item>
            </div>
            <Form.List name="users">
                {(fields, { add, remove }) => {
                    return (
                        <div>
                            {fields.map((field) => (
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Form.Item label="Please select a dish" style={{ flex: 0.95 }} {...field}>
                                        <Select value={dish} onChange={handleDishChange}>
                                            {
                                                dataDish.map(item => (
                                                    <Select.Option key={item.id} value={item.name} >{item.name}</Select.Option>
                                                ))
                                            }
                                        </Select>
                                    </Form.Item>
                                    <Form.Item {...field} label="Please enter no of servings">
                                        <InputNumber value={numOfServing === '' ? setNumOfServing(1) : numOfServing} max={10} min={0} onChange={handleNumOfServeChange} />
                                        <MinusCircleOutlined
                                            style={{ marginLeft: '10px' }}
                                            onClick={() => {
                                                remove(field.name);
                                            }}
                                        />
                                    </Form.Item>

                                </div>
                            ))}
                            <Form.Item>
                                <PlusCircleOutlined onClick={() => add()} />
                            </Form.Item>
                        </div>
                    );
                }}
            </Form.List> */}

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button type="primary" onClick={handleBackClick}>Previous</Button>
                <Button type="primary" onClick={handleNextClick}>Next</Button>
            </div>
        </Form >
    );
}

export default StepThree;