import React from 'react';

import './nav.css';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			category: '',
			xboxlogoURL: '../xboxlogo.png',
			ps4logoURL: '../ps4logo.png',
			switchlogoURL: '../switchlogo.png'
		}
	}

	toggleSideMenu(e) {
		e.preventDefault();
		console.log("Clicked button");
	}

	handleClick(e) {
		e.preventDefault();
		console.log(e.target.textContent);
	}
	render() {

		return (
			<div className="nav-bar">
				<a href='/'><img className="gg-logo" src="../gamergandalogo.png"/>
				<h3 className="title">GamerGanda</h3></a>
				
				<SideNav className="responsive-small-screens"
					onSelect={(selected) => {
						// Add your code here
						console.log(selected);
					}}
				>
					<SideNav.Toggle />
					<SideNav.Nav defaultSelected="All">
						<NavItem eventKey="All">
							<NavIcon>
								<i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            				</NavIcon>
							<NavText>
								Home
            				</NavText>
						</NavItem>
						<NavItem eventKey="Xbox">
							<NavIcon>
								<i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /><img className="nav-logo" src={this.state.xboxlogoURL} />
							</NavIcon>
								<NavText>
									Xbox
								</NavText>
						</NavItem>


						<NavItem eventKey="PS4">
							<NavIcon>
								<i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /><img className="nav-logo" src={this.state.ps4logoURL} />
							</NavIcon>
							<NavText>
								PS4
            				</NavText>
							
						</NavItem>

						<NavItem eventKey="Nintendo">
							<NavIcon>
								<i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /><img className="nav-logo" src={this.state.switchlogoURL} />
							</NavIcon>
							<NavText>
								Nintendo
            				</NavText>
							
						</NavItem>


						<NavItem eventKey="Other">
							<NavIcon>
								<i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />Other
							</NavIcon>
								<NavText>
									Television / Other
								</NavText>
							<NavItem eventKey="Game of Thrones">
								<NavText>
									Game of Thrones
               					</NavText>
							</NavItem>
							<NavItem eventKey="Youtube">
								<NavText>
									Youtube
                				</NavText>
							</NavItem>
						</NavItem>
					</SideNav.Nav>
				</SideNav>

					{/* Old Version */}
				{/* <button className="nav-button responsive-small-screens" onClick={this.toggleSideMenu}>
					&#8801;
				</button>
				<ul className="inactive side-menu responsive-small-screens">
					<li onClick={category => this.setState({ category })}>Playstation</li>
					<li onClick={category => this.setState({ category })}>Nintendo</li>
					<li onClick={category => this.setState({ category })}>Television</li>
				</ul>
				<ul className="categories responsive-large-screens">
					<li onClick={this.handleClick}>Xbox</li>
					<li onClick={category => this.setState({ category })}>Playstation</li>
					<li onClick={category => this.setState({ category })}>Nintendo</li>
					<li onClick={category => this.setState({ category })}>Television</li>
				</ul> */}


			</div>
		);
	}
}