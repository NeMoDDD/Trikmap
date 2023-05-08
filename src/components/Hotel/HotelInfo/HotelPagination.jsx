
const HotelPagination = (props) =>{ 
    let pagesCount = Math.ceil(props.totalDocs / props.pageSize)
        let pages = []; 
        for(let i = 1; i<= pagesCount; i++){ 
            pages.push(i)
        }  
        const onPageChange = () =>{ 
            props.getNextPageTC(props.lastVisible)
        }
    return( 
        <div> 
            {pages.map(item => <button onClick={onPageChange}>{item}</button>)}
        </div>
    )
} 
export default HotelPagination