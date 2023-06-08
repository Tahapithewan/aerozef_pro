import * as yup from 'yup';

const StudentSchema = yup.object({
  image: yup.mixed().required('File is required'),
  heading : yup.string().required('Field Required'),
  description : yup.string().required('Field Required')
})

export default StudentSchema