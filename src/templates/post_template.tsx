// import { graphql, PageProps } from 'gatsby';
// import * as React from 'react';
//
// import MDXRender from '@/components/MDXRender';
// import Layout from '@/layout';
// import { MarkdownRemark } from 'GatsbyGraphQL';
// import PostNavigation from '@/components/PostNavigation';
// import Preface from '@/components/Preface';
// import Seo from '@/components/Seo';
// import { Utils } from '@/utils/Utils';
//
// type Props = {
//     post: MarkdownRemark;
//     prev: MarkdownRemark;
//     next: MarkdownRemark;
// };
//
// const PostLayout: React.FC<PageProps> = ({ data }) => {
//     const { post, prev, next } = data as Props;
//     const result = Utils.HashTag.create(post.html);
//     return (
//         <Layout>
//             <Preface {...post.frontmatter} />
//             <div className="markdown">
//                 <MDXRender html={result} />
//             </div>
//             <PostNavigation prevPost={prev} nextPost={next} />
//         </Layout>
//     );
// };
//
// export const Head = ({ pageContext }: { pageContext: { title: string; slug: string; nextSlug: string; prevSlug: string } }) => {
//     return <Seo title={pageContext.title} />;
// };
//
// export const query = graphql`
//     query PostDetailBySlug($slug: String, $nextSlug: String, $prevSlug: String) {
//         post: markdownRemark(fields: { slug: { eq: $slug } }) {
//             id
//             html
//             rawMarkdownBody
//             frontmatter {
//                 date(formatString: "YYYY.MM.DD")
//                 title
//                 tags
//                 stage
//             }
//             fields {
//                 slug
//             }
//         }
//         prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
//             id
//             rawMarkdownBody
//             frontmatter {
//                 date(formatString: "YYYY.MM.DD")
//                 title
//                 tags
//                 stage
//             }
//             fields {
//                 slug
//             }
//         }
//         next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
//             id
//             rawMarkdownBody
//             frontmatter {
//                 date(formatString: "YYYY.MM.DD")
//                 title
//                 tags
//                 stage
//             }
//             fields {
//                 slug
//             }
//         }
//     }
// `;
//
// export default PostLayout;