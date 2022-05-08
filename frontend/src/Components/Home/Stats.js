import React from 'react'
import './Stats.css'

const Stats = (props) => {
    const {totalBorrowed,totalLent,onTime,defaulted,noBorrowed,noLent}=props;
    return (
        <div className="stats">
            <div className="cardStats">
                <img className="rupee" style={{padding:"0.25em"}}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Indian_Rupee_symbol_link_blue.svg/407px-Indian_Rupee_symbol_link_blue.svg.png?20200510030330" />
                <p className="figure">{totalBorrowed}</p>
                <p className="title">Total Amount Borrowed</p>
            </div>

            <div className="cardStats">
                <img className="rupee" style={{padding:"0.25em"}}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Indian_Rupee_symbol_link_blue.svg/407px-Indian_Rupee_symbol_link_blue.svg.png?20200510030330" />
                <p className="figure">{totalLent}</p>
                <p className="title">Total Amount Lent</p>
            </div>

            <div className="cardStats">
                <img className="rupee"
                    src="https://st.depositphotos.com/1002927/1281/i/950/depositphotos_12812785-stock-photo-blue-percent-symbol.jpg" />
                <p className="figure">{onTime}</p>
                <p className="title">Repayed On Time</p>
            </div>
            <div className="cardStats">
                <img className="rupee"
                    src="https://st.depositphotos.com/1002927/1281/i/950/depositphotos_12812785-stock-photo-blue-percent-symbol.jpg" />
                <p className="figure">{defaulted}</p>
                <p className="title">Defaulted</p>
            </div>

            <div className="cardStats">
                <img className="rupee"
                    src="https://toppng.com/uploads/preview/key-country-statistics-human-development-index-ico-11563355759nx8od6m38x.png" />
                <p className="figure">{noBorrowed}</p>
                <p className="title">No. of loans taken</p>
            </div>

            <div className="cardStats">
                <img className="rupee"
                    src="https://toppng.com/uploads/preview/key-country-statistics-human-development-index-ico-11563355759nx8od6m38x.png" />
                <p className="figure">{noLent}</p>
                <p className="title">No. of loans sanctioned</p>
            </div>

        </div>
    )
}

export default Stats