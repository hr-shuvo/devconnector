import {Form, redirect, useOutletContext} from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import {FormRow, FormRowSelect, SubmitBtn} from "../components";
import {JOB_STATUS, JOB_TYPE} from "../utils/constants";
import customFetch from "../utils/customFetch";
import {toast} from "react-toastify";

export const action = async ({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.post('/jobs', data);
        toast.success('Job Added');
        return redirect('all-jobs')
    } catch (err) {
        toast.error(err?.response?.data?.msg)
        return err;
    }
}

const AddJob = () => {
    const {user} = useOutletContext();

    return (
        <Wrapper>
            <Form method='post' className='form'>
                <h4 className='form-title'>Add Job</h4>
                <div className='form-center'>
                    <FormRow type='text' name='position'/>
                    <FormRow type='text' name='company'/>
                    <FormRow type='text' labelText='job location' name='jobLocation' defaultValue={user.location}/>

                    <FormRowSelect labelText='job status' name='jobStatus' defaultValue={JOB_STATUS.PENDING}
                                   list={Object.values(JOB_STATUS)}/>
                    <FormRowSelect labelText='job type' name='jobType' defaultValue={JOB_TYPE.FULL_TIME}
                                   list={Object.values(JOB_TYPE)}/>

                    <SubmitBtn formBtn/>
                </div>

            </Form>
        </Wrapper>
    )

};

export default AddJob;