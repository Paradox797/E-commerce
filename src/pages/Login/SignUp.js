import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
//import { useCreateUserWithEmailAndPassword,useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const saveToLocalStorage = (response) => {
    localStorage.setItem("currentUser", JSON.stringify(response));
}
const getFromLocalStorage = () => {
    let currentUser = localStorage.getItem('currentUser');
    currentUser = JSON.parse(currentUser);
    console.log(currentUser)
}
const SignUp = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [

        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    let signInerror;

    if (loading || gloading || updating) {
        return <Loading></Loading>
    }
    if (error || gerror || updateError) {
        signInerror = <p className='text-red-500'><small>{error?.message || gerror?.message || updateError?.message}</small></p>
    }

    if (guser) {
        console.log(guser);
    }
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const firebaseUser = await createUserWithEmailAndPassword(auth, data.email, data.password);
            console.log(firebaseUser.user.uid);
            const userModel = {
                userID: firebaseUser.user.uid,
                email: data.email,
                password: data.password,
                name: data.name,
                location: data.location,
                isAdmin: "false",
            }
            saveToLocalStorage(userModel);
            getFromLocalStorage();
            fetch('http://localhost:5000/as', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userModel)
            })



                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.success) {
                        toast(`Welcome to our service`)
                        navigate('/');
                    }
                    else {
                        toast.error("Your email is aldeary in use")
                    }
                })

        } catch (e) {
            console.log(e);
        }
        // createUserWithEmailAndPassword(data.email, data.password).then((user) => console.log(user));
        // console.log(userDetail);
        //await updateProfile({ displayName: data.name });
        // console.log('Update Done');

    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold"> SignUP </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Enter Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name " class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }

                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Enter Your Location(in detail)</span>
                            </label>
                            <input type="text" placeholder="Your Location here " class="input input-bordered w-full max-w-xs"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'Location is required'
                                    }

                                })}
                            />
                            <label class="label">
                                {errors.location?.type === 'required' && <span class="label-text-alt text-red-500">{errors.location.message}</span>}

                            </label>
                        </div>


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
                        <input className='btn input input-bordered w-full max-w-xs ' type="submit" value="SignUp" />
                    </form>
                    <p>
                        <small>
                            Already have a acconut?<Link className='text-primary' to="/login">Login here</Link>
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
};

export default SignUp;
