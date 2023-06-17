import { Pagination } from "antd";
import s from './HotelInfo.module.css'
import React from "react";
const HotelPagination = React.memo((props) =>{ 
    let pagesCount = Math.ceil(props.totalDocs / props.pageSize)
        const onChangePage = (i) =>{ 
            props.getCurrentPageAC(i)
        }
    return( 
        <div className={s.hotel__pagination}> 
            <Pagination onChange={(e) => onChangePage(e)} total={pagesCount *10} current={props.currentPage}/>   
        </div>
    )
} )
export default HotelPagination