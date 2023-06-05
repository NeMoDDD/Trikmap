import s from "./Paginator.module.css"
import React, {useState} from "react"

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {

    let pageCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return <div className={s.pagination}>
        {portionNumber > 1 ?
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Previous</button> : null
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p, index) => {
                return <span className={currentPage === p ? s.selectedPage : s.unSelectedPage}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }} key={index}>{p}</span>
            })}
        {portionCount > portionNumber ?
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button> : null
        }
    </div>
}

export default Paginator;