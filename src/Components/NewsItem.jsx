import image from "../assets/newsImg.jpeg"

function NewsItem({ title, description, src, url }) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{ maxWidth: "345px" }}>
      <img src={src?src:image} className="card-img-top" alt="..." style={{ height: "200x", width: "325px" }} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Click on the read more button to read more about this news."}</p>
        <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div>
  )
}

export default NewsItem