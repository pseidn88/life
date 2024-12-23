import React from 'react'
import './header.css'
import Nav from "../nav/Nav.jsx"

const Header = () => {
	const contractAddress = "DCn76VTnBHQ9TfBGVmVKQgECNiywbj7Pxbk125bjpump";
	const exchangeUrl = "";
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
	<img src="../../../public/img/photo_2024-12-22_20-23-47.jpg" alt="" width="600px" height="400px"/>
</div>
<div className="text-container">
	<div className="text-wrapper">
		<h2>Life is like a meme coin—sometimes it's crazy, but we HODL on</h2>
		<p>Contract Addres: <span>{contractAddress}</span></p>
	</div>
	
</div>
</div>

</>
  )
}

export default Header