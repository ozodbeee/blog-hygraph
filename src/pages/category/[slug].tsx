import { Content, Sidebar } from '@/components'
import { BlogsTyps } from '@/interfaces/blogs.interface'
import { CategoryTyps } from '@/interfaces/categories.interface'
import Layout from '@/layout/layout'
import SEO from '@/layout/seo/seo'
import { BlogsService } from '@/services/blog.service'
import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'

const CategoryDetailedPage = ({
	blogs,
	latestBlogs,
	categories,
}: DetailedCategoriesPageProps) => {
	return (
		<SEO metaTitle={'Categories'}>
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

export default CategoryDetailedPage

export const getServerSideProps: GetServerSideProps<
	DetailedCategoriesPageProps
> = async ({ query }) => {
	const blogs = await BlogsService.getDetailedCategoriesBlog(
		query.slug as string
	)
	const latestBlogs = await BlogsService.getLatestBlog()
	const categories = await BlogsService.getCategories()

	return {
		props: {
			blogs,
			latestBlogs,
			categories,
		},
	}
}

interface DetailedCategoriesPageProps {
	blogs: BlogsTyps[]
	latestBlogs: BlogsTyps[]
	categories: CategoryTyps[]
}
