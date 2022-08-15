import React, { useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const saveToLocalStorage = (response) => {
    localStorage.setItem("currentUser", JSON.stringify(response));
}
const getFromLocalStorage = () => {
    let currentUser = localStorage.getItem('currentUser');
    currentUser = JSON.parse(currentUser);
    console.log(currentUser)
}

const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let user;
    let loading;
    let error;
    let signInerror;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || guser) {
            navigate(from, { replace: true });
        }
    }, [user, guser, from, navigate])

    if (loading || gloading) {
        return <Loading></Loading>
    }
    if (error || gerror) {
        signInerror = <p className='text-red-500'><small>{error?.message || gerror?.message}</small></p>
    }


    const onSubmit = async(data) => {
        console.log(data);
        const firebaseUser = await signInWithEmailAndPassword(auth,data.email, data.password)
        console.log(firebaseUser.user.uid);
        const userModel = {
            userID: firebaseUser.user.uid,
            email: data.email,
            password: data.password,
            name: data.name,
            location: data.location,
        }
        saveToLocalStorage(userModel);
        getFromLocalStorage();
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold"> Login </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Give your Email</span>
                            </label>
                            <input type="email" placeholder="Your Email here" class="input input-bordered w-full max-w-xs"
                                   {...register("email", {
                                       required: {
                                           value: true,
                                           message: 'Email is required'
                                       },
                                       pattern: {
                                           value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                           message: 'Invalid Email'
                                       }
                                   })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>



                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Type Password</span>
                            </label>
                            <input type="password" placeholder="Your Password here" class="input input-bordered w-full max-w-xs"
                                   {...register("password", {
                                       required: {
                                           value: true,
                                           message: 'Password is required'
                                       },
                                       minLength: {
                                           value: 6,
                                           message: 'Must be 6 character longer'
                                       }
                                   })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInerror}
                        <input className='btn input input-bordered w-full max-w-xs ' type="submit" value="Login" />
                    </form>
                    <p>
                        <small>
                            New to E-commerce site<Link className='text-primary' to="/signup">Create new account</Link>
                        </small>

                    </p>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-accent"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
