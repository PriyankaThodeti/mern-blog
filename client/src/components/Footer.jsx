import { Footer, FooterLink, FooterLinkGroup } from 'flowbite-react'
import { Link } from 'react-router-dom'
import React from 'react'

export default function FooterComponent() {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to='/' className='self-center whitespace-nowrap text-lg sm:text--xl font-semibold dark:text'>
                            <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500 rounded-lg text-white'>
                                priyanka
                            </span>
                            blog
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid--cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='Follow Us' />
                            <FooterLinkGroup col>
                                <Footer.Link href='https://github.com/PriyankaThodeti' target='_blank' rel='noopener noreferrer'>GitHub
                                </Footer.Link>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <FooterLinkGroup col>
                                <Footer.Link href='#'>Terms &amp; Conditions
                                </Footer.Link>
                            </FooterLinkGroup>
                        </div>

                    </div>
                </div>
                <Footer.Divider/>
                <div>
                    <Footer.Copyright href='#' by="Priyanka's Blog" year={new Date().getFullYear()}/>
                </div>
            </div>
        </Footer>

    )
}
