import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import VerifiedIcon from '@mui/icons-material/Verified';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Navbar.css'

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#001f36" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Menu hamburger mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))} */}
                            <a href="https://github.com/JoaoMaganin/" target='_blank' rel="noreferrer" className='containerLinks'>
                                <MenuItem>
                                    <Typography sx={{ textAlign: 'center' }}>Linkedin</Typography>
                                </MenuItem>
                            </a>

                            <a href="https://github.com/JoaoMaganin/" target='_blank' rel="noreferrer" className='containerLinks'>
                                <MenuItem>
                                    <Typography sx={{ textAlign: 'center' }}>Github</Typography>
                                </MenuItem>
                            </a>

                            <a href="https://github.com/JoaoMaganin/" target='_blank' rel="noreferrer" className='containerLinks'>
                                <MenuItem>
                                    <Typography sx={{ textAlign: 'center' }}>Currículo</Typography>
                                </MenuItem>
                            </a>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', fontFamily: "Sansation" }}
                            >
                                {page}
                            </Button>
                        ))} */}
                        <a href="https://www.linkedin.com/in/joaomontemor/" target='_blank' rel="noreferrer" className='containerLinks'><LinkedInIcon fontSize='large' /></a>

                        <a href="https://github.com/JoaoMaganin/" target='_blank' rel="noreferrer" className='containerLinks'><GitHubIcon fontSize='large' /></a>

                        <a href={`${process.env.PUBLIC_URL}/assets/cv_joaomaganin.pdf`} target='_blank' rel="noreferrer" className='containerLinks'>Currículo</a>
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Joao Maganin" src={`${process.env.PUBLIC_URL}/assets/images/avatar.jpg`} />
                            <Typography sx={{ textAlign: 'center', color: "white", marginLeft: "10px", fontFamily: "Sansation", marginRight: '10px' }}> JoaoMaganin</Typography>
                            <VerifiedIcon style={{ color: "white" }} />
                        </IconButton>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
