import {useDispatch, useSelector} from "react-redux";
import {setAttractions, setCurrentPage} from "../store/slices/attractionsSlice";
import data from "../../json/kyrgyzstanPlaces.json"
import Paginator from "../common/Paginator/Paginator";
import Attraction from "./Attraction";
import React, {useState} from "react";
import {Button} from "antd";

const Attractions = () => {
    const dispatch = useDispatch()
    const {
        pageSize, portionSize, currentPage,
        totalCountAll, totalCountChuy, totalCountBatken,
        totalCountIssykkol, totalCountJalabad, totalCountNaryn,
        totalCountOsh, totalCountTalas
    } = useSelector(state => state.attractions)
    const [totalCount, setTotalCount] = useState()
    const [region, setRegion] = useState("chuy")
    const setCurrentPageClick = (id) => {
        dispatch(setCurrentPage({
            currentPage: id
        }))
    }
    const onClickAllRegion = () => {
        setRegion("all")
        setTotalCount(totalCountAll)
    }
    const onClickChuyRegion = () => {
        setRegion("chuy")
        setTotalCount(totalCountChuy)
    }
    const onClickTalasRegion = () => {
        setRegion("talas")
        setTotalCount(totalCountTalas)
    }
    const onClickOshRegion = () => {
        setRegion("osh")
        setTotalCount(totalCountOsh)
    }
    const onClickBatkenRegion = () => {
        setRegion("batken")
        setTotalCount(totalCountBatken)
    }
    const onClickJalalabadRegion = () => {
        setRegion("jalalabad")
        setTotalCount(totalCountJalabad)
    }
    const onClickNarynRegion = () => {
        setRegion("naryn")
        setTotalCount(totalCountNaryn)
    }
    const onClickIssykkolRegion = () => {
        setRegion("issykkol")
        setTotalCount(totalCountIssykkol)
    }
    return (
        <div>
            <div className="geojson-toggle">
                <div className="region-name__geojson">
                    <Button type="default" onClick={onClickAllRegion}>Все</Button>
                    <Button type="default" onClick={onClickChuyRegion}>Чуй</Button>
                    <Button type="default" onClick={onClickTalasRegion}>Талас</Button>
                    <Button type="default" onClick={onClickOshRegion}>Ош-</Button>
                    <Button type="default" onClick={onClickBatkenRegion}>Баткен</Button>
                    <Button type="default" onClick={onClickJalalabadRegion}>Джалал-Абад</Button>
                    <Button type="default" onClick={onClickNarynRegion}>Нарын</Button>
                    <Button type="default" onClick={onClickIssykkolRegion}>Иссык-Куль</Button>
                </div>

            </div>
            <Paginator pageSize={pageSize}
                       portionSize={portionSize}
                       currentPage={currentPage}
                       totalItemsCount={totalCount}
                       onPageChanged={setCurrentPageClick}
            />
            {region === "chuy" || region === "all" ?
                data.chuy.map((d, index) => <Attraction location={d.properties.location}
                                                        description={d.properties.description}
                                                        title={d.properties.name}
                                                        imgSrc={null}
                                                        key={index}
                />)
                : null}
            {region === "talas" || region === "all" ?
                data.talas.map((d, index) => <Attraction location={d.properties.location}
                                                         description={d.properties.description}
                                                         title={d.properties.name}
                                                         imgSrc={null}
                                                         key={index}

                />)
                : null}
            {region === "osh" || region === "all" ?
                data.osh.map((d, index) => <Attraction location={d.properties.location}
                                                       description={d.properties.description}
                                                       title={d.properties.name}
                                                       imgSrc={null}
                                                       key={index}

                />)
                : null}
            {region === "batken" || region === "all" ?
                data.batken.map((d, index) => <Attraction location={d.properties.location}
                                                          description={d.properties.description}
                                                          title={d.properties.name}
                                                          imgSrc={null}
                                                          key={index}

                />)
                : null}
            {region === "jalalabad" || region === "all" ?
                data.jalalabad.map((d, index) => <Attraction location={d.properties.location}
                                                             description={d.properties.description}
                                                             title={d.properties.name}
                                                             imgSrc={null}
                                                             key={index}

                />)
                : null}
            {region === "naryn" || region === "all" ?
                data.naryn.map((d, index) => <Attraction location={d.properties.location}
                                                         description={d.properties.description}
                                                         title={d.properties.name}
                                                         imgSrc={null}
                                                         key={index}

                />)
                : null}
            {region === "issykkol" || region === "all" ?
                data.issykkol.map((d, index) => <Attraction location={d.properties.location}
                                                            description={d.properties.description}
                                                            title={d.properties.name}
                                                            imgSrc={null}
                                                            key={index}

                />)
                : null}
        </div>
    )
}


export default Attractions;