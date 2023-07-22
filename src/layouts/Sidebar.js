import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import userAvatar from "../assets/img/img1.jpg";
import {
    dashboardMenu,
    applicationsMenu,
    pagesMenu,
    uiElementsMenu,
    scenes
} from "../data/Menu";

export default class Sidebar extends Component {
    toggleFooterMenu = (e) => {
        e.preventDefault();

        let parent = e.target.closest(".sidebar");
        parent.classList.toggle("footer-menu-show");
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-header">
                    <Link to="/" className="sidebar-logo">TGrade ERP</Link> 
                    <p style={{fontSize:'10px',padding:'5px'}}>BetaV 0.0.1</p>
                </div>
                <PerfectScrollbar className="sidebar-body" ref={ref => this._scrollBarRef = ref}>
                    <SidebarMenu onUpdateSize={() => this._scrollBarRef.updateScroll()} />
                </PerfectScrollbar>
                <div className="sidebar-footer">
                    <div className="sidebar-footer-top">
                        <div className="sidebar-footer-thumb">
                            <img src={userAvatar} alt="" />
                        </div>
                        <div className="sidebar-footer-body">
                            <h6><Link to="../pages/profile.html">Shaira Diaz</Link></h6>
                            <p>Premium Member</p>
                        </div>
                        <Link onClick={this.toggleFooterMenu} to="" className="dropdown-link"><i className="ri-arrow-down-s-line"></i></Link>
                    </div>
                    <div className="sidebar-footer-menu">
                        <nav className="nav">
                            <Link to=""><i className="ri-edit-2-line"></i> Edit Profile</Link>
                            <Link to=""><i className="ri-profile-line"></i> View Profile</Link>
                        </nav>
                        <hr />
                        <nav className="nav">
                            <Link to=""><i className="ri-question-line"></i> Help Center</Link>
                            <Link to=""><i className="ri-lock-line"></i> Privacy Settings</Link>
                            <Link to=""><i className="ri-user-settings-line"></i> Account Settings</Link>
                            <Link to=""><i className="ri-logout-box-r-line"></i> Log Out</Link>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

class SidebarMenu extends Component {
    populateMenu = (m) => {
        const menu = m.map((m, key) => {
            let sm;
            if (m.submenu) {
                sm = m.submenu.map((sm, key) => {
                    return (
                        <NavLink to={sm.link} className="nav-sub-link" key={key}>{sm.label}</NavLink>
                    )
                })
            }

            return (
                <li key={key} className="nav-item">
                    {(!sm) ? (
                        <NavLink to={m.link} className="nav-link"><i className={m.icon}></i> <span>{m.label}</span></NavLink>
                    ) : (
                        <div onClick={this.toggleSubMenu} className="nav-link has-sub"><NavLink to={m.link} style={{color:"#41505f"}}><i className={m.icon}></i> <span>{m.label}</span></NavLink></div>
                    )}
                    {m.submenu && <nav className="nav nav-sub">{sm}</nav>}
                </li>
            )
        });

        return (
            <ul className="nav nav-sidebar">
                {menu}
            </ul>
        );
    }

    // Toggle menu group
    toggleMenu = (e) => {
        e.preventDefault();

        let parent = e.target.closest('.nav-group');
        parent.classList.toggle('show');

        this.props.onUpdateSize();
    }

    // Toggle submenu while closing siblings' submenu
    toggleSubMenu = (e) => {
        e.preventDefault();

        let parent = e.target.closest('.nav-item');
        let node = parent.parentNode.firstChild;

        while (node) {
            if (node !== parent && node.nodeType === Node.ELEMENT_NODE)
                node.classList.remove('show');
            node = node.nextElementSibling || node.nextSibling;
        }

        parent.classList.toggle('show');

        this.props.onUpdateSize();
    }

    render() {
        return (
            <React.Fragment>
                 <div className="nav-group show">
                    <div className="nav-label" onClick={this.toggleMenu}>Owner</div>
                    {this.populateMenu(scenes)}
                </div>
                <div className="nav-group show">
                    <div className="nav-label" onClick={this.toggleMenu}>Dashboard</div>
                    {this.populateMenu(dashboardMenu)}
                </div>
                <div className="nav-group show">
                    <div className="nav-label" onClick={this.toggleMenu}>Applications</div>
                    {this.populateMenu(applicationsMenu)}
                </div>
                <div className="nav-group show">
                    <div className="nav-label" onClick={this.toggleMenu}>Pages</div>
                    {this.populateMenu(pagesMenu)}
                </div>
                <div className="nav-group show">
                    <div className="nav-label" onClick={this.toggleMenu}>UI Elements</div>
                    {this.populateMenu(uiElementsMenu)}
                </div>
            </React.Fragment>
        )
    }
}

window.addEventListener("click", function (e) {
    // Close sidebar footer menu when clicked outside of it
    let tar = e.target;
    let sidebar = document.querySelector(".sidebar");
    if (!tar.closest(".sidebar-footer") && sidebar) {
        sidebar.classList.remove("footer-menu-show");
    }

    // Hide sidebar offset when clicked outside of sidebar
    if (!tar.closest(".sidebar") && !tar.closest(".menu-link")) {
        document.querySelector("body").classList.remove("sidebar-show");
    }
});

window.addEventListener("load", function () {
    let skinMode = localStorage.getItem("sidebar-skin");
    let HTMLTag = document.querySelector("html");

    if (skinMode) {
        HTMLTag.setAttribute("data-sidebar", skinMode);
    }
});