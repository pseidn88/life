import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import Nav from "../nav/Nav.jsx"

const Header = () => {
	const contractAddress = "soon mugu......";
	const exchangeUrl = "https://dexscreener.com/solana/";
  return (
    <>
    <div className="grid-container header">
		<Nav/>
	    <div className="plane">
		    <div className="grid"></div>
		    <div className="glow"></div>
	    </div>
	<div className="plane">
		<div className="grid"></div>
		<div className="glow"></div>
	</div>
</div>
<div className = "banner-content">
<div className="image__container">
	<img src="/img/download.png" alt="" width="600px" height="400px"/>
</div>
<div className="text-container">
	<div className="text-wrapper">
		<h2>Get Ready to Drop Some $CACA!</h2>
		<p>Contract Addres: <span>{contractAddress}</span></p>
	</div>
	<div className="button__container">
		<button className='btn'>Purchase $caca</button>
	</div>
</div>
</div>

</>
  )
}

export default Header