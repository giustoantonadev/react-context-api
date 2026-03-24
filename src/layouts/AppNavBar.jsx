import { NavLink } from "react-router-dom"
import navMenu from "../data/navMenu"
import { useContext } from "react"
import { BudgetContext } from "../contexts/BudgetContext"

export default function AppNavBar() {

    const { budgetMode, setBudgetMode } = useContext(BudgetContext)

    return (

        <nav className="py-3 gap-5 navbar bg-secondary justify-content-center" >
            {navMenu.map(item => <NavLink to={item.path} key={item.id} >{item.text}</NavLink>)}
            <button
                onClick={() => setBudgetMode(!budgetMode)}
                className="btn btn-secondary bg-white text-danger">
                <strong>
                    {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
                </strong>
            </button>
        </nav>

    )
}