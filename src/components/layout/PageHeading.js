import {Link} from "react-router-dom";
import './pageHeading.scss'
const PageHeading = ({path,title}) => {

    return(
        <div className='pageHeadContainer'>

                <div className='nav' >
                    <Link to='/' type='a'>Home</Link> > {path} > {title}
                </div>
                <div className='heading' >
                    <h1>{title}</h1>
                </div>

        </div>
    )
}

export default PageHeading