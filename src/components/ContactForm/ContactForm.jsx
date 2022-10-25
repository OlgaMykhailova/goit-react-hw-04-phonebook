import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import {
  Form,
  Label,
  Text,
  Field,
  Button,
  ErrorMessage,
} from './ContactFormStyled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().positive().integer().required(),
});

export const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(6),
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Label>
          <Text>Name</Text>
          <Field type="text" name="name"></Field>
          <ErrorMessage name="name" component="span"></ErrorMessage>
        </Label>
        <Label>
          <Text>Number</Text>
          <Field type="tel" name="number"></Field>
          <ErrorMessage name="number" component="span"></ErrorMessage>
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
