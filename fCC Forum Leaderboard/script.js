const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(timestamp);
  const diffMs = now - past;
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 60) {
    return `${diffMins}m ago`;
  } else if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else {
    return `${diffDays}d ago`;
  }
}

function viewCount(views) {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }
  return views;
}

function forumCategory(id) {
  const cat = allCategories[id];
  const category = cat ? cat.category : 'General';
  const className = cat ? cat.className : 'general';
  const href = `${forumCategoryUrl}${className}/${id}`;
  return `<a href="${href}" class="category ${className}">${category}</a>`;
}

function avatars(posters, users) {
  return posters
    .map(poster => {
      const user = users.find(u => u.id === poster.user_id);
      if (!user) return '';
      const src = user.avatar_template.startsWith('/')
        ? `${avatarUrl}${user.avatar_template.replace('{size}', '30')}`
        : user.avatar_template.replace('{size}', '30');
      return `<img src="${src}" alt="${user.name}" />`;
    })
    .join('');
}

function showLatestPosts(data) {
  const { users, topic_list } = data;
  const { topics } = topic_list;

  const rows = topics.map(topic => {
    const { id, title, slug, posts_count, views, posters, category_id, bumped_at } = topic;
    return `<tr>
      <td>
        <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
        ${forumCategory(category_id)}
      </td>
      <td>
        <div class="avatar-container">
          ${avatars(posters, users)}
        </div>
      </td>
      <td>${posts_count - 1}</td>
      <td>${viewCount(views)}</td>
      <td>${timeAgo(bumped_at)}</td>
    </tr>`;
  });

  document.getElementById('posts-container').innerHTML = rows.join('');
}

async function fetchData() {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();