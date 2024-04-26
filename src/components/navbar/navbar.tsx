import { navItems } from '@/config/constants'
import MenuIcon from '@mui/icons-material/Menu'
import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
	window?: () => Window
}

const drawerWidth = 300

const Navbar = ({ window }: Props) => {
	const [mobileOpen, setMobileOpen] = useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState)
	}

	const container =
		window !== undefined ? () => window().document.body : undefined

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ mx: 2 }}>
			<Box sx={{ my: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
				<Image src={'/logo.svg'} alt='Image' width={45} height={45} />
				<Typography
					variant='h6'
					style={{ fontWeight: 'bold', fontSize: '25px' }}
				>
					OZODBEEE
				</Typography>
			</Box>
			<Divider />
			<List>
				{navItems.map(item => (
					<ListItem key={item.route} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<Box height={'10vh'} sx={{ display: 'flex' }}>
			<AppBar
				sx={{ height: '10vh', backgroundColor: '#141414' }}
				component='nav'
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', sm: 'flex', alignItems: 'center', gap: 3 },
						}}
					>
						<Image src={'/logo.svg'} alt='Image' width={45} height={45} />
						<Typography
							variant='h6'
							component='div'
							style={{ fontWeight: 'bold', fontSize: '25px' }}
						>
							OZODBEEE
						</Typography>
					</Box>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map(item => (
							<Button key={item.route} sx={{ color: '#fff' }}>
								{item.label}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component={'nav'}>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	)
}

export default Navbar
