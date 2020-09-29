import React, { useState } from 'react';
import { Form, Select, Button } from 'antd';
import dishes from '../data/dishes.json';

const StepTwo = (props) => {
    const [form] = Form.useForm();

    const data = dishes.dishes;
    let datafakeRestaurant = [];

    data.map(element => {
        for (let value of element.availableMeals) {
            if (props.location.state.meal === value) {
                datafakeRestaurant.push(element);
            }
        }
    })

    const [restaurant, setRestaurant] = useState('');

    const handleRestaurantChange = (value) => {
        setRestaurant(value);
    }

    const handleBackClick = () => {
        props.history.push({
            pathname: "/"
        })
    }

    const handleNextClick = () => {
        props.history.push({
            pathname: `/step3/${restaurant}`,
            state: {
                numberPeople: props.location.state.numberPeople,
                meal: props.location.state.meal,
                restaurant: restaurant
            }
        })
    }
    return (
        <Form
            form={form}
            layout="vertical"
        >
            <Form.Item label="Please select a Restaurant">
                <Select onChange={handleRestaurantChange}>
                    {
                        datafakeRestaurant.map((item, index) => (
                            <Select.Option key={index} value={item.restaurant}>{item.restaurant}</Select.Option>
                        ))
                    }
                </Select>
            </Form.Item>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button type="primary" onClick={handleBackClick}>Previous</Button>
                <Button type="primary" onClick={handleNextClick}>Next</Button>
            </div>
        </Form>
    )
};

export default StepTwo;