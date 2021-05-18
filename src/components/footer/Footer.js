import React from 'react'
import { Link } from 'react-router-dom';
import { FooterAction, FooterBrand, FooterContent, FooterCopy, FooterItems, FooterItemsItem, FooterWrapper } from './styledFooter';

const Footer = () => {
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
            {/* <FooterCopy>
                <h6>&copy;SeleShabani</h6>
            </FooterCopy> */}
        </FooterWrapper>
    )
}
export default Footer;