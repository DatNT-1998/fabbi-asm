import React, { useState } from "react";

import { Form, InputNumber, Select, Button } from "antd";

const StepOne = (props) => {
  const [form] = Form.useForm();
  console.log("props step 1", props);
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

  const handleClick = () => {
    if (meal === "") {
      alert("Please select a meal");
    } else {
      props.history.push({
        pathname: `/step2/${meal}`,
        state: { numberPeople: numberPeople, meal: meal },
      });
    }
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Please select a meal">
        <Select value={meal} onChange={handleMealChange}>
          {meals.map((meal, index) => (
            <Select.Option key={index} value={meal.label}>
              {meal.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Please Enter Number of people">
        <InputNumber
          value={numberPeople === "" ? setNumberPeople(1) : numberPeople}
          max={10}
          min={1}
          onChange={handleNumberPeopleChange}
        />
      </Form.Item>
      <Button type="primary" onClick={handleClick}>
        Next
      </Button>
    </Form>
  );
};

export default StepOne;
