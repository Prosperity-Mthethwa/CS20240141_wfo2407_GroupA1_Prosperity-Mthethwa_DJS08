import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import Vanny from "../images/van.jpg"

const van = [
    {
        id: 1,
        color: "purple",
        type: "Minivan",
        registration: new Date('2017-01-03'),
        capacity: 7
    },
    {
        id: 2,
        color: "purple",
        type: "Sedan",
        registration: new Date('2020-08-16'),
        capacity: 5
    },
    {
        id: 3,
        color: "red",
        type: "Wagon",
        registration: new Date('2018-03-03'),
        capacity: 5
    },
    {
        id: 4,
        color: "blue",
        type: "Sedan",
        registration: new Date('2019-05-03'),
        capacity: 5
    },
    {
        id: 5,
        color: "orange",
        type: "Sedan",
        registration: new Date('2020-08-01'),
        capacity: 8
    },
    {
        id: 6,
        color: "green",
        type: "Wagon",
        registration: new Date('2021-04-04'),
        capacity: 7
    },
    {
        id: 7,
        color: "blue",
        type: "Wagon",
        registration: new Date('2021-02-22'),
        capacity: 7
    }
]

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter ? van.filter(v => v.type === typeFilter) : van

    const vanElements = displayedVans.map(v => (
        <div className="van-tile" key={v.id}>
            <img src={Vanny} />
            <Link to={`/vans/${v.id}`}>
                <div className="van-info">
                    <h2>{v.type}</h2>
                    <h4>color: {v.color}</h4>
                </div>
                <i className={`van-capacity ${v.capacity} selected`}>{v.capacity}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <Link to="?type=Minivan" className="van-type minivan"> Minivan </Link>
                <Link to="?type=Sedan" className="van-type sedan"> Sedan </Link>
                <Link to="?type=Wagon" className="van-type wagon"> Wagon </Link>
                <Link to="." className="van-type clear-filter">Clear</Link>
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}