import { Button, Form } from 'antd';
import React from 'react';

const StepFour = (props) => {
    const [form] = Form.useForm();

    console.log(props, 'ddddddd')
    const { restaurant, numOfServing, meal, dish, numberPeople } = props.location.state;

    const handleBackClick = () => {
        props.history.push({
            pathname: `/step3/${restaurant}`,
            state: {
                meal: { meal },
                restaurant: { restaurant },
                numberPeople: { numberPeople }
            }
        })
    }

    const handleSubmit = () => {
        alert("Thank you for using our services!!")
    }
    return (
        <div>
            <Form
                form={form}
                className="ant-form-customize"
            >
                <div> Meal: <span>{meal}</span> </div>
                <div> No of People: <span>{numberPeople}</span> </div>
                <div> Restaurant: <span>{restaurant}</span> </div>
                <div> Dishes: <span> {dish} - {numOfServing} </span> </div>
            </Form>
            <div className="buttons">
                <Button type="primary" onClick={handleBackClick}> Previous </Button>
                <Button type="primary" onClick={handleSubmit}> Submit </Button>
            </div>
        </div>

    )
}

export default StepFour;