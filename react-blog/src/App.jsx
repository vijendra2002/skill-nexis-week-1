import { useMemo, useState } from "react";
import posts from "./posts.json";

const categories = ["All", ...new Set(posts.map(post => post.category))];

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const visiblePosts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return posts.filter(post => {
      const matchesSearch = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(term);
      const matchesCategory = category === "All" || post.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return <div className="blog-page">
    <header className="blog-header"><a className="logo" href="#">Dev<span>Notes</span></a><nav><a href="#articles">Articles</a><a href="#about">About</a></nav></header>
    <main>
      <section className="blog-hero"><p className="eyebrow">LEARN • BUILD • SHARE</p><h1>Notes for curious<br/><span>developers.</span></h1><p>Short reads on frontend, JavaScript, React, and backend fundamentals.</p></section>
      <section className="articles" id="articles">
        <div className="articles-heading"><div><p className="eyebrow">THE LIBRARY</p><h2>Latest articles</h2></div><span className="count">{visiblePosts.length} posts</span></div>
        <div className="controls"><label className="search"><span>⌕</span><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles..." aria-label="Search articles"/></label><div className="filters" aria-label="Filter by category">{categories.map(item => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
        {visiblePosts.length ? <div className="post-grid">{visiblePosts.map(post => <article className="post-card" key={post.id}><div className="post-meta"><span>{post.category}</span><span>{post.readTime}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p><div className="post-bottom"><time>{post.date}</time><span aria-hidden="true">↗</span></div></article>)}</div> : <div className="empty">No articles match your search. Try another keyword or category.</div>}
      </section>
      <section className="about-blog" id="about"><p className="eyebrow">ABOUT THIS DEMO</p><h2>A simple React UI with real interactions.</h2><p>Posts are read from a local JSON file. Search and category filters update the cards without reloading the page.</p></section>
    </main>
    <footer className="blog-footer">DevNotes · React Blog UI practice</footer>
  </div>;
}
