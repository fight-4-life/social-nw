import React from 'react';
import styles from './Users.module.css'

const Pagination = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(page =>
                <span className={props.currentPage === page && styles.selectedPage}
                    onClick={() => { props.onPageChange(page) }}>{page}</span>
            )
            }
        </div>
    )
}

export default Pagination;