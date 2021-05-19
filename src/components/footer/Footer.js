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
                        <i className="fa fa-users"></i>
                        <Link to=''>
                            Artistes
                        </Link>
                    </FooterItemsItem>
                </FooterItems>
                <FooterAction>
                    <i className="fa fa-arrow-up"></i>
                </FooterAction>
            </FooterContent>
            <FooterCopy>
                <h6>&copy;SeleShabani</h6>
                <FooterThemeToggler isDark={isDark} onClick={()=>handleDarkmode()}/>
            </FooterCopy>
        </FooterWrapper>
    )
}
export default Footer;