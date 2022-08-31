import * as yup from "yup"
import {CUSTOMER_VALIDATOR} from "../../helper/constant";
import './loginRegister.scss'
import {yupResolver} from "@hookform/resolvers/yup";
import {TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {userLogin} from "../../actions/accountAction";
import {useDispatch} from "react-redux";


const schema = yup.object().shape(CUSTOMER_VALIDATOR)

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        reValidateMode: "onChange"
    })


    const dispatch = useDispatch()
    const handleFormSubmit = (formValues) =>{
        userLogin(formValues)(dispatch)
    }


    return (
        <div className='login'>
            <div className='loginTitle'>
                Login
            </div>
            <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='formItem'>
                    <div className='formItemTitle'>
                        Email
                    </div>
                    <div className='formInput'>
                        <TextField variant="outlined"
                                   margin="small"
                                   name="email"
                                   id="email"
                                   type='text'
                                   size="small"
                                   fullWidth
                                   autoFocus {...register("email")}
                                   error={Boolean(errors.email?.message)}
                                   helperText={errors.email?.message}
                        />
                    </div>
                </div>
                <div className='formItem'>
                    <div className='formItemTitle'>
                        Password
                    </div>
                    <div className='formInput'>
                        <TextField variant="outlined"
                                   margin="small"
                                   name="password"
                                   id="password"
                                   type='password'
                                   size="small"
                                   fullWidth
                                   autoFocus {...register("password")}
                                   error={Boolean(errors.password?.message)}
                                   helperText={errors.password?.message}
                        />
                    </div>
                </div>

                    <button type='submit' className='formBtn'>Login</button>

            </form>
        </div>
    )
}

const Register = () => {
    return(
        <div className='register'>
            <div className='registerTitle'>Register</div>
            <div className='formItem'>
                <div className='formItemTitle'>First Name</div>
                <div className='formInput'>
                    <TextField variant="outlined"
                               margin="small"
                               name="firstName"
                               id="firstName"
                               type='text'
                               size="small"
                               fullWidth
                    />
                </div>
            </div>
            <div className='formItem'>
                <div className='formItemTitle'>Last Name</div>
                <div className='formInput'>
                    <TextField variant="outlined"
                               margin="small"
                               name="lastName"
                               id="lastName"
                               type='text'
                               size="small"
                               fullWidth
                    />
                </div>
            </div>
            <div className='formItem'>
                <div className='formItemTitle'>Email</div>
                <div className='formInput'>
                    <TextField variant="outlined"
                               margin="small"
                               name="email"
                               id="email"
                               type='email'
                               size="small"
                               fullWidth
                    />
                </div>
            </div>
            <div className='formItem'>
                <div className='formItemTitle'>Password</div>
                <div className='formInput'>
                    <TextField variant="outlined"
                               margin="small"
                               name="password"
                               id="password"
                               type='password'
                               size="small"
                               fullWidth
                    />
                </div>
            </div>
            <div className='formItem'>
                <div className='formItemTitle'>Confirm Password</div>
                <div className='formInput'>
                    <TextField variant="outlined"
                               margin="small"
                               name="password"
                               id="password"
                               type='password'
                               size="small"
                               fullWidth
                    />
                </div>
            </div>
            <button className='formBtn'>Register</button>
        </div>
    )
}


const LoginRegister = () => {

    return (
        <div className='loginRegisterContainer'>
            <Login/>
            <Register/>
        </div>
    )
}

export default LoginRegister