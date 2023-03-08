import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

function Contact(props) {
    return (
        <div className='about-page'>
            <Header />
            <div className="about-section">
                <div className="container">
                    <div className="content-wrap">
                        <h1>Chào mừng bạn đến với Developer Journey 👋</h1>
                        <p>Hey, I’m Ugi Stelmokaitis - hope you manage to say my name properly, but if not, while working or exercising no worries. <a href="#">Here is Speaker</a> Icon how to say my name.</p>
                        <p>My favorite thing about my work is to help businesses developing websites or mobile applications their customers love. I enjoy the journey from coming up with wild ideas to turning them into a performant product, launching and growing it afterward</p>
                        <h6>My daily life</h6>
                        <p>I've been always into fitness and healthy lifestyle. You can easily spot me gymming, going for a walk or swimming. I can't function without double shot espresso as well as <a href="#">Spotify Logo</a> Spotify which is always on while working or exercising. My current favorite artist is Lady Leshurr and the genre is Hip-Hop. I also like to relax with movies when I’m not working.</p>
                        <h6>My Work:</h6>
                        <p>As a  at Priffle Logo <a href="#">Priffle</a> I have the opportunity to work on some exciting projects. My goal is always to create performant websites and apps with secure coding practices so they can deliver great user experiences while also meeting business goals. After hours, I'm working on a cross-platform fitness app called <a href="#"> Aezthetics Logo</a> Aezthetics that helps customers reach their fitness goals and stay on track with its sleek interface design that's easy for anyone to use. Aezthetics aims at being the top-notch fitness app and my involvement with this project has me working on both development and product management.</p>
                        <h6>My gears:</h6>
                        <p>I've put together a list of the equipment that I use on a daily basis for those who have asked me about what gear is important. Check out my Laptop Icon <a href="#">Gears I use</a> page to see everything.</p>
                        <h6>My go to tools:</h6>
                        <p className='has-icon'>Prismic is an easy-to use CMS (Content Management System) that offers features such as reliable, secure APIs and repeaters. Their pricing model makes it affordable for any business.</p>
                        <div className="icon-box">
                            <div className="icon">
                                <svg fill='#fff' role="img" width={60} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Contentful</title><path d="M21.875 16.361c-.043-.048-1.067-1.18-2.365-1.19-.68 0-1.288.283-1.815.858-.773.842-2.35 1.85-4.25 1.921-1.598.059-3.085-.548-4.423-1.805-1.644-1.544-2.155-4.016-1.302-6.297.834-2.23 2.752-3.616 5.131-3.707l.044-.004c.024-.003 2.302-.258 4.325 1.548.17.185 1.154 1.197 2.475 1.228.823.018 1.586-.336 2.27-1.055.602-.632.87-1.342.797-2.112-.154-1.61-1.806-2.876-2.03-3.04-.212-.184-1.878-1.578-4.476-2.294-2.52-.695-6.42-.853-10.685 2.349a7.31 7.31 0 0 0-.557.49c-.28.208-.523.462-.716.753a12.469 12.469 0 0 0-3.064 8.677c.207 6.283 5.265 9.293 5.646 9.51.262.17 2.906 1.81 6.495 1.809 2.106 0 4.538-.565 7.005-2.322.248-.138 1.714-1.012 2.103-2.52.23-.894.042-1.815-.562-2.737l-.046-.06zm-16.932 1.97c0-1.09.887-1.977 1.977-1.977s1.977.886 1.977 1.977c0 1.09-.887 1.977-1.977 1.977s-1.977-.887-1.977-1.977zm.139-13.657c.236-.275.451-.498.628-.67a1.965 1.965 0 0 1 1.088-.329c1.09 0 1.977.887 1.977 1.977S7.888 7.63 6.798 7.63s-1.977-.887-1.977-1.977c0-.356.096-.69.261-.978zM13.249.999c3.954 0 6.657 2.336 6.826 2.486l.043.034c.42.3 1.532 1.301 1.63 2.324.044.469-.126.898-.52 1.313-.477.5-.983.752-1.504.738-.964-.019-1.743-.887-1.76-.905l-.042-.044c-2.292-2.063-4.83-1.855-5.13-1.822a6.82 6.82 0 0 0-3.012.818 3 3 0 0 0-2.34-3.214C9.543 1.45 11.516.999 13.248.999zM3.884 6.34a3 3 0 0 0 2.914 2.31c.122 0 .24-.01.358-.024a7.336 7.336 0 0 0-.39.866c-.75 2.003-.59 4.14.359 5.854-.068-.005-.136-.01-.205-.01a2.999 2.999 0 0 0-2.967 2.6 10.075 10.075 0 0 1-1.7-5.288 11.43 11.43 0 0 1 1.63-6.309zM21.497 18.9c-.3 1.174-1.615 1.89-1.627 1.896l-.058.036c-6.287 4.499-12.137.667-12.382.502l-.036-.022a2.848 2.848 0 0 1-.034-.02 2.998 2.998 0 0 0 2.543-3.228c1.124.64 2.336.951 3.58.906 2.214-.083 4.057-1.264 4.962-2.25.327-.356.67-.53 1.048-.53h.005c.762.004 1.46.688 1.593.826.421.658.558 1.291.406 1.884z" /></svg>
                            </div>

                            <div className="content">
                                <h3>Contentful</h3>
                                <p>/ Headless CMS</p>
                            </div>
                        </div>
                        <p className='has-icon'>I use Next.js for handling the heavy lifting, including rendering and bundling of our JavaScript assets while TypeScript helps ensure a reliable build process with minimal errors/warnings.</p>
                        <div className="icon-box">
                            <div className="icon">
                                <svg width={60} height={60} fill="#fff" id="Layer_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452.749 270.471c-4.604-5.969-9.6-11.94-14.939-17.888 3.67-4.259 7.167-8.526 10.458-12.792 34.016-44.106 43.674-84.117 27.194-112.66-16.479-28.544-55.954-40.185-111.164-32.779-5.82.781-11.761 1.771-17.797 2.947-2.054-6.005-4.229-11.822-6.531-17.418-21.19-51.512-51.011-79.881-83.97-79.881s-62.78 28.369-83.969 79.881c-2.302 5.596-4.477 11.413-6.531 17.418-6.036-1.175-11.978-2.166-17.797-2.947-55.204-7.405-94.684 4.235-111.164 32.779s-6.822 68.554 27.194 112.66c3.29 4.266 6.787 8.533 10.458 12.792-5.34 5.948-10.335 11.918-14.939 17.888-34.016 44.106-43.674 84.117-27.194 112.66 13.241 22.934 41.321 34.955 80.484 34.955 9.579 0 19.829-.72 30.679-2.176 6.988-.938 14.15-2.174 21.446-3.679 2.295 6.884 4.748 13.529 7.364 19.889 21.189 51.511 51.01 79.88 83.969 79.88s62.78-28.369 83.969-79.881c2.616-6.36 5.069-13.005 7.364-19.889 7.296 1.505 14.458 2.742 21.446 3.679 10.853 1.456 21.097 2.176 30.679 2.176 39.159 0 67.245-12.022 80.484-34.955 16.481-28.543 6.823-68.553-27.193-112.659zm-57.603-148.345c27.422 0 46.804 6.961 54.335 20.004 9.854 17.068.753 45.986-24.969 79.339-2.451 3.178-5.032 6.358-7.72 9.537-15.039-14.308-31.968-28.308-50.386-41.65-2.544-22.217-6.369-43.447-11.371-63.186 14.684-2.71 28.167-4.044 40.111-4.044zm-99.321 205.866c-13.485 7.785-26.794 14.769-39.816 20.979-13.03-6.212-26.342-13.189-39.834-20.979-14.885-8.594-29.13-17.69-42.569-27.138-1.128-14.35-1.738-29.323-1.738-44.854 0-17.398.763-34.099 2.167-50.002 11.984-8.229 24.573-16.173 37.658-23.728 15.04-8.683 29.857-16.357 44.306-23.084 14.45 6.727 29.267 14.401 44.307 23.084 13.086 7.555 25.674 15.499 37.658 23.728 1.404 15.903 2.167 32.604 2.167 50.002 0 15.531-.61 30.504-1.738 44.854-13.438 9.448-27.683 18.544-42.568 27.138zm37.992 12.012c-2.01 12.77-4.448 24.866-7.248 36.202-11.127-3.233-22.72-7.145-34.677-11.754 6.326-3.359 12.643-6.848 18.933-10.479 7.834-4.524 15.501-9.189 22.992-13.969zm-113.711 24.447c-11.959 4.61-23.549 8.518-34.677 11.751-2.799-11.334-5.237-23.429-7.247-36.198 7.491 4.78 15.158 9.445 22.992 13.968 6.29 3.632 12.606 7.121 18.932 10.479zm-77.872-87.507c-9.5-7.87-18.401-15.888-26.614-23.981 8.323-7.937 17.291-15.787 26.831-23.484-.383 8.755-.583 17.603-.583 26.521 0 7.029.127 14.013.366 20.944zm36.778-110.036c2.017-11.953 4.413-23.283 7.128-33.926 10.659 2.979 21.767 6.595 33.228 10.856-7.578 3.955-15.145 8.105-22.674 12.452-5.994 3.46-11.887 7.005-17.682 10.618zm113.619-23.071c11.461-4.261 22.569-7.878 33.229-10.856 2.715 10.644 5.111 21.974 7.128 33.927-5.795-3.613-11.688-7.158-17.681-10.618-7.531-4.348-15.097-8.498-22.676-12.453zm76.918 85.642c9.54 7.697 18.508 15.547 26.831 23.484-8.213 8.093-17.114 16.111-26.614 23.981.239-6.931.366-13.915.366-20.944 0-8.919-.2-17.766-.583-26.521zm-113.549-199.479c21.699 0 44.749 27.603 61.225 74.297-19.851 5.579-40.429 12.976-61.225 22.018-20.796-9.042-41.374-16.438-61.225-22.018 16.476-46.694 39.526-74.297 61.225-74.297zm-193.481 112.131c7.532-13.045 26.905-20.004 54.335-20.004 11.943 0 25.427 1.334 40.112 4.045-5.003 19.739-8.827 40.969-11.371 63.185-18.418 13.342-35.347 27.342-50.386 41.65-2.688-3.179-5.269-6.359-7.72-9.537-25.723-33.353-34.824-62.271-24.97-79.339zm49.854 246.004c-27.422-.002-46.804-6.961-54.335-20.004-9.854-17.068-.753-45.986 24.969-79.339 3.665-4.753 7.604-9.511 11.793-14.261 14.869 14.618 31.746 28.957 50.198 42.649 2.429 23.266 6.243 45.521 11.342 66.177-16.189 3.211-30.984 4.779-43.967 4.778zm143.627 93.865c-22.12 0-45.641-28.69-62.173-77.041 20.186-5.868 41.088-13.595 62.173-22.987 21.085 9.392 41.987 17.119 62.173 22.987-16.532 48.351-40.053 77.041-62.173 77.041zm197.962-113.869c-11.096 19.22-47.908 25.221-98.303 15.226 5.1-20.656 8.913-42.911 11.342-66.177 18.453-13.692 35.33-28.031 50.198-42.649 4.189 4.75 8.128 9.509 11.793 14.261 25.724 33.353 34.825 62.271 24.97 79.339z" /><circle cx="256" cy="256" r="46.35" /></g></svg>
                            </div>
                            <div className="content">
                                <h3>React.js</h3>
                                <p>/ Frontend</p>
                            </div>
                        </div>
                        <p className='has-icon'>I love Vercel, a hosting provider that offers free SSL encryption and asset compression. They also have an edge network for increased proximity to customers as well as caching invalidation capabilities so your site load time stays fast.</p>
                        <div className="icon-box no-margin">
                            <div className="icon">
                                <svg width={60} height={60} fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M256,48,496,464H16Z" /></svg>
                            </div>
                            <div className="content">
                                <h3>Vercel</h3>
                                <p>/ Hosting</p>
                            </div>
                        </div>
                    </div>

                    <div className="author-wrap">
                        <div className="author-card">
                            <div className="avatar">
                                <img src="https://www.ugistelmokaitis.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fcharm%2Fd3005069-b5bf-488b-bde7-1a626e6f2396_profile.png%3Fauto%3Dcompress%2Cformat&w=384&q=100" alt="avt" />
                            </div>

                            <div className="name-group">
                                <h2>Ugi Stelmokaitis</h2>
                                <h3>Sydney, Australia</h3>
                            </div>

                            <div className="sep"></div>

                            <div className="social-icons">
                                <ul className='list-icon'>
                                    <li className='icon'>
                                        <a href="#">
                                            <GitHubIcon style={{ fontSize: "22px" }} />
                                            <span>Github</span>
                                        </a>

                                        <div className="arrow">
                                            <svg fill="#fff" height="16" width="16" xmlns="http://www.w3.org/2000/svg" role="img"><path clipRule="evenodd" d="M4.5 3.5A.5.5 0 0 1 5 3h6.5a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-1 0V4.707l-7.146 7.147a.5.5 0 0 1-.708-.708L10.293 4H5a.5.5 0 0 1-.5-.5z" fill="currentColor" fillRule="evenodd"></path></svg>
                                        </div>
                                    </li>

                                    <li className='icon'>
                                        <a href="#">
                                            <FacebookOutlinedIcon style={{ fontSize: "24px" }} />
                                            <span>Facebook</span>
                                        </a>

                                        <div className="arrow">
                                            <svg fill="#fff" height="16" width="16" xmlns="http://www.w3.org/2000/svg" role="img"><path clipRule="evenodd" d="M4.5 3.5A.5.5 0 0 1 5 3h6.5a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-1 0V4.707l-7.146 7.147a.5.5 0 0 1-.708-.708L10.293 4H5a.5.5 0 0 1-.5-.5z" fill="currentColor" fillRule="evenodd"></path></svg>
                                        </div>
                                    </li>

                                    <li className='icon'>
                                        <a href="#">
                                            <TwitterIcon style={{ fontSize: "23px" }} />
                                            <span>Twitter</span>
                                        </a>

                                        <div className="arrow">
                                            <svg fill="#fff" height="16" width="16" xmlns="http://www.w3.org/2000/svg" role="img"><path clipRule="evenodd" d="M4.5 3.5A.5.5 0 0 1 5 3h6.5a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-1 0V4.707l-7.146 7.147a.5.5 0 0 1-.708-.708L10.293 4H5a.5.5 0 0 1-.5-.5z" fill="currentColor" fillRule="evenodd"></path></svg>
                                        </div>
                                    </li>

                                    <li className='icon'>
                                        <a href="#">
                                            <GitHubIcon style={{ fontSize: "22px" }} />
                                            <span>Github</span>
                                        </a>

                                        <div className="arrow">
                                            <svg fill="#fff" height="16" width="16" xmlns="http://www.w3.org/2000/svg" role="img"><path clipRule="evenodd" d="M4.5 3.5A.5.5 0 0 1 5 3h6.5a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-1 0V4.707l-7.146 7.147a.5.5 0 0 1-.708-.708L10.293 4H5a.5.5 0 0 1-.5-.5z" fill="currentColor" fillRule="evenodd"></path></svg>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;