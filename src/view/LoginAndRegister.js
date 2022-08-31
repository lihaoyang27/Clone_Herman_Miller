import LoginRegister from "../components/login&register/LoginRegister";
import LoginPageHeading from "../components/login&register/LoginPageHeading";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


const LoginRegisterView = () => {

    return(
        <>
            <Header/>
        <LoginPageHeading path='login' title='Sign In or Register'/>
        <LoginRegister/>
            <Footer/>
        </>
    )
}

export default LoginRegisterView