import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../store/slices/attractionsSlice";
import data from "../../json/kyrgyzstanPlaces.json"
import Attraction from "./Attraction";
import React, {useEffect, useState} from "react";
import {Button, Pagination, Select} from "antd";
import style from "./Attraction.module.css"

const Attractions = () => {
    const dispatch = useDispatch()
    const {
        pageSize,
        currentPage,
        totalCountAll,
        totalCountChuy,
        totalCountBatken,
        totalCountIssykkol,
        totalCountJalabad,
        totalCountNaryn,
        totalCountOsh,
        totalCountTalas,
        totalCountOfType,
    } = useSelector(state => state.attractions)
    const [totalCount, setTotalCount] = useState(totalCountAll)
    const [region, setRegion] = useState("all")
    const [dataRegion, setDataRegion] = useState(data.all)
    const [type, setType] = useState("All")

    const lastPostIndex = currentPage * pageSize;
    const firstPostIndex = lastPostIndex - pageSize

    const onSelectChange = (value) => {
        if (value !== "All") {
            setType(value)

            onClickRegion(region, dataRegion.filter(p => p.properties.type === value).length)
        }
        setType(value)
    };

    const setCurrentPageClick = (id) => {
        dispatch(setCurrentPage({
            currentPage: id
        }))
    }
    const onClickRegion = (region, totalCount) => {
        if (type !== "All") {
            setTotalCount(totalCount)
        } else {
            setTotalCount(totalCount)
        }
        dispatch(setCurrentPage({
            currentPage: 1
        }))
        setRegion(region)
    }

    const onClickAllRegion = () => {
        onClickRegion("all", totalCountAll)
        setDataRegion(data.all)
    }
    const onClickChuyRegion = () => {
        onClickRegion("chuy", totalCountChuy)
        setDataRegion(data.chuy)
    }
    const onClickTalasRegion = () => {
        onClickRegion("talas", totalCountTalas)
        setDataRegion(data.talas)
    }
    const onClickOshRegion = () => {
        onClickRegion("osh", totalCountOsh)
        setDataRegion(data.osh)
    }
    const onClickBatkenRegion = () => {
        onClickRegion("batken", totalCountBatken)
        setDataRegion(data.batken)
    }
    const onClickJalalabadRegion = () => {
        onClickRegion("jalalabad", totalCountJalabad)
        setDataRegion(data.jalalabad)
    }
    const onClickNarynRegion = () => {
        onClickRegion("naryn", totalCountNaryn)
        setDataRegion(data.naryn)
    }
    const onClickIssykkolRegion = () => {
        onClickRegion("issykkol", totalCountIssykkol)
        setDataRegion(data.issykkol)
    }

    const regionVisible = (regionOn, dataRegion) => {
        return (region === regionOn && type !== "All" ? dataRegion.filter(p => p.properties.type === type).slice((firstPostIndex), lastPostIndex)
            .map((p, index) => {
                return (
                    <Attraction location={p.properties.location}
                                description={p.properties.description}
                                title={p.properties.name}
                                imgSrc={p.properties.image}
                                key={index}/>)
            }) : (region === regionOn && type === "All" ? dataRegion.slice(firstPostIndex, lastPostIndex).map((d, index) =>
            <Attraction location={d.properties.location}
                        description={d.properties.description}
                        title={d.properties.name}
                        imgSrc={d.properties.image}
                        key={index}
            />) : null))
    }
    return (<div className={style.main}>
        <div className={style.geojsonToggle}>
            <div className={style.regionName__geojson}>
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
        <div className={style.selectBlock}>
            <Select
                defaultValue="All"
                style={{
                    width: 120,
                }}
                onChange={onSelectChange}

                options={[
                    {
                        value: 'All',
                        label: 'Все',
                    },
                    {
                        value: 'park',
                        label: 'Парки',
                    },
                    {
                        value: 'gorge',
                        label: 'Ущелья',
                    },
                    {
                        value: 'valley',
                        label: 'Долины',
                    },
                    {
                        value: 'theatre',
                        label: 'Театры',
                    },
                    {
                        value: 'museum',
                        label: 'Музеи',
                    },
                    {
                        value: 'gallery',
                        label: 'Галлереи',
                    },
                    {
                        value: 'canyon',
                        label: 'Каньоны',
                    },
                    {
                        value: 'lake',
                        label: 'Озера',
                    },
                    {
                        value: 'river',
                        label: 'Реки',
                    },
                    {
                        value: 'tower',
                        label: 'Башни',
                    },
                    {
                        value: 'place',
                        label: 'Площади',
                    },
                    {
                        value: 'circus',
                        label: 'Цирки',
                    },
                    {
                        value: 'statue',
                        label: 'Статуи',
                    },
                    {
                        value: 'philharmonic',
                        label: 'Филармонии',
                    },
                    {
                        value: 'mosque',
                        label: 'Мечети',
                    },
                    {
                        value: 'mausoleum',
                        label: 'Мавзолеи',
                    },
                    {
                        value: 'nature park',
                        label: 'Природные парки',
                    },
                    {
                        value: 'waterfall',
                        label: 'Водопады',
                    },
                    {
                        value: 'historical complex',
                        label: 'Исторические комплексы',
                    },
                    {
                        value: 'mountain',
                        label: 'Горы',
                    },
                    {
                        value: 'cave',
                        label: 'Пещеры',
                    },
                    {
                        value: 'fortress',
                        label: 'Крпепости',
                    },
                    {
                        value: 'recreation area',
                        label: 'Зоны отдыха',
                    },
                    {
                        value: 'nature reserves',
                        label: 'Природные заповедники',
                    },
                    {
                        value: 'pass',
                        label: 'Перевалы',
                    },
                    {
                        value: 'water reservoir',
                        label: 'Водохранилища',
                    },

                ]}
            />
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
            regionVisible("all", data.all)
        }

        {
            regionVisible("chuy", data.chuy)
        }
        {
            regionVisible("talas", data.talas)
        }
        {
            regionVisible("osh", data.osh)
        }
        {
            regionVisible("batken", data.batken)
        }
        {
            regionVisible("jalalabad", data.jalalabad)
        }
        {
            regionVisible("naryn", data.naryn)
        }
        {
            regionVisible("issykkol", data.issykkol)
        }
    </div>)
}


export default Attractions;