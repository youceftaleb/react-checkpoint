const HomePage = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#root">
                        <img src="https://www.nicepng.com/png/full/798-7989606_png-file-svg-black-building-logo-png.png" alt="logo" width={40} height={40} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#root">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#team">Our team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-info" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <section className="hero align-items-center row pt-5 pb-5" style={{backgroundColor:'#C6F8FF'}}>
                <div className="hero-left col-md-4 offset-md-2">
                    <img src='https://www.nicepng.com/png/full/798-7989606_png-file-svg-black-building-logo-png.png' alt="logo" width={200} height={300} />
                </div>
                <div className="hero-right col-md-4">
                    <h1>Get started with us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum tempora laudantium cum asperiores? Perferendis libero fuga veniam dignissimos? Qui, suscipit.</p>
                    <button className="btn btn-outline-danger">sign up now</button>
                </div>
            </section>
            <section id="about" className="about justify-content-evenly row pt-5 pb-5" style={{backgroundColor:'#61B5D9'}}>
            <div className="card col-md-3">
                <div className="container">
                    <h1>About the company</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita rem exercitationem, eligendi veritatis iure, culpa dolorum quia adipisci repellat veniam nam eum consequuntur necessitatibus, cum temporibus mollitia nobis suscipit.</p>
                </div>
            </div>
            <div className="card col-md-3">
                <div className="container">
                    <h1>Our values</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illum assumenda delectus sapiente similique doloremque, dicta eveniet minima illo! Odit delectus maiores commodi ipsam itaque amet magnam ipsum ducimus eum.</p>
                </div>
            </div>
            <div className="card col-md-3">
                <div className="container">
                    <h1>Our mission</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit fugiat nesciunt quo quos corrupti ratione voluptatibus dolorem natus expedita deserunt? Laudantium, veniam non inventore accusamus impedit et quidem corrupti reiciendis.</p>
                </div>
                </div>
            </section>
            <section className="team row justify-content-evenly pt-5 pb-5">
                <div className="team-member card col-md-3">
                    <div className="card-head">
                        <div className="card-img text-center">
                        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="team member" width={300} />
                        </div>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title">team member</h1>
                        <div className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem provident recusandae optio, inventore doloremque magnam! Maiores nemo minima, dignissimos beatae nihil alias. Quibusdam eum nihil dignissimos, commodi architecto natus?</div>
                    </div>
                </div>
                <div className="team-member card col-md-3">
                    <div className="card-head">
                        <div className="card-img text-center">
                        <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600" alt="team member" width={300} />
                        </div>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title">team member</h1>
                        <div className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem provident recusandae optio, inventore doloremque magnam! Maiores nemo minima, dignissimos beatae nihil alias. Quibusdam eum nihil dignissimos, commodi architecto natus?</div>
                    </div>
                </div>
                <div className="team-member card col-md-3">
                    <div className="card-head">
                        <div className="card-img text-center">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="team member" width={300} />
                        </div>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title">team member</h1>
                        <div className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem provident recusandae optio, inventore doloremque magnam! Maiores nemo minima, dignissimos beatae nihil alias. Quibusdam eum nihil dignissimos, commodi architecto natus?</div>
                    </div>
                </div>
            </section>
            <section id="contact container mt-5 mb-5">
                <form className="col-md-8 offset-md-2">
                    <div className="mb-3">
                        <label for="exampleFormControl" className="form-label">Full name</label>
                        <input type="text" className="form-control" id="exampleFormControl" placeholder="enter your full name here"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-danger">Send</button>
                </form>
            </section>
            <footer className="footer">
                <div className="text-center bg-danger">all copywrights to &#169;</div>
            </footer>
        </>
    )
}
export default HomePage;