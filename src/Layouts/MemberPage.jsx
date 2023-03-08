import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import logo from '../Assets/imgs/logo.png'
import memberSVG from '../Assets/imgs/member-shape.svg'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useSnackbar } from 'notistack'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required("Vui lòng nhập email !").test("test email", "Email không hợp lệ", (data) => {
        return data.includes("@")
    }),
    password: yup.string().required("Vui lòng nhập password !").min(9, "Password phải trên 8 ký tự")
}).required();

function MemberPage(props) {
    const { enqueueSnackbar } = useSnackbar()

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        enqueueSnackbar('Sai email hoặc password', { variant: 'error' })
    }

    return (
        <div className='member-page'>
            <Header />
            <div className="login-container">
                <div className="back-home-link">
                    <a className='custom-link' href="/">
                        <div className="go-home">
                            <span>Quay về trang chủ</span>
                            <div className="meme-thumb">
                                <img src="https://assets.website-files.com/63318e0c540a1083c82e6a0d/633481c9b677643efbe0b5cd_dog-on-scooter.gif" alt="meme" />
                            </div>
                        </div>
                    </a>
                </div>



                <div className="form-login">
                    <div className="logo">
                        <a href="/"><img src={logo} alt="logo" /></a>
                    </div>

                    <h3 className='form-title'>Sử dụng tài khoản HV</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <div className="field-type email">
                            <input {...register("email")} id="field-email" required type="text" name="email" autoComplete="email" placeholder='Email' />
                            <p className='err-label'>{errors.email?.message}</p>
                        </div>

                        <div className="field-type password">
                            <input {...register("password")} id="field-password" required type="password" autoComplete="off" name="password" placeholder='Password' />
                            <p className='err-label'>{errors.password?.message}</p>
                        </div>

                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="rememberme" value="forever" defaultChecked />
                                <span className="element shift-down-1 margin-left-0"></span>
                                <span className="font-size-15">Ghi nhớ tài khoản
                                </span>
                            </label>
                        </div>

                        <div className="form-submit">
                            <button type="submit" className="btn-submit"><span className="btn__content"><span className="btn__label">Đăng nhập</span></span></button>
                        </div>
                    </form>

                    <div className="has-no-account">
                        <h5>Bạn chưa có tài khoản?</h5>
                        <a href="#" className="custom-underline">Liên hệ hỗ trợ</a>
                    </div>
                </div>

                <div className="shape-bg">
                    <img src={memberSVG} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MemberPage;