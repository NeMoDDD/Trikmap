import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../store/slices/attractionsSlice";
import data from "../../json/kyrgyzstanPlaces.json"
import Attraction from "./Attraction";
import React, {useState} from "react";
import {Button, Pagination} from "antd";
import style from "./Attraction.module.css"

const Attractions = () => {
    const dispatch = useDispatch()
    const {
        pageSize,
        portionSize,
        currentPage,
        totalCountAll,
        totalCountChuy,
        totalCountBatken,
        totalCountIssykkol,
        totalCountJalabad,
        totalCountNaryn,
        totalCountOsh,
        totalCountTalas
    } = useSelector(state => state.attractions)
    const [totalCount, setTotalCount] = useState(totalCountAll)
    const [region, setRegion] = useState("all")

    const lastPostIndex = currentPage * pageSize;
    const firstPostIndex = lastPostIndex - pageSize
    const dataAll = data.all.slice(firstPostIndex, lastPostIndex)
    const dataChuy = data.chuy.slice(firstPostIndex, lastPostIndex)
    const dataTalas = data.talas.slice(firstPostIndex, lastPostIndex)
    const dataOsh = data.osh.slice(firstPostIndex, lastPostIndex)
    const dataBatken = data.batken.slice(firstPostIndex, lastPostIndex)
    const dataJalalabad = data.jalalabad.slice(firstPostIndex, lastPostIndex)
    const dataNaryn = data.naryn.slice(firstPostIndex, lastPostIndex)
    const dataIssykkol = data.issykkol.slice(firstPostIndex, lastPostIndex)

    const setCurrentPageClick = (id) => {
        dispatch(setCurrentPage({
            currentPage: id
        }))
    }
    const onClickRegion = (region, totalCount) => {
        dispatch(setCurrentPage({
            currentPage: 1
        }))
        setRegion(region)
        setTotalCount(totalCount)
    }

    const onClickAllRegion = () => {
        onClickRegion("all", totalCountAll)
    }
    const onClickChuyRegion = () => {
        onClickRegion("chuy", totalCountChuy)
    }
    const onClickTalasRegion = () => {
        onClickRegion("talas", totalCountTalas)
    }
    const onClickOshRegion = () => {
        onClickRegion("osh", totalCountOsh)
    }
    const onClickBatkenRegion = () => {
        onClickRegion("batken", totalCountBatken)
    }
    const onClickJalalabadRegion = () => {
        onClickRegion("jalalabad", totalCountJalabad)
    }
    const onClickNarynRegion = () => {
        onClickRegion("naryn", totalCountNaryn)
    }
    const onClickIssykkolRegion = () => {
        onClickRegion("issykkol", totalCountIssykkol)
    }

    const regionVisible = (regionOn, dataRegion) => {
        return (region === regionOn ? dataRegion.map((d, index) => <Attraction location={d.properties.location}
                                                                            description={d.properties.description}
                                                                            title={d.properties.name}
                                                                            imgSrc={d.properties.image}
                                                                            key={index}
        />) : null)
    }
    return (<div>
        <div className="geojson-toggle">
            <div className="region-name__geojson">
                <Button type="default" onClick={onClickAllRegion}
                        className={region === "all" ? style.geojsonToggle__btn__active : style.geojsonToggle__btn}>Все</Button>
                <Button type="default" onClick={onClickChuyRegion}
                        className={region === "chuy" ? style.geojsonToggle__btn__active : style.geojsonToggle__btn}>Чуй</Button>
                <Button type="default" onClick={onClickTalasRegion}
                        className={region === "talas" ? style.geojsonToggle__btn__active : style.geojsonToggle__btn}>Талас< /Button>
                <Button type="default" onClick={onClickOshRegion}
                        className={region === "osh" ? style.geojsonToggle__btn__active : style.geojsonToggle__btn}>Ош</Button>
                <Button type="default" onClick={onClickBatkenRegion}
                        className={region === "batken" ? style.geojsonToggle__btn__active : style.geojsonToggle__btn}>Баткен</Button>
                <Button type="default" onClick={onClickJalalabadRegion}
                        className={region === "jalalabad" ? style.geojsonToggle__btn__active : style.geojsonToggle__btn}>Джалал-Абад</Button>
                <Button type="default" onClick={onClickNarynRegion}
                        className={region === "naryn" ? style.geojsonToggle__btn__active : style.geojsonToggle__btn}>Нарын</Button>
                <Button type="default" onClick={onClickIssykkolRegion}
                        className={region === "issykkol" ? style.geojsonToggle__btn__active : style.geojsonToggle__btn}>Иссык-Куль</Button>
            </div>

        </div>
        {/*<Paginator pageSize={pageSize}*/}
        {/*           portionSize={portionSize}*/}
        {/*           currentPage={currentPage}*/}
        {/*           totalItemsCount={totalCount}*/}
        {/*           onPageChanged={setCurrentPageClick}*/}
        {/*/>*/}
        <Pagination defaultCurrent={currentPage} total={totalCount} defaultPageSize={pageSize}
                    showSizeChanger={false} onChange={setCurrentPageClick}/>
        {
            regionVisible("all", dataAll)
        }

        {
            regionVisible("chuy", dataChuy)
        }
        {
            regionVisible("talas", dataTalas)
        }
        {
            regionVisible("osh", dataOsh)
        }
        {
            regionVisible("batken", dataBatken)
        }
        {
            regionVisible("jalalabad", dataJalalabad)
        }
        {
            regionVisible("naryn", dataNaryn)
        }
        {
            regionVisible("issykkol", dataIssykkol)
        }
    </div>)
}


export default Attractions;