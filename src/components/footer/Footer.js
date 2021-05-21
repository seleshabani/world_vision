import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { FooterAction, FooterBrand, FooterContent, FooterCopy, FooterItems, FooterItemsItem, FooterThemeToggler, FooterWrapper } from './styledFooter';

const Footer = ({onThemeChange,theme}) => {
    const [isDark, setisDark] = useState(false);

    const handleDarkmode = ()=>{
        // theme ==='light'? onThemeChange('dark'):onThemeChange('light')
        if (theme ==='light') {
            onThemeChange('dark')
            setisDark(true)
        }else{
            onThemeChange('light')
            setisDark(false)
        }
    }
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterBrand>
                    World Vision
                </FooterBrand>
                <FooterItems>
                    <FooterItemsItem>
                        <i className="fa fa-newspaper"></i>
                        <Link to='actus'>
                            actualités
                        </Link>
                    </FooterItemsItem>
                    <FooterItemsItem>
                        <i className="fa fa-music"></i>
                        <Link to='streams'>
                            streams
                        </Link>
                    </FooterItemsItem>
                    <FooterItemsItem>
                        <i className="fa fa-users"></i>
                        <Link to='artistes'>
                            artistes
                        </Link>
                    </FooterItemsItem>
                </FooterItems>
                <FooterAction>
                    <a href='#top'>
                        <i className="fa fa-arrow-up"></i>
                    </a>
                </FooterAction>
            </FooterContent>
            <FooterCopy>
                <h6><a rel="noreferrer" target="_blank" href='https://seleshabani.github.io/html_Templates/portfolio_v5/'>&copy;SeleShabani</a></h6>
                <div className="dark_toggler">
                    <i className="fa fa-sun"></i>
                    <FooterThemeToggler isDark={isDark} onClick={()=>{handleDarkmode()}}/>
                    <i className='fa fa-moon'></i>
                </div>
            </FooterCopy>
        </FooterWrapper>
    )
}
export default Footer;