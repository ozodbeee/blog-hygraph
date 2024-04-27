import { Content, Sidebar } from '@/components'
import Layout from '@/layout/layout'
import SEO from '@/layout/seo/seo'
import { Box } from '@mui/material'
import { useRouter } from 'next/navigation'
import { DetailedCategoriesPageProps } from './[slug]'

export const CategoryDetailedPage = ({
	blogs,
	latestBlogs,
	categories,
}: DetailedCategoriesPageProps) => {
	const router = useRouter()
	const query = (router as any).query

	return (
		<SEO metaTitle={`${router.query.slug}-category`}>
			<Layout>
				<Box
					sx={{
						display: 'flex',
						gap: '20px',
						flexDirection: { xs: 'column', md: 'row' },
						padding: '20px',
					}}
				>
					<Sidebar latestBlogs={latestBlogs} categories={categories} />
					<Content blogs={blogs} />
				</Box>
			</Layout>
		</SEO>
	)
}
