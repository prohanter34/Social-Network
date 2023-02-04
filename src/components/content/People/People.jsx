import Person from "./Person/Person"
import React from "react"
import Pagination from "./PaginationButton/PaginationButoon"




class People extends React.Component {

    componentDidMount() {  
        this.props.getUsers(this.props.countOnPage, this.props.currentPage)           
    }

    render() {

        let personBase = this.props.state.map((e) => {
            return (
                <Person name={e.name}
                    smallPhoto={e.photos.small}
                    status={e.status}
                    followed={e.followed}
                    id={e.id}
                    unfollowOnClick={this.props.unfollow}
                    followOnClick={this.props.follow}
                    key={e.id} />
            )
        })


        return (
            <div>
                <Pagination totalCount={this.props.totalCount}
                 pageSize={this.props.pageSize} 
                 currentPage={this.props.currentPage} 
                 choosePage={this.props.choosePage}
                 getUsers={this.props.getUsers}
                 countOnPage={this.props.countOnPage} />
                {personBase}
            </div>
        )
    }
}

export default People