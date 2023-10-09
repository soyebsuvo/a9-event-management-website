
export default function Footer() {
    return (
        <footer className="footer p-10 bg-slate-200 text-base-content">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Weddings</a>
                <a className="link link-hover">Birthday Parties</a>
                <a className="link link-hover">Anniversaries</a>
                <a className="link link-hover">Engagement Parties</a>
                <a className="link link-hover">Retirement Parties</a>
                <a className="link link-hover">Baby shower</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <header className="footer-title">Newsletter</header>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button onClick={e => e.preventDefault()} className="btn bg-[#FCB41E] text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    )
}
