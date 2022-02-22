module.exports = {
    
    width: 2042,
    height: 798,
    remap: false,
    
    elements:{
	
		"#bg":{
			"src":"8BitCADE.png"
		},

		
		"led.tx":{
			style:{
    			top: "22%",
    			left: "79.95%",
    			width: "4.1%",
    			height: "12%",
				"background-color": "#FA0",
				opacity: 0,
    			"border-radius": "50%"
			}
		},
		
		"led.rx":{
			style:{
				top: "22%",
    			left: "79.95%",
    			width: "4.1%",
    			height: "12%",
				"background-color": "#F00",
				opacity: 0,
				"border-radius": "50%"
			}
		},

		"#Up":{
			style:{
				top: "26%",
				left: "8.4%",
				width: "7.4%",
				height: "20.8%",
				"border-radius": "50%",
			}
		},
		
		"#Left":{
			style:{
				top: "43%",
				left: "2.2%",
				width: "7.4%",
				height: "20.8%",
				"border-radius": "50%"
			}
		},

		"#Down":{
			style:{
				top: "60%",
				left: "8.4%",
				width: "7.4%",
				height: "20.8%",
				"border-radius": "50%"
			}
		},
		"#Right":{
			style:{
				top: "43%",
				left: "14.44%",
				width: "7.4%",
				height: "20.8%",
				"border-radius": "50%"
			}
		},
		"#A":{
			style:{
				top: "60.1%",
				left: "85.2%",
				width: "7.4%",
				height: "20.8%",
				"border-radius": "50%"
			}
		},
		"#B":{
			style:{
				top: "43%",
				left: "91.25%",
				width: "7.4%",
				height: "20.8%",
				"border-radius": "50%"
			}
		},
		"#PWR":{
			style:{
				width: "2.9%",
				height: "3%",
				top: "5.5%",
				left: "28.3%",
				display: "none"
			}
		},
		"#MCM":{
			style:{
				width: "6%",
				height: "9%",
				top: "25%",
				left: "89%",
				display: "none",
			}
		},
		"#ABM":{
			style:{
				width: "15%",
				height: "9%",
				top: "84%",
				left: "19%",
				display: "none",
			}
		},
		"#DBG":{
			style:{
				width: "21%",
				height: "10%",
				bottom: 0,
				left: "41%",
				display: "none",
			}
		},
		"#RESET":{
			style:{
				width: "5.2%",
				height: "14.5%",
				top: "12%",
				left: "15.5%",
				"border-radius": "50%"
			}
		}
	}
};
