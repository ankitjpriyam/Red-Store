import "./Home.css";
import "./Utils.css"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div class="bod">

                <div class="header">
                    <div class="row">
                        <div class="container">
                            <div class="rleft ">
                                <h1>Give Your Workout A New Style!</h1>
                                <p>Success isn't always about greatness. Its about consistency. consistent
                                    hard work gains success. Greatness will come</p>
                                    <Link to={"/Items"}><button class="primary-button gsb">Explore Now</button></Link>
                            </div>
                            <div class="rright">
                                <img src="../asset1.png" alt="asset1"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="company">
                    <div class="container">
                        <div class="logos">
                            <img class="logo" src="../asset2.jpeg" alt="asset2"></img>
                            <img class="logo" src="../asset3.jpeg" alt="asset3"></img>
                            <img class="logo" src="../asset4.jpeg" alt="asset4"></img>
                        </div>
                    </div>
                </section>

                {/* <!-- feature section --> */}
                <section class="feature">
                    <div class="container">
                        <div class="feature-header">
                            <h2>Featured Products</h2>
                        </div>
                        <div class="feature-headings">
                            <div class="card">
                                <img src="../asset5.jpeg" alt="" />
                                <h4>Puma- Red T-Shirt</h4>
                                <p>$60.00</p>
                            </div>
                            <div class="card">
                                <img src="../asset6.jpeg" alt="" />
                                <h4>HRX-Black Shoes</h4>
                                <p>$120.00</p>
                            </div>
                            <div class="card">
                                <img src="../asset7.jpeg" alt="" />
                                <h4>Benetton-Trouser</h4>
                                <p>$80.00</p>
                            </div>
                            <div class="card">
                                <img src="../asset8.jpeg" alt="" />
                                <h4>Puma- Blue T-Shirt</h4>
                                <p>$50.00</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Latest feature section --> */}
                <section class="feature">
                    <div class="container">
                        <div class="feature-header">
                            <h2>Latest Products</h2>
                        </div>
                        <div class="feature-heading">
                            <div class="feature-area">
                                <div class="card">
                                    <img src="../asset9.jpeg" alt="" />
                                    <h4>White Shoes</h4>
                                    <p>$130.00</p>
                                </div>
                                <div class="card">
                                    <img src="../asset10.jpeg" alt="" />
                                    <h4>Puma-Black T-Shirt</h4>
                                    <p>$150.00</p>
                                </div>
                                <div class="card">
                                    <img src="../asset11.jpeg" alt="" />
                                    <h4>HRX Socks</h4>
                                    <p>20.00</p>
                                </div>
                                <div class="card">
                                    <img src="../asset12.jpeg" alt="" />
                                    <h4>FOSSIL- Black Watch</h4>
                                    <p>$550.00</p>
                                </div>
                            </div>
                            <div class="feature-area flex">
                                <div class="card flex">
                                    <img src="../asset13.jpeg" alt="" />
                                    <h4>Roadstar-Analog Watch</h4>
                                    <p>$60.00</p>
                                </div>
                                <div class="card flex">
                                    <img src="../asset14.jpeg" alt="" />
                                    <h4>HRX Shoes</h4>
                                    <p>$160.00</p>
                                </div>
                                <div class="card flex">
                                    <img src="../asset15.jpeg" alt="" />
                                    <h4>Footwear</h4>
                                    <p>$120.00</p>
                                </div>
                                <div class="card flex">
                                    <img src="../asset16.jpeg" alt="" />
                                    <h4>Nike-Black Trouser</h4>
                                    <p>$170.00</p>
                                    {/* <!-- <a href="#" class="secondary-button">Learn more <i class="fa-solid fa-arrow-right-long"></i></a> --> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>



                {/* <!-- big-feature-section --> */}

                <div class="header">
                    <section class="big-feature">
                        <div class="container">
                            <div class="feature-img">
                                <img src="../asset17.png" alt="" />
                            </div>
                            <div class="feature-desc">
                                <p>Exclusively Available on RedStore</p>
                                <h2>Smart Band 4</h2>
                                <p>The MI Smart Band 4 features a 39.9% larger than MI Smart Band 3 AMOLED color full-touch
                                    display with adjustable brightness , so everything is clear as can be.</p>
                                <Link to={"/Items"}><button class="primary-button gsb">Buy Now</button></Link>
                            </div>
                        </div>
                    </section>
                </div>


                {/* <!-- example - section-- > */}
                <section class="example">
                    <div class="container">
                        <div class="example-header">
                            <h2>User reviews</h2>
                        </div>
                        <div class="example-area">
                            <div class="example-card">
                                <h6>The shirts seem to be made well enough. No poorly stiched seams found.
                                    Comfortable when worn alone or under another shirt. Maybe not as soft as other t-shirts, but
                                    aren't scratchy.</h6>
                                <img src="../asset18.png" alt="" />
                                <h5>Sean Parker</h5>
                            </div>
                            <div class="example-card">
                                <h6>I canceled at first. I tried it on again to compare this to my
                                    current t-shirts. It feels and fits great. I will keep this order and order another set for
                                    the woman I am dating.</h6>
                                <img src="../asset19.png" alt="" />
                                <h5>Tom Holland</h5>
                            </div>
                            <div class="example-card">
                                <h6>All my life, I've struggled to find shoes that fit.These shoes
                                    fit me right away. I didn't even need to break them in. That's a first for me.
                                    Thank you very much!!!!</h6>
                                <img src="../asset20.png" alt="" />
                                <h5>Michiela</h5>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!--companies - section-- > */}
                <section class="companies">
                    <div class="container">
                        <div class="logoses">
                            <img class="logoes" src="../asset21.png" alt="" />
                            <img class="logoes" src="../asset22.png" alt="" />
                            <img class="logoes" src="../asset23.png" alt="" />
                            <img class="logoes" src="../asset24.png" alt="" />
                            <img class="logoes" src="../asset25.png" alt="" />
                        </div>
                    </div>
                </section>


                {/* <!-- footer --> */}
                <footer class="foot">
                    <div class="container">
                        <div class="link-column">
                            <h4>Download our App</h4>
                            <h5>Download app for android and Ios mobile phones.</h5>
                            <div class="google">
                                <a href="#" class="company-logo">
                                    <img id="img1" src="../asset26.png" alt="" />
                                </a>
                                <a href="#" class="company-logo">
                                    <img id="img1" src="../asset27.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="link-column">
                            <div class="googles">
                                <a href="#" class="company-logo">
                                    <img id="img3" src="../asset28.png" alt="" />
                                </a>
                            </div>
                            <h5>Our Purpose Is To Sustainably Make The Pleasure and benefits of Sports Accessible to the Many.</h5>
                        </div>
                        <div class="link-column">
                            <h4>Useful Links</h4>
                            <div>
                                <h5><a href="#" class="hover-links ">Coupons</a></h5>
                                <h5><a href="#" class="hover-links ">Blog Post</a></h5>
                                <h5><a href="#" class="hover-links ">Return Policy</a></h5>
                                <h5><a href="" class="hover-links ">Join Affiliate</a></h5>
                            </div>
                        </div>
                        <div class="link-column">
                            <h4>Follow Us</h4>
                            <div>
                                <h5><a href="" class="hover-links ">Facebook</a></h5>
                                <h5><a href="" class="hover-links ">Instagram</a></h5>
                                <h5><a href="" class="hover-links ">Twitter</a></h5>
                                <h5><a href="" class="hover-links ">You Tube</a></h5>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="copy">
                        <h4 > &copy;Copyright 2022 - RedStore Pvt. Ltd.</h4>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Home;
