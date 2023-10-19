import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../assets/Firebase_Sdk';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SocialLogin = ({from}) => {
    const auth = getAuth(app)
    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
            toast.success('logged in');
            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="text-center mt-4">
                <button type='button' onClick={handleGoogleSignIn} className="btn btn-circle">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
    );
};

export default SocialLogin;