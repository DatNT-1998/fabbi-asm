import React, { useState } from 'react';

import { Form, InputNumber, Select, Button } from 'antd'


const StepOne = (props) => {
    const [form] = Form.useForm();

    const meals = [
        {
            value: '1',
            label: 'breakfast',
        },
        {
            value: '2',
            label: 'lunch',
        },
        {
            value: '3',
            label: 'dinner',
        },
    ];


    const [meal, setMeal] = useState('$')
    const [numberPeople, setNumberPeople] = useState('')

    const handleMealChange = (value) => {
        setMeal(value)
    }

    const handleNumberPeopleChange = (number) => {
        setNumberPeople(number)
    }

    const handleClick = () => {
        console.log(props);
        props.history.push({
            pathname: `/step2/${meal}`,
            state: { numberPeople: numberPeople, meal: meal }
        })

    }

    return (
        <Form
            form={form}
            layout="vertical"

        >
            <Form.Item label="Please select a meal">
                <Select onChange={handleMealChange}>
                    {
                        meals.map((meal, index) => (
                            <Select.Option key={index} value={meal.label}>{meal.label}</Select.Option>
                        ))
                    }
                </Select>
            </Form.Item>
            <Form.Item label="Please Enter Number of people">
                <InputNumber value={numberPeople} defaultValue={1} max={10} min={1} onChange={handleNumberPeopleChange} />
            </Form.Item>
            <Button type="primary" onClick={handleClick} >Next</Button>
        </Form>
    );
}

export default StepOne;
