import { Content } from '@/components'
import { BlogsTyps } from '@/interfaces/blogs.interface'
import Layout from '@/layout/layout'
import SEO from '@/layout/seo/seo'
import { BlogsService } from '@/services/blog.service'
import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'

const BlogPage = ({ blogs }: BlogPageProps) => {
	return (
		<SEO metaTitle='All blogs'>
			<Layout>
				<Box
					sx={{
						display: 'flex',
						gap: '20px',
						flexDirection: { xs: 'column', md: 'row' },
						padding: '20px',
						justifyContent: 'center',
					}}
				>
					<Content blogs={blogs} />
				</Box>
			</Layout>
		</SEO>
	)
}

export default BlogPage

export const getServerSideProps: GetServerSideProps<
	BlogPageProps
> = async () => {
	const blogs = await BlogsService.getAllBlogs()

	return {
		props: { blogs },
	}
}

interface BlogPageProps {
	blogs: BlogsTyps[]
}
