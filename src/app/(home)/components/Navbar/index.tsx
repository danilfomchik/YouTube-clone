'use client';

import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Divider, Grid2, List} from '@mui/material';
import {usePathname} from 'next/navigation';

import {defaultPageIndex, pages} from './constants';
import NavbarItem from './NavbarItem';
import {MuiDrawer} from './Styles';
import {DrawerHeader} from '../Header/Styles';
import NotAuthorized from './NotAuthorized';
import {selectNavbarStatus} from '@/app/redux/navbar/selectors';

const Navbar = () => {
    const [selectedIndex, setSelectedIndex] = useState(defaultPageIndex);

    const navbarStatus = useSelector(selectNavbarStatus);
    const pathname = usePathname();

    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        setSelectedIndex(defaultPageIndex);

        pages.forEach(page => {
            if (pathname === page.path) {
                setSelectedIndex(pages.indexOf(page));
            }
        });
    }, [pathname]);

    return (
        <MuiDrawer variant="permanent" open={navbarStatus}>
            <DrawerHeader />
            <List component="nav" dense>
                {pages.map(page => {
                    const pageIndex = pages.indexOf(page);

                    return (
                        <NavbarItem
                            key={page.label}
                            page={page}
                            navbarStatus={navbarStatus}
                            handleListItemClick={handleListItemClick}
                            isSelected={selectedIndex === pageIndex}
                            pageIndex={pageIndex}
                        />
                    );
                })}
            </List>
            <Divider />
            <Grid2 container p={navbarStatus ? 2 : 0} pt={2} gap={1.5}>
                <NotAuthorized navbarStatus={navbarStatus} />
            </Grid2>
        </MuiDrawer>
    );
};

export default Navbar;
