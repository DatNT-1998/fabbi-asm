import React, { useState } from 'react';
import { Form, Select, Button, InputNumber } from 'antd';

import dishes from '../data/dishes.json';


const StepThree = (props) => {
    const [form] = Form.useForm();
    let data = dishes.dishes;
    let dataDish = [];

    data.map(element => {
        if (element.restaurant === props.location.state.restaurant) {
            dataDish.push(element);
        }
    })

    // console.log(dataDish, 'data Dish can co')

    const handleBackClick = () => {
        props.history.push({
            pathname: `/step2/${props.location.state.restaurant}`,
            state: {
                meal: props.location.state.meal
            }
        })
    }

    const handleNextClick = () => {
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

    const [dish, setDish] = useState('');
    const [numOfServing, setNumOfServing] = useState('  ');


    const handleDishChange = (value) => {
        console.log(value, 'value dish')
        setDish(value);
    }

    const handleNumOfServeChange = (number) => {
        console.log(number, 'number')
        setNumOfServing(number);
    }
    return (
        <Form
            form={form}
            layout="vertical"
        >
            <Form.Item label="Please select a dish">
                <Select onChange={handleDishChange}>
                    {
                        dataDish.map(item => (
                            <Select.Option key={item.id} value={item.name} >{item.name}</Select.Option>
                        ))
                    }
                </Select>
            </Form.Item>
            <Form.Item label="Please enter no of servings">
                <InputNumber value={numOfServing} defaultValue="1" max={10} min={0} onChange={handleNumOfServeChange} />
            </Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button type="primary" onClick={handleBackClick}>Previous</Button>
                <Button type="primary" onClick={handleNextClick}>Next</Button>
            </div>
        </Form>
    );
}

export default StepThree;