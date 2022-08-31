
import {Link} from "react-router-dom";
import './loginPageHeading.scss'
const LoginPageHeading = ({path,title}) => {

    return(
        <div className='headContainer'>
                <div className='nav' >
                    <Link to='/' type='a'>Office</Link> > {path} > {title}
                </div>
                <div className='title'>{title}</div>
        </div>
    )
}

export default LoginPageHeading