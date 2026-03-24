import { Link } from "react-router-dom"
import footerMenu from "../data/footerMenu"

export default function AppFooter() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container">
                {footerMenu.map(item => (
                    <Link
                        key={item.id}
                        to={item.link}
                        className="mx-2 text-white text-decoration-none"
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
        </footer>
    )
}