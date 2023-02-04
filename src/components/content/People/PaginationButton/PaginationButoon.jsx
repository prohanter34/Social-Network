import { NavLink } from "react-router-dom"
import s from "./Pagination.module.css"



const Pagination = (props) => {
    let pagination = []
    
    let onPageChoose = (currentPage) => {
        props.getUsers(props.countOnPage, currentPage)
    }

    for (let i = 1; i < Math.ceil(props.totalCount / props.pageSize) && (i < props.currentPage + 10); i++) {
        if (i + 10 > props.currentPage) {
            pagination.push(
                <NavLink to={`/people/${i}`} key={i} onClick={() => { props.choosePage(i); onPageChoose(i) }} className={({isActive}) => isActive ? s.activeBtn : s.btn}>{i}</NavLink>
            )
        }
    }

    return (
        <div className={s.container}>
            {pagination}
        </div>
    )
}

export default Pagination