export default function BlogCard(props) {
  return (
    <div className="blog-card" id={props.id}>
      <div className="blog-card-content">
        <button>{props.topic}</button>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p className="card-date">{props.date}</p>
      </div>
    </div>
  );
}
