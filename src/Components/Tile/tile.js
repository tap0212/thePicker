import React, {useState, useEffect} from 'react'
import {Grid} from "@material-ui/core"
import '../../../node_modules/react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import LoadingOverlay from 'react-loading-overlay';

import './tile.scss'
const Tile = (props) => {
    const [data, setData] = useState("")
    const [ open, setOpen] = useState(false) 
    const [isActive, setIsActive] = useState(false)
    const [colors, setColors] = useState("")
    const [color1, setColor1] = useState("")
    const [color2, setColor2] = useState("")
    const [color3, setColor3] = useState("")
    const [color4, setColor4] = useState("")


    const [col1, setCol1] = useState("")
    const [col2, setCol2] = useState("")
    const [col3, setCol3] = useState("")
    const [col4, setCol4] = useState("")



    const c1 = props.data[0].color
    const c2 = props.data[1].color
    const c3 = props.data[2].color
    const c4 = props.data[3].color
    const c5 = props.data[4].color
    const c6 = props.data[5].color
    const c7 = props.data[6].color
    const c8 = props.data[7].color
    const c9 = props.data[8].color
    const c10 = props.data[9].color
    const c11 = props.data[10].color
    const c12 = props.data[11].color
    const c13 = props.data[12].color
    const c14 = props.data[13].color
    const c15 = props.data[14].color
    
    useEffect(() => {
        props.setIsFetching(true)
        getData().then(res => {
            console.log(res)
            setData(res)
            props.setIsFetching(false)
        })
        .catch(err => {
            console.log(err)
            props.setIsFetching(false)
        })
    }, [])
    const getData = () => {
        return fetch("https://thepicker.herokuapp.com/api/get", {
            method:"GET"
        }).then(res => {
            return res.json()
        }).catch(err => console.log(err))
    }
   const onOpenModal = () => {
        setOpen(true)
      };
     
     const onCloseModal = () => {
       setOpen(false)
      };



    const handleCopy = (e) => {
       setIsActive(true)
        const chosenColor = e.target.innerText
        data.map(color => {
            if(color.color[0].toUpperCase() === chosenColor){
                setColors(color.color) 
           
            setColor1(color.color[0])
            setColor2(color.color[1])
            setColor3(color.color[2])
            setColor4(color.color[3])

            setCol1(color.color[0])
            setCol2(color.color[1])
            setCol3(color.color[2])
            setCol4(color.color[3])
            setIsActive(false)
            onOpenModal(true)
            }
        })
     
    }
    const copyColor = (e) => {
        navigator.clipboard.writeText(e.target.innerText)
       const expr = e.target.id 
       switch(expr) {
           case "1":
               setCol1("Copied!")
               break;
            case "2":
               setCol2("Copied!")
               break;
            case "3":
                setCol3("Copied!")
                break;
            default:
                setCol4("Copied!")
        }
    }

    return (
        <div className="tile" >
        <LoadingOverlay
                active={isActive}
                spinner
                text='Fetching the canvas...'
                
        >
        <h2>{props.text}</h2>
           <div className="container">
           <Grid container>
                <Grid item >
                    <div onClick={handleCopy} id={c1} className="palette" style={{backgroundColor: c1}}>
                        <p onClick={handleCopy} id={c1}>{c1}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div onClick={handleCopy} id={c2} className="palette" style={{backgroundColor: c2}}>
                        <p onClick={handleCopy} id={c2}>{c2}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div onClick={handleCopy} id={c3} className="palette" style={{backgroundColor: c3}}>
                        <p onClick={handleCopy} id={c3}>{c3}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div onClick={handleCopy} id={c4} className="palette" style={{backgroundColor: c4}}>
                        <p onClick={handleCopy} id={c4} >{c4}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div onClick={handleCopy} id={c5} className="palette" style={{backgroundColor: c5}}>
                        <p onClick={handleCopy} id={c5}>{c5}</p>
                    </div>
                </Grid>
            </Grid>
           </div>

           <div className="container" >
           <Grid container>
                <Grid item >
                    <div onClick={handleCopy} id={c6} className="palette" style={{backgroundColor: c6}}>
                        <p onClick={handleCopy} id={c6}>{c6}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div onClick={handleCopy} id="7" className="palette" style={{backgroundColor: c7}}>
                    <p onClick={handleCopy} id={c7}>{c7}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div onClick={handleCopy} id={c8} className="palette" style={{backgroundColor: c8}}>
                    <p onClick={handleCopy} id={c8}>{c8}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div onClick={handleCopy} id={c9} className="palette" style={{backgroundColor: c9}}>
                    <p onClick={handleCopy} id={c9}>{c9}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div onClick={handleCopy} id={c10} className="palette" style={{backgroundColor: c10}}>
                    <p onClick={handleCopy} id={c10}>{c10}</p>
                    </div>
                </Grid>
            </Grid>
           </div>


          <div className="container">
           <Grid container>
                <Grid item >
                    <div onClick={handleCopy} id={c11} className="palette" style={{backgroundColor: c11}}>
                    <p onClick={handleCopy} id={c11}>{c11}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div onClick={handleCopy} id={c12} className="palette" style={{backgroundColor: c12}}>
                    <p onClick={handleCopy} id={c12}>{c12}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div onClick={handleCopy} id={c13} className="palette" style={{backgroundColor: c13}}>
                    <p onClick={handleCopy} id={c13}>{c13}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div onClick={handleCopy} id={c14} className="palette" style={{backgroundColor: c14}}>
                    <p onClick={handleCopy} id={c14}>{c14}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div onClick={handleCopy} id={c15} className="palette" style={{backgroundColor: c15}}>
                    <p onClick={handleCopy} id={c15}>{c15}</p>
                    </div>
                </Grid>
            </Grid>
            
           </div>


           <Modal open={open} onClose={onCloseModal} center>
              {
                  colors &&
                  <div className="color-container">
                      <Grid container>
                          <Grid item xs={3}>
                              <div className="color" onClick={copyColor} id="1" style={{backgroundColor: color1}}>
                                <p onClick={copyColor} id="1">{col1}</p>
                              </div>
                          </Grid>

                          <Grid item xs={3}>
                              <div className="color" onClick={copyColor} id="2" style={{backgroundColor: color2}}>
                              <p onClick={copyColor} id="2">{col2}</p>
                              </div>
                          </Grid>

                          <Grid item xs={3}>
                              <div className="color" onClick={copyColor} id="3" style={{backgroundColor: color3}}>
                              <p onClick={copyColor} id="3">{col3}</p>
                              </div>
                          </Grid>

                          <Grid item xs={3}>
                              <div className="color" onClick={copyColor}  id="4" style={{backgroundColor: color4}}>
                              <p onClick={copyColor} id="4"> {col4}</p>
                              </div>
                          </Grid>

                      </Grid>
                        <p>Click to copy</p>
                  </div>
              }
              
            </Modal>


            </LoadingOverlay>
                        
        </div>
    )
}
export default Tile