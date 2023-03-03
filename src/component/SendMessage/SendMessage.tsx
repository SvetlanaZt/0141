import s from "./SendMessage.module.scss";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Form, Input, Button } from "antd";
import { setData } from "../../redux/slice/slice";
// import { useGetDataAllUsersQuery } from "../../api/api";

// interface Props {
//   handleCancel: VoidFunction;
// }

// interface Event {
//   amount: string;
//   brigadierName: string;
//   paymentDate: any;
// }

const SendMessage = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  let idData = 1;
  const currentMessage = useAppSelector((state) => state?.todo?.data);
  // const { data } = useGetDataAllUsersQuery("");
  // const userName = data?.find((user) => user?.name);
  // const userId = data?.find((user) => user?.id);

  // const [addSalary] = useCreateSalaryMutation();

  // const { user } = useAppSelector((state) => state.users);
  if (currentMessage.length > 0) {
    idData = currentMessage[currentMessage.length - 1].id + 1;
  }

  const onFinish = async (e: any) => {
    const dataMessage = {
      ...e,
      id: idData,
      name: "Гнна Петрівна",
    };
    dispatch(setData([...currentMessage, dataMessage]));
    onReset();
    console.log(e);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className={s.blockForm}>
      <Form
        layout="vertical"
        className={s.form}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label=""
          name="message"
          className={s.formItem}
          rules={[{ required: true, message: "Введіть Коментар" }]}
        >
          <Input className={s.formInput} />
        </Form.Item>
        <Button type="primary" htmlType="submit" className={s.formButton}>
          Send a message
        </Button>
      </Form>
    </div>
  );
};
export default SendMessage;
