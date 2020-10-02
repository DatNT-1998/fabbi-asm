import React, { useState } from "react";
import { Form, Select, Button } from "antd";
import dishes from "../data/dishes.json";

const StepTwo = (props) => {
  const [form] = Form.useForm();
  const data = dishes.dishes;
  console.log(props, "props step 2");
  const [restaurant, setRestaurant] = useState(
    props.location && props.location.state && props.location.state.restaurant
      ? props.location.state.restaurant
      : ""
  );

  let datafakeRestaurant = [];
  let dataRealRestaurant = [];
  data.map((element) => {
    for (let value of element.availableMeals) {
      if (props.location.state.meal === value) {
        datafakeRestaurant.push(element);
      }
    }
  });

  dataRealRestaurant = datafakeRestaurant.map((item) => item.restaurant);

  dataRealRestaurant = dataRealRestaurant.filter(function (elem, pos) {
    return dataRealRestaurant.indexOf(elem) === pos;
  });

  const handleRestaurantChange = (value) => {
    setRestaurant(value);
  };

  const handleBackClick = () => {
    props.history.push({
      pathname: "/",
      state: {
        numberPeople: props.location.state.numberPeople,
        meal: props.location.state.meal,
      },
    });
  };

  const handleNextClick = () => {
    if (restaurant === "") {
      alert("Please select a restaurant");
    } else {
      props.history.push({
        pathname: `/step3/${restaurant}`,
        state: {
          numberPeople: props.location.state.numberPeople,
          meal: props.location.state.meal,
          restaurant: restaurant,
        },
      });
    }
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Please select a Restaurant">
        <Select value={restaurant} onChange={handleRestaurantChange}>
          {dataRealRestaurant.map((item, index) => (
            <Select.Option key={index} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button type="primary" onClick={handleBackClick}>
          Previous
        </Button>
        <Button type="primary" onClick={handleNextClick}>
          Next
        </Button>
      </div>
    </Form>
  );
};

export default StepTwo;
