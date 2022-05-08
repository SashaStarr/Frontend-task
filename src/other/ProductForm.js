import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Alert } from '@mui/material';

const ProductForm = ({ onSubmitHandler }) => {
    return (<Formik
        initialValues={{
            name: '', count: '', imageUrl: '', width: '', height: '', weight: '', comment: ''
        }}
        validationSchema={Yup.object({
            name: Yup.string().required('Required field'),
            count: Yup.number().required('Required field'),
            imageUrl: Yup.string().required('Required field'),
            width: Yup.number().required('Required field'),
            height: Yup.number().required('Required field'),
            weight: Yup.string().required('Required field'),
            comment: Yup.string().required('Required field')
        })}
        onSubmit={(data) => {
            onSubmitHandler(data)
        }}
    >
        <Form>
            <Field
                id="name"
                name='name'
                type='text'
                placeholder="name"
            />
            <ErrorMessage name="name" component="div"><Alert severity="error" /></ErrorMessage>
            <Field
                id="count"
                name='count'
                type='number'
                placeholder="count"
            />
            <ErrorMessage name="count" component="div"><Alert severity="error" /></ErrorMessage>
            <Field
                id="imageUrl"
                name='imageUrl'
                type='text'
                placeholder="imageUrl"
            />
            <ErrorMessage name="imageUrl" component="div"><Alert severity="error" /></ErrorMessage>
            <Field
                id="width"
                name='width'
                type='number'
                placeholder="width"
            />
            <ErrorMessage name="width" component="div"><Alert severity="error" /></ErrorMessage>
            <Field
                id="height"
                name='height'
                type='number'
                placeholder="height"
            />
            <ErrorMessage name="height" component="div"><Alert severity="error" /></ErrorMessage>
            <Field
                id="weight"
                name='weight'
                type='string'
                placeholder="weight"
            />
            <ErrorMessage name="weight" component="div"><Alert severity="error" /></ErrorMessage>
            <Field
                id="comment"
                name='comment'
                type='text'
                placeholder="comment"
            />
            <ErrorMessage name="comment" component="div"><Alert severity="error" /></ErrorMessage>

            <button type="submit"
                className="green-button">Add</button>
        </Form>
    </Formik>)
}



export default ProductForm;