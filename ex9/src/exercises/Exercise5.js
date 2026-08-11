function Exercise5() {
    return (
        <div className="website">

            <header>
                <div className="logo">
                    <img src="/images/fpt.png" alt="FPT University" />
                </div>

                <nav>
                    <a href="#about">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <section id="about">
                <h2>About</h2>
                <p>This is the about section of the website.</p>
            </section>

            <section id="contact">
                <h2>Contact</h2>
                <p>
                    For any inquiries, please contact us at example@example.com.
                </p>
            </section>

            <footer>
                © 2023 Website. All rights reserved.
            </footer>

        </div>
    );
}

export default Exercise5;