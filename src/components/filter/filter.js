/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './filter.css'

 
const filter = ({filterRegion, setFilterRegion}) => {
    return(
        <>
            <label htmlFor="region"></label>
            <select
                name="region" 
                id="region" 
                className="region"
                onChange={(e) => setFilterRegion(e.target.value)}
            >
                <option value="all">Filter by Region</option>
                <option value="all">All Region</option>
                <option value="regionalbloc/eu">European Union</option>
                <option value="regionalbloc/efta">European Free Trade Association</option>
                <option value="regionalbloc/caricom">Caribean Community</option>
                <option value="regionalbloc/pa">Pacific Alliance</option>
                <option value="regionalbloc/au">African Union</option>
                <option value="regionalbloc/usan">Union of South American Nations</option>
                <option value="regionalbloc/eeu">Eurasian Economic Union</option>
                <option value="regionalbloc/al">Arab League</option>
                <option value="regionalbloc/asean">Association of Southeast Asian Nations</option>
                <option value="regionalbloc/cais">Central American Integration System</option>
                <option value="regionalbloc/cefta">Central European Free Trade Agreement</option>
                <option value="regionalbloc/nafta">North American Free Trade Agreement</option>
                <option value="regionalbloc/saarc">South Asian Association for Regional Cooperation</option>

            </select>
        </>
    )
};

export default filter