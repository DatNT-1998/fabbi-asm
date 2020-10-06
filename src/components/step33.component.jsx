import React, { useEffect } from "react";
import { Form, Select, Button, InputNumber, Space, Input } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { GLOBAL } from '../constants'
import dishes from "../data/dishes.json";


const { set_3_data = {} } = GLOBAL || {}

const StepThreeTH = (props) => {
    let dataNormal = [];
    console.log(props, "prop step3");
    const [form] = Form.useForm();
    console.log("form: ", form);
    const { getFieldValue, setFieldsValue, name } = form

    // console.log("setFieldsValue: ", setFieldsValue());

    let dish = props.location && props.location.state && props.location.state.dishes ? props.location.state.dishes[0].title : "";
    let numOfServing = props.location && props.location.state && props.location.state.dishes ? props.location.state.dishes[0].numServe : 1;
    const handleDishChange = (value) => {
        dish = value;
    };

    const handleNumOfServeChange = (number) => {
        // finalDataSendandCheckDuplicateData
        // step 1: numServe onChange => finalDataSendandCheckDuplicateData
        numOfServing = number;
    };

    let data = dishes.dishes;
    let dataDish = [];
    console.log("dataNormal", dataNormal);

    data.map((element) => {
        if (element.restaurant === props.location.state.restaurant) {
            dataDish.push(element);
        }
    });

    const handleBackClick = () => {
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
        if (dish === "") {
            alert("please select a dish");
        } else {
            const data = finalDataSendandCheckDuplicateData();
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
    // let dataSend = [];
    // const checkDuplicateTitle = () => {



    //     console.log(dataNormal, "data normal lllllllllllllll");

    //     checkDuplicateTitle();

    //     console.log("dataSend lllll", dataSend);
    // };

    const finalDataSendandCheckDuplicateData = () => {
        dataNormal = [{ title: dish, numServe: numOfServing }, ...dataNormal]
        // const allData = [{ title: dish, numServe: numOfServing }, ...dataNormal]
        let arr = [];
        let dataSend = [];
        dataNormal.map((e) => {
            debugger
            if (arr[e.title]) {
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

    const dataDishes =
        props.location && props.location.state && props.location.state.dishes
            ? props.location.state.dishes
            : [];

    useEffect(() => {
        console.log(dataDishes, "dataDishes can dung de render lai");
        for (let index = 1; index < dataDishes.length; index++) {
            test({
                title: dataDishes[index].title,
                numServe: dataDishes[index].numServe,
            })
        }

    }, [props.location])

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
                console.log(allValues, "all Value Changes");
                console.log("getFieldValue: ", getFieldValue());
                console.log("name: ", name);
                // clear dataNormal = {}
                dataNormal = [];
                dataNormal = allValues.users;
            }}

        >
            <div
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <Form.Item label="Please select a dish" style={{ flex: 0.95 }}>
                    <Select defaultValue={dish} onChange={handleDishChange}>
                        {dataDish.map((item) => (
                            <Select.Option key={item.id} value={item.name}>
                                {item.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Please enter no of servings">
                    <InputNumber
                        defaultValue={numOfServing}
                        max={10}
                        min={0}
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
                                        >
                                            <InputNumber max={10} min={0} />
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
                <Button type="primary" onClick={handleNextClick}>
                    Next
                </Button>
            </div>
        </Form>
    );
};

export default StepThreeTH;

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
