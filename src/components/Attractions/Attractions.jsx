import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage, setTotalCount, setType} from "../store/slices/attractionsSlice";
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
        type,
        totalCount
        // totalCountOfType,
    } = useSelector(state => state.attractions)
    const [region, setRegion] = useState("all")
    const [dataRegion, setDataRegion] = useState(data.all)
    const lastPostIndex = currentPage * pageSize;
    const firstPostIndex = lastPostIndex - pageSize

    useEffect(() => {
        dispatch(setTotalCount({totalCount: dataRegion.filter(p => p.properties.type === type).length}))
        dispatch(setCurrentPage({
            currentPage: 1
        }))
    }, [type])

    const onSelectChange = (value) => {
        if (value !== "all") {
            dispatch(setTotalCount({ totalCount: dataRegion.filter(p => p.properties.type === value).length}))
        } else {
            dispatch(setTotalCount({ totalCount: dataRegion.length}))

        }
        dispatch(setCurrentPage({
            currentPage: 1
        }))
        // }
        dispatch(setType({
            type: value
        }))
    };

    const setCurrentPageClick = (id) => {
        dispatch(setCurrentPage({
            currentPage: id
        }))
    }
    const onClickRegion = (region, totalCount, totalCountOfRegion, data) => {
        if (type === "all") {
            dispatch(setTotalCount({ totalCount: totalCountOfRegion}))
        } else {
            dispatch(setTotalCount({ totalCount: data.filter(p => p.properties.type === type).length}))
        }
        dispatch(setCurrentPage({
            currentPage: 1
        }))
        setRegion(region)
    }

    const onClickAllRegion = () => {
        setDataRegion(data.all)
        onClickRegion("all", null, totalCountAll, data.all)
    }
    const onClickChuyRegion = () => {
        setDataRegion(data.chuy)
        onClickRegion("chuy", null, totalCountChuy, data.chuy)
    }
    const onClickTalasRegion = () => {
        setDataRegion(data.talas)
        onClickRegion("talas", null, totalCountTalas, data.talas)
    }
    const onClickOshRegion = () => {
        setDataRegion(data.osh)
        onClickRegion("osh", null, totalCountOsh, data.osh)
    }
    const onClickBatkenRegion = () => {
        setDataRegion(data.batken)
        onClickRegion("batken", null, totalCountBatken, data.batken)
    }
    const onClickJalalabadRegion = () => {
        setDataRegion(data.jalalabad)
        onClickRegion("jalalabad", null, totalCountJalabad, data.jalalabad)
    }
    const onClickNarynRegion = () => {
        setDataRegion(data.naryn)
        onClickRegion("naryn", null, totalCountNaryn, data.naryn)
    }
    const onClickIssykkolRegion = () => {
        setDataRegion(data.issykkol)
        onClickRegion("issykkol", null, totalCountIssykkol, data.issykkol)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const regionVisible = (regionOn, dataRegion) => {
        return (region === regionOn && type !== "all" ? dataRegion.filter(p => p.properties.type === type).slice((firstPostIndex), lastPostIndex)
            .map((p, index) => {
                return (
                    <Attraction location={p.properties.location}
                                description={p.properties.description}
                                title={p.properties.name}
                                imgSrc={p.properties.image}
                                key={index}/>)
            }) : (region === regionOn && type === "all" ? dataRegion.slice(firstPostIndex, lastPostIndex).map((d, index) =>
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
                        className={region === "talas" ? style.geojsonToggle__btn__active : style.geojsonToggle__btn}>Талас</Button>
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
                defaultValue={type}
                style={{
                    width: 120,
                }}
                onChange={onSelectChange}

                options={[
                    {
                        value: 'all',
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
