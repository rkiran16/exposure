const RelatedCollection = ({ collection }) => {
  const { cover_photo, title, tags, preview_photos, id } = collection;
  return (
    <>
      <div className="d-flex">
        <div className="w-75">
          <img src={cover_photo?.urls?.small} className="img-fluid w-100 object-fit-cover" style={{ height: '200px' }} />
        </div>
        {preview_photos && <div className="d-flex w-25 flex-column">
          <img src={preview_photos[1].urls?.small} className="img-fluid object-fit-cover" style={{ height: '100px' }} />
          <img src={preview_photos[2].urls?.small} className="img-fluid object-fit-cover" style={{ height: '100px' }} />
        </div>}
      </div>
      <p className="h5 my-3 font-monospace">{title}</p>
      {tags && <>
        <div className='d-flex flex-wrap my-3'>
          {tags.map((tag, index) => {
            return (
              <span key={`${index}${title}`} className="badge p-2 text-bg-secondary me-2 my-2">{tag?.title}</span>
            )
          })}
        </div>
      </>}
    </>
  )
}

export default RelatedCollection;