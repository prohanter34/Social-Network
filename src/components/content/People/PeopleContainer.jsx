import { connect } from "react-redux"
import { followThunk, getUsersThunk, setPageNumberCreator, unfollowThunk } from "../../../store/peopleReducer"
import People from "./People"

const mapStateToProps = (state) => {
    
    return {
        state: state.peopleState.items,
        totalCount: state.peopleState.totalCount,
        pageSize: state.peopleState.pageSize,
        currentPage: state.peopleState.currentPage,
        countOnPage: state.peopleState.countOnPage
    }
}

const mapDispathToProps = (dispath) => {
    return {
        follow: (id) => {dispath(followThunk(id))},
        unfollow: (id) => {dispath(unfollowThunk(id))},
        choosePage: (pageNumber) => {dispath(setPageNumberCreator(pageNumber))},
        getUsers: (count, currentPage) => {dispath(getUsersThunk(count, currentPage))}
    }
}

export default connect(mapStateToProps, mapDispathToProps)(People)
