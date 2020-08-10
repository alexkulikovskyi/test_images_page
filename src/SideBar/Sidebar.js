import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Photos} from '../Photos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFile,
    faFileImage,
    faCropAlt,
    faLink,
    faClock,
    faPlay
} from '@fortawesome/free-solid-svg-icons'
import {ProgressBar} from './ProgressBar'
const routes = [
  {
    path: "/files",
    sidebar: () => <div></div>,
    main: () => <h2>Files</h2>
  },
  {
    path: "/",
    exact: true,
    sidebar: () => <ProgressBar />,
    main: () => <Photos/>
  },
  {
    path: "/sharing",
    sidebar: () => <div></div>,
    main: () => <h2>Sharing</h2>
  },
  {
    path: "/links",
    sidebar: () => <div></div>,
    main: () => <h2>Links</h2>
  },
  {
    path: "/events",
    sidebar: () => <div></div>,
    main: () => <h2>Events</h2>
  },
  {
    path: "/started",
    sidebar: () => <div></div>,
    main: () => <h2>Get Started</h2>
  }
];

export default function Sidebar() {
    return (
        <Router>
            <div style={{ 
                display: "flex",
                height: "100vh" 
                }}
            >
                <div
                    style={{
                        padding: "10px",
                        width: "15%",
                        height:"auto",
                        background: "#FFDEDE",
                        flex: "0 0 auto"
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link to="/files">
                                <span><FontAwesomeIcon icon = {faFile}/></span>
                                <span className = "link-span">Files</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span><FontAwesomeIcon icon ={faFileImage}/></span>
                                <span className = "link-span">Photos</span>
                        </Link>
                        </li>
                        <li>
                            
                            <Link to="/sharing">
                                <span><FontAwesomeIcon icon ={faCropAlt}/></span>
                                <span className = "link-span">Sharing</span>
                            </Link>
                        </li>
                        <li>
                            
                            <Link to="/links">
                                <span><FontAwesomeIcon icon ={faLink}/></span>
                                <span className = "link-span">Links</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/events">
                                <span><FontAwesomeIcon icon ={faClock}/></span>
                                <span className = "link-span">Events</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/started">
                                <span><FontAwesomeIcon icon ={faPlay}/></span>
                                <span className = "link-span">Get Started</span>
                            </Link>
                        </li>
                    </ul>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>

                <div style={{ 
                    display: "flex",   
                    flexWrap:"wrap",    
                    flexDirection: "row", 
                    justifyContent: "center",
                    position: "reletive",
                    padding: "10px",
                    flex: "1 1 auto",
                    overflow: "auto"
                }}> 
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    )
}