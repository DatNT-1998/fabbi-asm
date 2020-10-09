import React, { useState } from "react";

import { Form, InputNumber, Select, Button } from "antd";

const StepOne = (props) => {
  const [form] = Form.useForm();
  const meals = [
    {
      value: "1",
      label: "breakfast",
    },
    {
      value: "2",
      label: "lunch",
    },
    {
      value: "3",
      label: "dinner",
    },
  ];

  const [numberPeople, setNumberPeople] = useState(
    props.location && props.location.state && props.location.state.numberPeople
      ? props.location.state.numberPeople
      : ""
  );


  const [meal, setMeal] = useState(
    props.location && props.location.state && props.location.state.meal
      ? props.location.state.meal
      : ""
  );
  const handleMealChange = (value) => {
    setMeal(value);
  };

  const handleNumberPeopleChange = (number) => {
    setNumberPeople(number);
  };

  const handleNextClick = () => {
    if (meal === "" || numberPeople === null) {
      alert("Please select a meal and a number of people");
    } else {
      props.history.push({
        pathname: `/step2/${meal}`,
        state: { numberPeople: numberPeople, meal: meal },
      });
    }
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Please select a meal" name="mealName" rules={[{ required: true, message: 'Please select a meal!' }]}>
        <Select defaultValue={meal} onChange={handleMealChange}>
          {meals.map((item, index) => (
            <Select.Option key={index} value={item.label}>
              {item.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Please Enter Number of people" name="numberofPeople" rules={[{ required: true, message: 'Please select a number of people!' }]} >
        <InputNumber
          type="number"
          defaultValue={numberPeople === "" ? setNumberPeople(1) : numberPeople}
          max={10}
          min={1}
          onChange={handleNumberPeopleChange}
        />
      </Form.Item>
      <Button type="primary" onClick={handleNextClick} htmlType="submit" >
        Next
      </Button>
    </Form>
  );
};

export default StepOne;
