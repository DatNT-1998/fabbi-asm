import { Button, Form } from 'antd';
import React from 'react';

const StepFour = (props) => {
    const [form] = Form.useForm();

    const { restaurant, meal, dish, numberPeople } = props.location.state;

    console.log('Mang cac dish duoc su dung', dish);
    console.log('location', props.location.state);

    const handleBackClick = () => {
        props.history.push({
            pathname: `/step3/${props.location.state.restaurant}`,
            state: {
                meal: props.location.state.meal,
                restaurant: props.location.state.restaurant,
                numberPeople: props.location.state.numberPeople,
                dishes: dish,

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
                <div className="dish-title" > <span>Dishes:</span> <ul className="review-dish"> {dish.map((item, index) => (
                    <li key={index}> <span> {item.title} </span> - <span> {item.numServe} </span>  </li>
                ))}
                </ul>
                </div>
            </Form>
            <div className="buttons">
                <Button type="primary" onClick={handleBackClick}> Previous </Button>
                <Button type="primary" onClick={handleSubmit}> Submit </Button>
            </div>
        </div >

    )
}

export default StepFour;