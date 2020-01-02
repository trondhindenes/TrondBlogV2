import os
import json
import frontmatter
import markdown

old_blog_folder = '../../trondsworking-blog-gatsby/content/blog'
export_path = 'import.json'

sanity_objects = []

blog_dirs = os.listdir(old_blog_folder)
for blog_file in blog_dirs[0:1]:
  full_path = os.path.join(old_blog_folder, blog_file, 'index.md')
  post = frontmatter.load(full_path)
  post_title = post.metadata['title']
  post_date = post.metadata['date']
  slug = post.metadata.get('slug')
  with open(full_path, 'r') as stream:
    body = markdown.markdown(stream.read())

  body = ''.join(body.split('<hr />')[2:]) # get rid of meta info

  if slug:
    slug = slug.replace('/@trondhindenes/', '')

  sanity_json_obj = {
    '_type': 'post',
    'title': post_title,
    #'slug': slug,
    'publishedAt': post_date,
    'orig_body': body
  }
  with open(export_path, 'w') as out_stream:
    out_stream.write(json.dumps(sanity_json_obj) + os.linesep)
