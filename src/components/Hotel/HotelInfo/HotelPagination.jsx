import { Pagination } from "antd";
import s from './HotelInfo.module.css'
const HotelPagination = (props) =>{ 
    let pagesCount = Math.ceil(props.totalDocs / props.pageSize)
        let pages = []; 
        for(let i = 1; i<= pagesCount; i++){ 
            pages.push(i)
        }   
        const onChangePage = (i) =>{ 
            props.getCurrentPageAC(i)
        }

    return( 
        <div className={s.hotel__pagination}> 
            {/* {pages.map((item, index) => <button key={index+item}  className={item === props.currentPage? 'active' : ''} onClick={()=>onChangePage(item)}>{item}</button>)}  */}
            <Pagination onChange={(e) => onChangePage(e)} total={pagesCount *10}/>   
        </div>
    )
} 
export default HotelPagination