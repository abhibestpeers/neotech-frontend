import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Container, TextField, Button } from "@mui/material";
// import { EmployeeData } from "../types";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name must not be less than 3 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number is required"),
  homeAddress: yup.object({
    city: yup.string().required("Enter your city"),
    ZIPCode: yup.string().required("Enter your zip code"),
    addressLine1: yup.string().required("Enter your address"),
    addressLine2: yup.string().required("Enter  your address"),
  }),
  dateOfEmployment: yup.date().required(),
  dateOfBirth: yup.date().required(),
});

const EmployeeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      homeAddress: {
        city: "",
        ZIPCode: "",
        addressLine1: "",
        addressLine2: "",
      },
      dateOfEmployment: "",
      dateOfBirth: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>

        <Box className="name">
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Box>
          
        <Box className="email">
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Box>

        <Box className="phoneNumber">
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            type="number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Box>

        <Box className="homeaddress">
          <label>HomeAddress</label>

          <Box display="flex" flexDirection="row">
            <Box className="city">
              <TextField
                required
                id="city"
                name="city"
                label="City"
                value={formik.values.homeAddress.city}
                onChange={formik.handleChange}
                error={
                  formik.touched.homeAddress?.city &&
                  Boolean(formik.errors.homeAddress?.city)
                }
                helperText={
                  formik.touched.homeAddress?.city &&
                  formik.errors.homeAddress?.city
                }
              />
            </Box>
            <Box className="zipCode">
              <TextField
                required
                id="ZIPCode"
                name="ZIPCode"
                label="ZIP Code"
                value={formik.values.homeAddress.ZIPCode}
                onChange={formik.handleChange}
                error={
                  formik.touched.homeAddress?.ZIPCode &&
                  Boolean(formik.errors.homeAddress?.ZIPCode)
                }
                helperText={
                  formik.touched.homeAddress?.ZIPCode &&
                  formik.errors.homeAddress?.ZIPCode
                }
              />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row">
            <TextField
              required
              id="addressLine1"
              name="addressLine1"
              label="Address Line1"
              value={formik.values.homeAddress.addressLine1}
              onChange={formik.handleChange}
              error={
                formik.touched.homeAddress?.addressLine1 &&
                Boolean(formik.errors.homeAddress?.addressLine1)
              }
              helperText={
                formik.touched.homeAddress?.addressLine1 &&
                formik.errors.homeAddress?.addressLine1
              }
            />
            <TextField
              required
              id="addressLine2"
              name="addressLine2"
              label="Address Line2"
              value={formik.values.homeAddress.addressLine2}
              onChange={formik.handleChange}
              error={
                formik.touched.homeAddress?.addressLine2 &&
                Boolean(formik.errors.homeAddress?.addressLine2)
              }
              helperText={
                formik.touched.homeAddress?.addressLine2 &&
                formik.errors.homeAddress?.addressLine2
              }
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="row">
          <TextField
            required
            id="dateOfEmployment"
            // label="Employment date"
            name="dateOfEmployment"
            type="date"
            value={formik.values.dateOfEmployment}
            onChange={formik.handleChange}
            error={
              formik.touched.dateOfEmployment &&
              Boolean(formik.errors.dateOfEmployment)
            }
            helperText={
              formik.touched.dateOfEmployment && formik.errors.dateOfEmployment
            }
          />
          <TextField
            required
            id="dateOfBirth"
            // label="Birth date"
            name="dateOfBirth"
            type="date"
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            error={
              formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
            }
            helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
          />
        </Box>

        <Box className="button">
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default EmployeeForm;
