import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

type TLoginProps = {
  label?: string;
  type: string;
  name: string;
};

const PHInput = ({ label, type, name }: TLoginProps) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} size="large" />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
