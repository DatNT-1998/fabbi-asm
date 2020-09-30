import React, { useState } from 'react';
import { Form, Select, Button, InputNumber } from 'antd';

import dishes from '../data/dishes.json';


const StepThree = (props) => {
    const [form] = Form.useForm();
    let data = dishes.dishes;
    let dataDish = [];

    console.log(props, 'props step 3')


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

    const [dish, setDish] = useState(props.location && props.location.state && props.location.state.dish ? props.location.state.dish : '');
    const [numOfServing, setNumOfServing] = useState(props.location && props.location.state && props.location.state.numOfServing ? props.location.state.numOfServing : '');


    const handleDishChange = (value) => {
        setDish(value);
    }

    const handleNumOfServeChange = (number) => {
        setNumOfServing(number);
    }
    return (
        <Form
            form={form}
            layout="vertical"
        >
            <Form.Item label="Please select a dish">
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button type="primary" onClick={handleBackClick}>Previous</Button>
                <Button type="primary" onClick={handleNextClick}>Next</Button>
            </div>
        </Form>
    );
}

export default StepThree;