import { Formik, Form, Field, ErrorMessage } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Button from "../components/Button";
import AddProductForm from "../Forms/Addform";

const loginSchema = z.object({
  username: z.string().min(5, "Enter more than 5 character"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Contact = () => {
  return (
    <>
    <div className="min-h-screen flex justify-center bg-gray-100 p-4">
    
        
        <Formik
          initialValues={{ username: "", password: "", email:"" }}
          validationSchema={toFormikValidationSchema(loginSchema)}
          onSubmit={(values, { resetForm }) => {
            alert("Login Success!\n" + JSON.stringify(values, null, 3));
            resetForm();
          }}
        >
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <Field
                name="username"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium">Password</label>
              <Field
                name="password"
                type="password"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <Button type="submit" hehe="Login"/>
          </Form>
        </Formik>
      
    </div>
    <AddProductForm/>
    </>
  );
};

export default Contact;