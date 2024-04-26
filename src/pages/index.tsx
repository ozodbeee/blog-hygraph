import { Content, Hero, Sidebar } from '@/components'
import Layout from '@/layout/layout'
import { Box } from '@mui/material'

function Index() {
	return (
		<Layout>
			<Hero />
			<Box
				sx={{
					display: 'flex',
					gap: '20px',
					flexDirection: { xs: 'column', md: 'row' },
					padding: '20px',
				}}
			>
				<Sidebar />
				<Content />
			</Box>
		</Layout>
	)
}

export default Index
