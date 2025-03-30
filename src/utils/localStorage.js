const LOCAL_STORAGE_KEY = "saturnfit-posts";

export function getStoredPosts() {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveNewPost(post) {
  const existing = getStoredPosts();
  const updated = [post, ...existing];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
}

export function deletePost(id) {
  const existing = getStoredPosts();
  const filtered = existing.filter((post) => post.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filtered));
}
