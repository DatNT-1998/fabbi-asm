import React, { useEffect } from "react";
import { Form, Select, Button, InputNumber, Space } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
// import { GLOBAL } from '../constants'
import dishes from "../data/dishes.json";


// const { set_3_data = {} } = GLOBAL || {}
let dataNormal = [];

const StepThree = (props) => {
    const [form] = Form.useForm();
    const { getFieldValue, setFieldsValue } = form
    const handleDishChange = (value) => {
        dish = value;
    };
    const handleNumOfServeChange = (number) => {
        numOfServing = number;
    };
    console.log("Props location step3", props.location)
    const dataDishes =
        props.location && props.location.state && props.location.state.dishes
            ? props.location.state.dishes
            : [];

    let dish = props.location && props.location.state && props.location.state.dishes ? props.location.state.dishes[0].title : "";
    let numOfServing = props.location && props.location.state && props.location.state.dishes ? props.location.state.dishes[0].numServe : 1;

    //data dùng để render trong Select.Option
    let data = dishes.dishes;
    let dataDish = [];

    data.map((element) => {
        if (element.restaurant === props.location.state.restaurant) {
            dataDish.push(element);
        }
    });

    const handleBackClick = () => {
        dataNormal = [];
        props.history.push({
            pathname: `/step2/${props.location.state.restaurant}`,
            state: {
                meal: props.location.state.meal,
                numberPeople: props.location.state.numberPeople,
                restaurant: props.location.state.restaurant,
            },
        });
    };

    const handleNextClick = () => {
        const data = finalDataSendandCheckDuplicateData();
        let a = 0;
        for (let i = 0; i < data.length; i++) {
            a += data[i].numServe
        }
        if (dish === "" || numOfServing === "" || numOfServing === null) {
            alert("Select a dish and a number of servings ");
        } else if (a < props.location.state.numberPeople) {
            alert("Please select a disc number that matches your number of people")
        } else {

            props.history.push({
                pathname: `/step4/review`,
                state: {
                    numberPeople: props.location.state.numberPeople,
                    meal: props.location.state.meal,
                    restaurant: props.location.state.restaurant,
                    dish: data,
                },
            });
        }
    };

    // kiểm tra trùng title, khi trùng title thì cộng số lượng của numServe cho cái đầu tiên
    console.log("dataNormal version 1", dataNormal)

    const finalDataSendandCheckDuplicateData = () => {
        // dataNormal = [{ title: dish, numServe: numOfServing }, ...dataNormal]

        console.log("this is dataNormal", dataNormal);
        let allData = [{ title: dish, numServe: numOfServing }, ...dataNormal];
        let arr = [];
        let dataSend = [];

        allData.map((e) => {
            if (e === undefined) {
                return;
            }
            else if (arr[e.title]) {
                arr[e.title] += e.numServe;
            } else arr[e.title] = e.numServe;
        });

        for (const key in arr) {
            dataSend.push({
                title: key,
                numServe: arr[key],
            });
        }

        return dataSend;
    }


    useEffect(() => {
        for (let index = 1; index < dataDishes.length; index++) {
            test({
                title: dataDishes[index].title,
                numServe: dataDishes[index].numServe,
            })
        }

    }, [props.location, dataDishes])

    function test(data = {}) {
        const { users = [] } = getFieldValue()
        const userAdd = [
            ...users,
        ]
        userAdd.push(data)
        setFieldsValue({
            users: userAdd
        })
    }

    return (
        <Form
            form={form}
            layout="vertical"
            onValuesChange={(_, allValues) => {

                // clear dataNormal = {}
                dataNormal = [];
                if (typeof (allValues.users) !== 'undefined') {
                    dataNormal = allValues.users;
                }
            }}
        >
            <div
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <Form.Item label="Please select a dish" style={{ flex: 0.95 }} name="tendia" rules={[{ required: true, message: 'Please select a dish!' }]} >
                    <Select defaultValue={dish} onChange={handleDishChange}>
                        {dataDish.map((item) => (
                            <Select.Option key={item.id} value={item.name}>
                                {item.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Please enter no of servings" name="soluong" rules={[{ required: true, message: 'Please select a number of serving!' }]} >
                    <InputNumber
                        type="number"
                        defaultValue={numOfServing}
                        max={10}
                        min={1}
                        onChange={handleNumOfServeChange}
                    />
                </Form.Item>
            </div>
            <Form.List name="users"   >
                {(fields, { add, remove }) => {
                    return (
                        <div>
                            {
                                fields.map((field) => (
                                    <Space
                                        key={field.key}
                                        style={{ display: "flex", marginBottom: 8 }}
                                        align="start"
                                    >
                                        <Form.Item
                                            label="Please select a dish"
                                            {...field}
                                            name={[field.name, "title"]}
                                            fieldKey={[field.fieldKey, "title"]}
                                            style={{ flex: "0.95", marginRight: "8px" }}
                                            rules={[{ required: true, message: 'Please choose the dish!' }]}

                                        >
                                            <Select>
                                                {dataDish.map((item) => (
                                                    <Select.Option key={item.id} value={item.name}>
                                                        {" "}
                                                        {item.name}{" "}
                                                    </Select.Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            {...field}
                                            label="Please enter no of servings"
                                            name={[field.name, "numServe"]}
                                            fieldKey={[field.fieldKey, "numServe"]}
                                            rules={[{ required: true, message: 'Please select a number!' }]}
                                        >
                                            <InputNumber type="number" max={10} min={1} />
                                        </Form.Item>

                                        <Form.Item>
                                            <MinusCircleOutlined
                                                style={{
                                                    marginTop: "16px",
                                                    marginLeft: "16px",
                                                    boxSizing: "border",
                                                }}
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

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button type="primary" onClick={handleBackClick}>
                    Previous
                </Button>
                <Button type="primary" onClick={handleNextClick} htmlType="submit">
                    Next
                </Button>
            </div>
        </Form>
    );
};

export default StepThree;

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
