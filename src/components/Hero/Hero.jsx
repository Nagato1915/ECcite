import React from 'react';
import heroImg from '../../assets/img/hero.jpeg';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    heroImgBox: {
        width: "100%",
        height: "400px",
        margin: "0 auto"
    },
    heroImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    }
}))


const Hero = () => {

    const classes = useStyles()
    return(
        <div className="c-section-wrapin">
            <div className={classes.heroImgBox} >
                <img className={classes.heroImg} src={heroImg} />
            </div>
        </div>
    )
}

export default Hero