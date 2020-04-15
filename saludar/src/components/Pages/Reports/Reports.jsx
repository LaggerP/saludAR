import React, {Component} from 'react';
import Navbar from "../../Navbar/Navbar";
import './Reports.scss'
import {CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import moment from 'moment'
import Area from "recharts/lib/cartesian/Area";
import AreaChart from "recharts/lib/chart/AreaChart";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            covidArgentinaData: [],
            country: 'Argentina',
            globalData: [],
        }
    }

    componentDidMount() {
        this.getGlobalData();
        this.getCovidData();
    }

    async getGlobalData() {
        await fetch(`https://api.covid19api.com/summary`)
            .then(res => res.json())
            .then((result) => {
                result.Date = moment(result.Date).format("DD/MM/YYYY");
                this.setState({globalData: result});
            })
    }


    async getCovidData() {
        await fetch(`https://api.covid19api.com/country/${this.state.country}`)
            .then(res => res.json())
            .then((result) => {
                result.map(res => {
                    res.Date = moment(res.Date).format("DD/MM/YYYY");
                })
                this.setState({covidArgentinaData: result});
            })
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="ReportsContainer">
                    <h1><span role="img" aria-label>Covid-19🦠 en Argentina:</span></h1>
                    <h5>*La información detallada a continuación puede no estar actualizada</h5>
                    <ResponsiveContainer width="99%" height={500}>
                        <AreaChart data={this.state.covidArgentinaData}
                                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                            <defs>
                                <linearGradient id="colorConfirmed" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorRecovered" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorDeaths" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ff0000" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#ff0000" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="Date"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Area type="monotone" name="⚠️Confirmados" dataKey="Confirmed" stroke="#74ACDFFF"
                                  fillOpacity={1} fill="url(#colorConfirmed)"/>
                            <Area type="monotone" name="✅Recuperados" dataKey="Recovered" stroke="#32CD32"
                                  fillOpacity={1} fill="url(#colorRecovered)"/>
                            <Area type="monotone" name="☠️Muertes" dataKey="Deaths" stroke="#ff0000" fillOpacity={1}
                                  fill="url(#colorDeaths)"/>

                        </AreaChart>
                    </ResponsiveContainer>


                </div>
            </div>


        );
    }


}

export default Reports;
