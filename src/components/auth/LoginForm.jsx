import { useForm } from 'react-hook-form';
import Field from '../../common/Field';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const submitForm = (data) => {
        console.log(data);
        navigate('/');
    };
    return (
        <form
            onSubmit={handleSubmit(submitForm)}
            className="border-b border-[#3F3F3F] pb-10 lg:pb-15"
        >
            <div className="form-control">
                <Field label="Email" error={errors.email}>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                        })}
                        className={`${errors.email ? 'border-red-500' : 'border-gray-200'} auth-input`}
                        name="email"
                        type="email"
                        id="email"
                    />
                </Field>
            </div>
            <div className="form-control">
                <Field label="Password" error={errors.password}>
                    <input
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 chracter',
                            },
                        })}
                        className={`${errors.password ? 'border-red-500' : 'border-gray-200'} auth-input`}
                        name="password"
                        type="password"
                        id="password"
                    />
                </Field>
            </div>
            <Field>
                <button
                    className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                    type="submit"
                >
                    Login
                </button>
            </Field>
        </form>
    );
};

export default LoginForm;
