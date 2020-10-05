import React, { useState } from 'react';
import { Form, Select, Button, InputNumber, Space, Input } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

import dishes from '../data/dishes.json';

let dataNormal = [];

const StepThreeTH = (props) => {
    console.log(props, 'prop step3');
    const [form] = Form.useForm();
    const [dish, setDish] = useState(props.location && props.location.state && props.location.state.dishes ? props.location.state.dishes[0].title : '');
    const [numOfServing, setNumOfServing] = useState(props.location && props.location.state && props.location.state.dishes ? props.location.state.dishes[0].numServe : '');

    // const [dataDishes, setDataDishes] = useState(props.location && props.location.state && props.location.state.dishes ? props.location.state.dishes : []);

    // console.log(dataDishes, 'co hay k nhi');

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
            dataNormal.unshift({
                title: dish,
                numServe: numOfServing
            })

            console.log(dataNormal, 'data normal lllllllllllllll')

            checkDuplicateTitle();

            console.log("dataSend lllll", dataSend)

            props.history.push({
                pathname: `/step4/review`,
                state: {
                    numberPeople: props.location.state.numberPeople,
                    meal: props.location.state.meal,
                    restaurant: props.location.state.restaurant,
                    dish: dataSend
                }
            })
        }
    }

    // kiểm tra trùng title, khi trùng title thì cộng số lượng của numServe cho cái đầu tiên

    let dataSend = [];
    const checkDuplicateTitle = () => {
        let arr = [];
        dataSend = [];
        dataNormal.map(e => {
            if (arr[e.title]) {
                arr[e.title] += e.numServe
            } else arr[e.title] = e.numServe
        })

        for (const key in arr) {
            dataSend.push({
                title: key,
                numServe: arr[key]
            })
        }
    }


    const dataDishes = props.location && props.location.state && props.location.state.dishes ? props.location.state.dishes : [{ title: '', numServe: 1 }];
    const listItems = dataDishes.map((item, index) =>
        <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="Please select a dish" style={{ flex: 0.95 }}>
                <Select value={dish} onChange={handleDishChange}>
                    {
                        dataDish.map(item => (
                            <Select.Option key={item.id} value={item.name}>{item.name}</Select.Option>
                        ))
                    }
                </Select>
            </Form.Item>
            <Form.Item label="Please enter no of servings">
                <InputNumber value={numOfServing === '' ? setNumOfServing(1) : numOfServing} max={10} min={0} onChange={handleNumOfServeChange} />
            </Form.Item>
        </div>
    );



    return (

        <Form
            form={form}
            layout="vertical"
            onValuesChange={(_, allValues) => {
                console.log(allValues, 'all Value Changes')
                dataNormal = allValues.users;
            }
            }
        >
            {listItems}
            <Form.List name="users">
                {(fields, { add, remove }) => {
                    return (
                        <div>
                            {fields.map((field) => (
                                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                                    <Form.Item
                                        label="Please select a dish"
                                        {...field}
                                        name={[field.name, 'title']}
                                        fieldKey={[field.fieldKey, 'title']}
                                        style={{ flex: '0.95', marginRight: '8px' }}

                                    >
                                        <Select >
                                            {
                                                dataDish.map(item => (
                                                    <Select.Option key={item.id} value={item.name}> {item.name} </Select.Option>
                                                ))
                                            }
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        {...field}
                                        label="Please enter no of servings"
                                        name={[field.name, 'numServe']}
                                        fieldKey={[field.fieldKey, 'numServe']}
                                    >
                                        <InputNumber max={10} min={0} />
                                    </Form.Item>

                                    <Form.Item>
                                        <MinusCircleOutlined
                                            style={{ marginTop: '16px', marginLeft: '16px', boxSizing: 'border' }}
                                            onClick={() => {
                                                remove(field.name);
                                            }}
                                        />
                                    </Form.Item>

                                </Space>
                            ))}

                            <Form.Item>
                                <PlusCircleOutlined onClick={() => add()} />
                            </Form.Item>
                        </div>
                    );
                }}
            </Form.List>


            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button type="primary" onClick={handleBackClick}>Previous</Button>
                <Button type="primary" onClick={handleNextClick}>Next</Button>
            </div>
        </Form >
    );
}

export default StepThreeTH;

/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
            </Form.List> */