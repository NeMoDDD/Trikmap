
const HotelPagination = (props) =>{ 
    let pagesCount = Math.ceil(props.totalDocs / props.pageSize)
        let pages = []; 
        for(let i = 1; i<= pagesCount; i++){ 
            pages.push(i)
        }   
        const onChangePage = (i) =>{ 
            console.log(i) 
            props.getCurrentPageAC(i)
        }

    return( 
        <div> 
            {pages.map((item, index) => <button key={index+item}  className={item === props.currentPage? 'active' : ''} onClick={()=>onChangePage(item)}>{item}</button>)}
        </div>
    )
} 
export default HotelPagination