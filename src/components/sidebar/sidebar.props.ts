import { BlogsTyps } from '@/interfaces/blogs.interface'
import { CategoryTyps } from '@/interfaces/categories.interface'

export interface SidebarProps {
	latestBlogs: BlogsTyps[]
	categories: CategoryTyps[]
}
